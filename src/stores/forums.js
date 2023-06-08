import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useForumsStore = defineStore('forums', () => {
  const forums = ref(sourceData.forums)
  const getForum = computed(() => (id) => forums.value.find((forum) => forum.id === id))
  const getForums = computed(() => (id) => forums.value.filter((forum) => forum.categoryId === id))
  return { forums, getForum, getForums }
})
