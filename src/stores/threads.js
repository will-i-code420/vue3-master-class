import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUsersStore } from './users'
import { usePostsStore } from './posts'
import { useForumsStore } from './forums'
import { findById, upsert, guidGenerator, appendChildToParent } from '@/helpers'

export const useThreadsStore = defineStore('threads', () => {
  const threads = ref([])
  const getThread = computed(() => (id) => {
    const thread = findById(threads.value, id)
    return {
      ...thread,
      get author() {
        return findById(useUsersStore().users, thread.userId)
      },
      get repliesCount() {
        return thread.posts.length - 1
      },
      get contributorsCount() {
        return thread.contributors.length
      }
    }
  })
  const getThreads = computed(
    () => (type, id) => threads.value.filter((thread) => thread[`${type}Id`] === id)
  )
  function addPostId({ parentId, childId }) {
    appendChildToParent({ child: 'posts' })(threads.value, { parentId, childId })
  }
  function addContributor({ parentId, childId }) {
    appendChildToParent({ child: 'contributors' })(threads.value, { parentId, childId })
  }
  async function createThread(newThread) {
    newThread.id = guidGenerator()
    newThread.publishedAt = Date.now() / 1000
    newThread.userId = useUsersStore().authId
    newThread.posts = []
    addThread(newThread)
    useForumsStore().addNewThreadId({ parentId: newThread.forumId, childId: newThread.id })
    useUsersStore().addNewThreadId({ parentId: newThread.userId, childId: newThread.id })
    usePostsStore().createPost({ text: newThread.text, threadId: newThread.id })
    return newThread.id
  }
  function addThread(thread) {
    upsert(threads.value, thread)
  }
  async function updateThread(threadEdit) {
    const thread = findById(threads.value, threadEdit.threadId)
    const post = usePostsStore().getPost(thread.posts[0])
    const newThread = { ...thread, title: threadEdit.title }
    const newPost = { ...post, text: threadEdit.text }
    addThread(newThread)
    usePostsStore().addPost(newPost)
    return newThread.id
  }
  return { threads, getThread, getThreads, addPostId, addContributor, createThread, updateThread }
})
