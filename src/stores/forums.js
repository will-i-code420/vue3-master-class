import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useForumsStore = defineStore('forums', () => {
  const forums = ref(sourceData.forums)
  const getForum = computed(() => (id) => forums.value.find((forum) => forum.id === id))
  return { forums, getForum }
})
