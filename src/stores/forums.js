import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useThreadsStore } from './threads'
import { useUsersStore } from './users'
import { findById, upsert, appendChildToParent, getFirestoreDoc } from '@/helpers'

export const useForumsStore = defineStore('forums', () => {
  const forums = ref([])
  const getForum = computed(() => (id) => findById(forums.value, id))
  const getForums = computed(() => (id) => forums.value.filter((forum) => forum.categoryId === id))
  function addNewThreadId({ parentId, childId }) {
    appendChildToParent({ child: 'threads' })(forums.value, { parentId, childId })
  }
  async function initForum(id) {
    const forum = await fetchForum(id)
    forum.threads.forEach(async (threadId) => {
      const thread = await useThreadsStore().fetchThread(threadId)
      await useUsersStore().fetchUser(thread.userId)
    })
  }
  async function initCreateThread(id) {
    await fetchForum(id)
  }
  async function fetchForum(id) {
    const forum = await getFirestoreDoc({
      collection: 'forums',
      id
    })
    addForum(forum)
    return forum
  }
  async function fetchForums(ids) {
    ids.forEach(async (id) => {
      const forum = await getFirestoreDoc({
        collection: 'forums',
        id
      })
      addForum(forum)
    })
  }
  function addForum(forum) {
    upsert(forums.value, forum)
  }
  return {
    forums,
    fetchForum,
    fetchForums,
    getForum,
    getForums,
    addNewThreadId,
    initForum,
    initCreateThread
  }
})
