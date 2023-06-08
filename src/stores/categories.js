import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref(sourceData.categories)
  const getCategory = computed(
    () => (id) => categories.value.find((category) => category.id === id)
  )
  return { categories, getCategory }
})
