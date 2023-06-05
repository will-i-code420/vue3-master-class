<script setup>
import ThreadList from '../components/ThreadList.vue'
import { reactive } from 'vue'
import sourceData from '@/data.json'
const threads = reactive(sourceData.threads)
</script>

<template>
  <div class="col-full">
    <h1 class="text-center">Welcome To The Forum</h1>
    <ThreadList :threads="threads" />
  </div>
</template>

<style scoped></style>
