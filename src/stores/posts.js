import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useThreadsStore } from './threads'
import { useUsersStore } from './users'
import { findById, upsert, guidGenerator, getFirestoreDoc } from '@/helpers'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  function createPost(post) {
    post.id = guidGenerator()
    post.publishedAt = Date.now() / 1000
    post.userId = useUsersStore().authId
    addPost(post)
    useThreadsStore().addPostId({ parentId: post.threadId, childId: post.id })
    useThreadsStore().addContributor({ parentId: post.threadId, childId: useUsersStore().authId })
  }
  async function fetchPost(id) {
    const post = await getFirestoreDoc({
      collection: 'posts',
      id
    })
    addPost(post)
    await useUsersStore().fetchUser(post.userId)
  }
  function addPost(post) {
    upsert(posts.value, post)
  }
  const getPost = computed(() => (id) => findById(posts.value, id))
  const getPosts = computed(
    () => (type, id) => posts.value.filter((post) => post[`${type}Id`] === id)
  )
  return { posts, createPost, fetchPost, addPost, getPost, getPosts }
})
