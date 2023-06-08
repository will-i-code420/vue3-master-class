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
const category = computed(() => useCategoriesStore().getCategory(props.id))
const forums = computed(() => useForumsStore().getForums(props.id))
</script>

<template>
  <ForumList :title="category.name" :forums="forums" />
</template>

<style scoped></style>
