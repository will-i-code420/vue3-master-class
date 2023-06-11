import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { findById } from '@/helpers'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref(sourceData.categories)
  const getCategory = computed(() => (id) => findById(categories.value, id))
  return { categories, getCategory }
})
