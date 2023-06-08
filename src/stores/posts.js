import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref(sourceData.posts)
  const doubleCount = computed(() => count.value * 2)
  function createPost(post) {
    post.id = guidGenerator()
    posts.value.push(post)
  }
  function guidGenerator() {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
  }
  return { posts, doubleCount, createPost }
})
