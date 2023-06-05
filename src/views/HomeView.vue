<script setup>
import { reactive } from 'vue'
import ThreadList from '../components/ThreadList.vue'
import sourceData from '@/data.json'
const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)
function getPost(id) {
  return posts.find((post) => post.id === id)
}
function getUser(id) {
  const post = getPost(id)
  return users.find((user) => user.id === post.userId)
}
</script>

<template>
  <div class="col-full">
    <h1 class="text-center">Welcome To The Forum</h1>
    <ThreadList />
  </div>
</template>

<style scoped></style>
