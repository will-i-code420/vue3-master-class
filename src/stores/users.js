import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useThreadsStore } from '@/stores/threads'
import { usePostsStore } from '@/stores/posts'
import { findById, upsert, appendChildToParent } from '@/helpers'

export const useUsersStore = defineStore('users', () => {
  const users = ref(sourceData.users)
  const authId = ref('ALXhxjwgY9PinwNGHpfai6OWyDu2')
  const getUser = computed(() => (id) => {
    const user = findById(users.value, id)
    return {
      ...user,

      get posts() {
        return usePostsStore().getPosts('user', user.id)
      },
      get threads() {
        return useThreadsStore().getThreads('user', user.id)
      },
      get postsCount() {
        return this.posts.length
      },
      get threadsCount() {
        return this.threads.length
      }
    }
  })
  function updateUser(userInfo) {
    upsert(users.value, userInfo)
  }
  function addNewThreadId({ parentId, childId }) {
    appendChildToParent({ child: 'threads' })(users.value, { parentId, childId })
  }
  return { users, authId, getUser, updateUser, addNewThreadId }
})
