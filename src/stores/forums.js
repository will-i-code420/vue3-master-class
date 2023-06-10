import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useForumsStore = defineStore('forums', () => {
  const forums = ref(sourceData.forums)
  const getForum = computed(() => (id) => forums.value.find((forum) => forum.id === id))
  const getForums = computed(() => (id) => forums.value.filter((forum) => forum.categoryId === id))
  function addNewThreadId(thread) {
    const forum = forums.value.find((forum) => forum.id === thread.forumId)
    forum.threads.push(thread.threadId)
  }
  return { forums, getForum, getForums, addNewThreadId }
})
