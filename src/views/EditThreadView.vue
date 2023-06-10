<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useThreadsStore } from '@/stores/threads'
import { usePostsStore } from '@/stores/posts'
import ThreadEditor from '../components/ThreadEditor.vue'
const router = useRouter()
const props = defineProps({
  threadId: {
    type: String,
    required: true
  }
})
const thread = computed(() => useThreadsStore().getThread(props.threadId))
const threadText = computed(
  () => usePostsStore().posts.find((post) => post.id === thread.value.posts[0]).text
)
async function saveThread(evData) {
  const threadEdits = {
    ...evData,
    threadId: props.threadId
  }
  const newId = await useThreadsStore().updateThread(threadEdits)
  const thread = useThreadsStore().getThread(newId)
  router.push({ name: 'thread', params: { id: thread.id } })
}
function cancelThread() {
  router.push({ name: 'forum', params: { id: props.forumId } })
}
</script>

<template>
  <div class="col-full mt-1">
    <h1>
      Editing <i>{{ thread.title }}</i>
    </h1>
    <ThreadEditor
      :title="thread.title"
      :text="threadText"
      @submit-thread="saveThread"
      @cancel-thread="cancelThread"
    />
  </div>
</template>

<style scoped></style>
