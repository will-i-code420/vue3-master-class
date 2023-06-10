import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { useThreadsStore } from './threads'
import { useUsersStore } from './users'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref(sourceData.posts)
  function createPost(post) {
    post.id = guidGenerator()
    post.publishedAt = Date.now() / 1000
    post.userId = useUsersStore().authId
    posts.value.push(post)
    useThreadsStore().addPostId(post.threadId, post.id)
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
