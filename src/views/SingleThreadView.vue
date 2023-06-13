<script setup>
import { onMounted, computed } from 'vue'
import { getFirestoreDoc } from '@/helpers'
import { useThreadsStore } from '@/stores/threads'
import { usePostsStore } from '@/stores/posts'
import { useUsersStore } from '@/stores/users'
import PostList from '@/components/PostList.vue'
import AddPostForm from '@/components/AddPostForm.vue'
import BaseDateDisplay from '../components/BaseDateDisplay.vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
onMounted(async () => {
  console.log(`the component is now mounted.`)
  const thread = await fetchThread(props.id)
  console.log('got thread', thread)
})
const threadsStore = useThreadsStore()
const { fetchThread, getThread } = threadsStore
const postsStore = usePostsStore()
const usersStore = useUsersStore()
const { updateUser } = usersStore
const thread = computed(() => getThread(props.id))
const threadPosts = computed(() => {
  //postsStore.getPosts('thread', props.id)
  return []
})
function addPost(evData) {
  const newPost = {
    ...evData,
    threadId: props.id
  }
  postsStore.createPost(newPost)
}
</script>

<template>
  <!-- 
  <article v-if="thread" class="col-large mt-1">
    
      TODO: Implement Breadcrumbs
      <ul class="breadcrumbs">
              <li><a href="#"><i class="fa fa-home fa-btn"></i>Home</a></li>
              <li><a href="category.html">Discussions</a></li>
              <li class="active"><a href="#">Cooking</a></li>
          </ul>
    
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
      By <a href="#" class="link-unstyled">{{ thread.author.name }}</a
      >, <BaseDateDisplay :timestamp="thread.publishedAt" />
      <span style="float: right; margin-top: 2px" class="hide-mobile text-faded text-small"
        >{{ thread.repliesCount }} replies by {{ thread.contributorsCount }} contributors</span
      >
    </p>
    <PostList :posts="threadPosts" />
    <AddPostForm @submit-post="addPost" />
  </article>
  -->
  <div>
    <h1>single thread view from {{ id }}</h1>
  </div>
</template>

<style scoped></style>
