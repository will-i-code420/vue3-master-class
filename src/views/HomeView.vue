<script setup>
import { reactive } from 'vue'
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
  <main>
    <div v-for="thread in threads" :key="thread.id">
      <h2>{{ thread.title }}</h2>
      <div v-for="postId in thread.posts" :key="postId">
        <p>{{ getUser(postId).name }}</p>
        <p>{{ getPost(postId).text }}</p>
      </div>
    </div>
  </main>
</template>
