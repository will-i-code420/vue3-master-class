<script setup>
import { computed } from 'vue'
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const category = computed(() => {
  return sourceData.categories.find((category) => category.id === props.id)
})
function getCategoryForums(id) {
  return sourceData.forums.filter((forum) => forum.categoryId === id)
}
</script>

<template>
  <ForumList :title="category.name" :forums="getCategoryForums(category.id)" />
</template>

<style scoped></style>
