<script setup>
import CategoryList from '@/components/CategoryList.vue'
import { useCategoriesStore } from '@/stores/categories'
const categoriesStore = useCategoriesStore()
</script>

<template>
  <div class="col-full">
    <h1 class="text-center">Welcome To The Forum</h1>
    <CategoryList :categories="categoriesStore.categories" />
  </div>
</template>

<style scoped></style>

TODO:Leave notes on lessons 65: had to add types: module to package.json and may be due to using
vite and not cli, also check about import.meta.env TODO: leave note on lessons 66: new lifecycle
chart shows setup compostion above all other life cycles, so why use anything else
