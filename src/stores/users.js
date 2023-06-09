import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useUsersStore = defineStore('users', () => {
  const users = ref(sourceData.users)
  const authId = ref('Miej9zSGMRZKDvMXzfxjVOyv3RF3')
  const getUser = computed(() => users.value.find((user) => user.id === authId.value))
  return { authId, getUser }
})
