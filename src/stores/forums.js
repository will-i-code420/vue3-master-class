import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { findById, appendChildToParent } from '@/helpers'

export const useForumsStore = defineStore('forums', () => {
  const forums = ref(sourceData.forums)
  const getForum = computed(() => (id) => findById(forums.value, id))
  const getForums = computed(() => (id) => forums.value.filter((forum) => forum.categoryId === id))
  function addNewThreadId() {
    appendChildToParent(forums.value, { parent: 'forums', child: 'threads' })
  }
  return { forums, getForum, getForums, addNewThreadId }
})
