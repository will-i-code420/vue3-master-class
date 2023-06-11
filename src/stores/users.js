import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { useThreadsStore } from '@/stores/threads'
import { usePostsStore } from '@/stores/posts'
import { findById } from '@/helpers'

export const useUsersStore = defineStore('users', () => {
  const users = ref(sourceData.users)
  const authId = ref('ALXhxjwgY9PinwNGHpfai6OWyDu2')
  const userThreads = ref(useThreadsStore().getThreads('user', authId.value))
  const userPosts = ref(usePostsStore().getPosts('user', authId.value))
  const getUser = computed(() => findById(users.value, authId.value))
  function updateUser(userInfo) {
    const idx = users.value.findIndex((user) => user.id === userInfo.id)
    users.value[idx] = userInfo
  }
  function addNewThreadId(thread) {
    const user = findById(users.value, thread.userId)
    if (!user.threads) user.threads = []
    user.threads.push(thread.threadId)
  }
  return { authId, getUser, userThreads, userPosts, updateUser, addNewThreadId }
})
