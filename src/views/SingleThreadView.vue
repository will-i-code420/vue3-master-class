<script setup>
import { computed } from 'vue'
import { useThreadsStore } from '@/stores/threads'
import { usePostsStore } from '@/stores/posts'
import PostList from '@/components/PostList.vue'
import AddPostForm from '@/components/AddPostForm.vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const threadsStore = useThreadsStore()
const postsStore = usePostsStore()
const thread = computed(() => threadsStore.getThread(props.id))
const threadPosts = computed(() => postsStore.getPosts('thread', props.id))
function addPost(evData) {
  const newPost = {
    ...evData,
    publishedAt: Date.now() / 1000,
    threadId: props.id,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
  }
  postsStore.createPost(newPost)
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
