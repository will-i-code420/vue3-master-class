import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useThreadsStore = defineStore('threads', () => {
  const threads = ref(sourceData.threads)
  const getThread = computed(() => (id) => threads.value.filter((thread) => thread.id === id))
  return { threads, getThread }
})
