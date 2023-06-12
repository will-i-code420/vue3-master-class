import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { findById } from '@/helpers'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref([])
  const getCategory = computed(() => (id) => findById(categories.value, id))
  return { categories, getCategory }
})
