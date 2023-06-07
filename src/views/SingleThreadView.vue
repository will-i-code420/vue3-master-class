<script setup>
import { reactive, computed } from 'vue'
import sourceData from '@/data.json'
import PostList from '../components/PostList.vue'
import AddPostForm from '../components/AddPostForm.vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)

const thread = computed(() => {
  return threads.find((thread) => thread.id === props.id)
})
const threadPosts = computed(() => {
  return posts.filter((post) => post.threadId === props.id)
})
function addPost(evData) {
  const threadIdx = threads.findIndex((thread) => thread.id === props.id)
  const newPost = {
    ...evData,
    publishedAt: Date.now() / 1000,
    threadId: props.id,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
  }
  posts.push(newPost)
  threads[threadIdx].posts.push(evData.id)
}
</script>

<template>
  <article class="col-large mt-1">
    <!-- 
      TODO: Implement Breadcrumbs
      <ul class="breadcrumbs">
              <li><a href="#"><i class="fa fa-home fa-btn"></i>Home</a></li>
              <li><a href="category.html">Discussions</a></li>
              <li class="active"><a href="#">Cooking</a></li>
          </ul>
    -->
    <h1 class="text-center">{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <AddPostForm @submit-post="addPost" />
  </article>
</template>

<style scoped></style>
