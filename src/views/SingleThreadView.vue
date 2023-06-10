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
    threadId: props.id
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
    <h1 class="text-center">
      {{ thread.title }}
      <router-link
        :to="{ name: 'editThread', params: { threadId: id } }"
        custom
        v-slot="{ navigate }"
      >
        <button @click="navigate" class="btn-green btn-small">Edit Thread</button>
      </router-link>
    </h1>
    <PostList :posts="threadPosts" />
    <AddPostForm @submit-post="addPost" />
  </article>
</template>

<style scoped></style>
