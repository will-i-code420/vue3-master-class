<script setup>
import { computed } from 'vue'
import { useThreadsStore } from '@/stores/threads'
import { usePostsStore } from '@/stores/posts'
import PostList from '@/components/PostList.vue'
import AddPostForm from '@/components/AddPostForm.vue'
import BaseDateDisplay from '../components/BaseDateDisplay.vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const threadsStore = useThreadsStore()
const postsStore = usePostsStore()

// thread.value.posts.map((postId) => usePostsStore().getPost(postId))

const thread = computed(() => threadsStore.getThread(props.id))
const threadPosts = computed(() => {
  return thread.value.posts.map((postId) => postsStore.getPost(postId))
})
function addPost(evData) {
  const newPost = {
    ...evData,
    threadId: props.id
  }
  postsStore.createPost(newPost)
}
// TODO: look into Unhandled error during execution of scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core, seems the componenet is loading data but erroring
</script>

<template>
  <article class="col-large mt-1">
    <!-- 
    TODO: Implement Breadcrumbs
    <ul class="breadcrumbs">
      <li>
        <a href="#"><i class="fa fa-home fa-btn"></i>Home</a>
      </li>
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
    <p>
      By <a href="#" class="link-unstyled">{{ thread.author?.name }}</a
      >, <BaseDateDisplay :timestamp="thread.publishedAt" />
      <span style="float: right; margin-top: 2px" class="hide-mobile text-faded text-small"
        >{{ thread.repliesCount }} replies by {{ thread.contributorsCount }} contributors</span
      >
    </p>
    <PostList :posts="threadPosts" />
    <AddPostForm @submit-post="addPost" />
  </article>
</template>

<style scoped></style>
