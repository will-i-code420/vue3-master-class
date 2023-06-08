import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref(sourceData.categories)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { categories, doubleCount, increment }
})
