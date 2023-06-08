import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useThreadsStore = defineStore('threads', () => {
  const threads = ref(sourceData.threads)
  const getThread = computed(() => (id) => threads.value.find((thread) => thread.id === id))
  const getThreads = computed(() => (id) => threads.value.filter((thread) => thread.forumId === id))
  return { threads, getThread, getThreads }
})
