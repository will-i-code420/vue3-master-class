import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useForumsStore } from './forums'
import { findById, upsert, getFirestoreDoc, getFirestoreDocs } from '@/helpers'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref([])
  const getCategory = computed(() => (id) => findById(categories.value, id))
  async function initHome() {
    const docs = await getFirestoreDocs({ path: 'categories' })
    categories.value = docs
    const forumIds = docs.map((doc) => doc.forums).flat()
    await useForumsStore().fetchForums(forumIds)
  }
  async function initCategory(id) {
    const category = await fetchCategory(id)
    categories.value.push(category)
    const forumIds = [...category.forums]
    await useForumsStore().fetchForums(forumIds)
  }
  async function fetchCategory(id) {
    const category = await getFirestoreDoc({
      collection: 'categories',
      id
    })
    addCategory(category)
    return category
  }
  function addCategory(category) {
    upsert(categories.value, category)
  }
  return { categories, initHome, initCategory, fetchCategory, getCategory }
})
