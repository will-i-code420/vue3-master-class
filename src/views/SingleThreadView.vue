<script setup>
import { ref, reactive, computed } from 'vue'
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
const newPostText = ref('')
const thread = computed(() => {
  return threads.find((thread) => thread.id === props.id)
})
const threadPosts = computed(() => {
  return posts.filter((post) => post.threadId === props.id)
})
function addPost() {
  const id = guidGenerator()
  const threadIdx = threads.findIndex((thread) => thread.id === props.id)
  const newPost = {
    id,
    text: newPostText.value,
    publishedAt: Date.now() / 1000,
    threadId: props.id,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
  }
  posts.push(newPost)
  threads[threadIdx].posts.push(id)
  newPostText.value = ''
}
function guidGenerator() {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
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
    <div class="col-full mt-1">
      <h1>Add post in <i>Cooking</i></h1>

      <form @submit.prevent="addPost">
        <div class="form-group">
          <label for="thread_content">Post Content:</label>
          <textarea
            v-model="newPostText"
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
