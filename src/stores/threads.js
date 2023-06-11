import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { useUsersStore } from './users'
import { usePostsStore } from './posts'
import { useForumsStore } from './forums'
import { findById, upsert, guidGenerator, appendChildToParent } from '@/helpers'

export const useThreadsStore = defineStore('threads', () => {
  const threads = ref(sourceData.threads)
  const getThread = computed(() => (id) => findById(threads.value, id))
  const getThreads = computed(
    () => (type, id) => threads.value.filter((thread) => thread[`${type}Id`] === id)
  )
  function addPostId() {
    appendChildToParent(threads.value, { parent: 'threads', child: 'posts' })
  }
  async function createThread(newThread) {
    newThread.id = guidGenerator()
    newThread.publishedAt = Date.now() / 1000
    newThread.userId = useUsersStore().authId
    newThread.posts = []
    addThread(newThread)
    useForumsStore().addNewThreadId({ parentId: newThread.forumId, childId: newThread.id })
    useUsersStore().addNewThreadId(newThread)
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
  return { threads, getThread, getThreads, addPostId, createThread, updateThread }
})
