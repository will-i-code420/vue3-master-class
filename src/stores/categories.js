import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useForumsStore } from './forums'
import { findById, getFirestoreDocs } from '@/helpers'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref([])
  const getCategory = computed(() => (id) => findById(categories.value, id))
  async function initHome() {
    const docs = await getFirestoreDocs({ path: 'categories' })
    categories.value = docs
    const forumIds = docs.map((doc) => doc.forums).flat()
    await useForumsStore().fetchForums(forumIds)
  }
  return { categories, initHome, getCategory }
})
