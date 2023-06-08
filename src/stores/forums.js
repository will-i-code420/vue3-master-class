import { ref } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useForumsStore = defineStore('forums', () => {
  const forums = ref(sourceData.forums)

  return { forums }
})
