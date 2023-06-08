<script setup>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'
defineProps({
  categories: {
    type: Array,
    required: true
  }
})
function getCategoryForums(id) {
  return sourceData.forums.filter((forum) => forum.categoryId === id)
}
</script>

<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getCategoryForums(category.id)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<style scoped></style>
