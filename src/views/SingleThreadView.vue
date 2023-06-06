<script setup>
import { reactive, computed } from 'vue'
import sourceData from '@/data.json'
import PostList from '../components/PostList.vue'
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
    <div class="col-full mt-1">
      <h1>Create new thread in <i>Cooking</i></h1>

      <form action="">
        <div class="form-group">
          <label for="thread_title">Title:</label>
          <input type="text" id="thread_title" class="form-input" name="title" />
        </div>

        <div class="form-group">
          <label for="thread_content">Content:</label>
          <textarea
            id="thread_content"
            class="form-input"
            name="content"
            rows="8"
            cols="140"
          ></textarea>
        </div>

        <div class="btn-group">
          <button class="btn btn-ghost">Cancel</button>
          <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
        </div>
      </form>
    </div>
  </article>
</template>

<style scoped></style>
