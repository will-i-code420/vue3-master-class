<script setup>
import CategoryList from '@/components/CategoryList.vue'
import { storeToRefs } from 'pinia'
import { useCategoriesStore } from '@/stores/categories'
const { categories } = storeToRefs(useCategoriesStore())
</script>

<template>
  <div class="col-full">
    <h1 class="text-center">Welcome To The Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<style scoped></style>
