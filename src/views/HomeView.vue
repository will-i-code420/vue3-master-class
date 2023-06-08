<script setup>
import ForumList from '@/components/ForumList.vue'
import { reactive } from 'vue'
import sourceData from '@/data.json'
const forums = reactive(sourceData.forums)
</script>

<template>
  <div class="col-full">
    <h1 class="text-center">Welcome To The Forum</h1>
    <ForumList :forums="forums" />
  </div>
</template>

<style scoped></style>
