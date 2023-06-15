<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useThreadsStore } from '@/stores/threads'
import { useForumsStore } from '@/stores/forums'
import ThreadEditor from '../components/ThreadEditor.vue'
const router = useRouter()
const props = defineProps({
  forumId: {
    type: String,
    required: true
  }
})
const forumsStore = useForumsStore()
const forum = computed(() => forumsStore.getForum(props.forumId))
async function saveThread(evData) {
  const newThread = {
    ...evData,
    forumId: props.forumId
  }
  const newId = await useThreadsStore().createThread(newThread)
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
      Create new thread in <i>{{ forum.name }}</i>
    </h1>
    <ThreadEditor @submit-thread="saveThread" @cancel-thread="cancelThread" />
  </div>
</template>

<style scoped></style>
