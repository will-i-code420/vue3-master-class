import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { useThreadsStore } from '@/stores/threads'
import { usePostsStore } from '@/stores/posts'

export const useUsersStore = defineStore('users', () => {
  const users = ref(sourceData.users)
  const authId = ref('ALXhxjwgY9PinwNGHpfai6OWyDu2')
  const userThreads = ref(useThreadsStore().getThreads('user', authId.value))
  const userPosts = ref(usePostsStore().getPosts('user', authId.value))
  const getUser = computed(() => users.value.find((user) => user.id === authId.value))
  return { authId, getUser, userThreads, userPosts }
})
