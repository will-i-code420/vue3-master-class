import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { useUsersStore } from './users'
import { usePostsStore } from './posts'
import { useForumsStore } from './forums'

export const useThreadsStore = defineStore('threads', () => {
  const threads = ref(sourceData.threads)
  const getThread = computed(() => (id) => threads.value.find((thread) => thread.id === id))
  const getThreads = computed(
    () => (type, id) => threads.value.filter((thread) => thread[`${type}Id`] === id)
  )
  function addPostId(threadId, postId) {
    const thread = threads.value.find((thread) => thread.id === threadId)
    if (!thread.posts) thread.posts = []
    thread.posts.push(postId)
  }
  function createThread(newThread) {
    newThread.id = guidGenerator()
    newThread.publishedAt = Date.now() / 1000
    newThread.userId = useUsersStore().authId
    newThread.posts = []
    threads.value.push(newThread)
    useForumsStore().addNewThreadId(newThread)
    useUsersStore().addNewThreadId(newThread)
    usePostsStore().createPost({ text: newThread.text, threadId: newThread.id })
  }
  function guidGenerator() {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
  }
  return { threads, getThread, getThreads, addPostId, createThread }
})
