import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { useThreadsStore } from './threads'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref(sourceData.posts)
  function createPost(post) {
    post.id = guidGenerator()
    posts.value.push(post)
    const thread = useThreadsStore().getThread(post.threadId)
    thread.push(post.id)
  }
  const getPosts = computed(
    () => (type, id) => posts.value.filter((post) => post[`${type}Id`] === id)
  )
  function guidGenerator() {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
  }
  return { posts, createPost, getPosts }
})
