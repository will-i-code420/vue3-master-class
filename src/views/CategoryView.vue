<script setup>
import { computed } from 'vue'
import { useCategoriesStore } from '@/stores/categories'
import { useForumsStore } from '@/stores/forums'
import ForumList from '@/components/ForumList.vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const categoriesStore = useCategoriesStore()
const category = computed(() => categoriesStore.getCategory(props.id) || {})
function getCategoryForums(id) {
  return useForumsStore().forums.filter((forum) => forum.categoryId === id)
}
</script>

<template>
  <ForumList
    :title="category.name"
    :forums="getCategoryForums(category.id)"
    :categoryId="category.id"
  />
</template>

<style scoped></style>
