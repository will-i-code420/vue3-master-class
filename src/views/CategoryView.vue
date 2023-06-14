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
const forumsStore = useForumsStore()
const category = computed(() => categoriesStore.getCategory(props.id))
const forums = computed(() => {
  return category.value.forums.map((forumId) => forumsStore.getForum(forumId))
})
</script>

<template>
  <ForumList :title="category.name" :forums="forums" />
</template>

<style scoped></style>
