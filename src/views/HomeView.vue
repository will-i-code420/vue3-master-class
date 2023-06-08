<script setup>
import CategoryList from '@/components/CategoryList.vue'
import { reactive } from 'vue'
import sourceData from '@/data.json'
const categories = reactive(sourceData.categories)
</script>

<template>
  <div class="col-full">
    <h1 class="text-center">Welcome To The Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<style scoped></style>
