import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { useUsersStore } from './users'
import { usePostsStore } from './posts'
import { useForumsStore } from './forums'
import { findById } from '@/helpers'

export const useThreadsStore = defineStore('threads', () => {
  const threads = ref(sourceData.threads)
  const getThread = computed(() => (id) => findById(threads.value, id))
  const getThreads = computed(
    () => (type, id) => threads.value.filter((thread) => thread[`${type}Id`] === id)
  )
  function addPostId(threadId, postId) {
    const thread = findById(threads.value, threadId)
    if (!thread.posts) thread.posts = []
    thread.posts.push(postId)
  }
  async function createThread(newThread) {
    newThread.id = guidGenerator()
    newThread.publishedAt = Date.now() / 1000
    newThread.userId = useUsersStore().authId
    newThread.posts = []
    addThread(newThread)
    useForumsStore().addNewThreadId(newThread)
    useUsersStore().addNewThreadId(newThread)
    usePostsStore().createPost({ text: newThread.text, threadId: newThread.id })
    return newThread.id
  }
  function addThread(thread) {
    const idx = threads.value.findIndex((t) => t.id === thread.id)
    if (thread.id && idx !== -1) {
      threads.value[idx] = thread
    } else {
      threads.value.push(thread)
    }
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
  function guidGenerator() {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
  }
  return { threads, getThread, getThreads, addPostId, createThread, updateThread }
})
