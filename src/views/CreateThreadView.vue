<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useThreadsStore } from '@/stores/threads'
import { useForumsStore } from '@/stores/forums'
const router = useRouter()
const props = defineProps({
  forumId: {
    type: String,
    required: true
  }
})
const title = ref('')
const text = ref('')
const forum = computed(() => useForumsStore().getForum(props.forumId))
async function saveThread() {
  const newThread = {
    title,
    text,
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

    <form @submit.prevent="saveThread">
      <div class="form-group">
        <label for="thread_title">Title:</label>
        <input v-model="title" type="text" id="thread_title" class="form-input" name="title" />
      </div>

      <div class="form-group">
        <label for="thread_content">Content:</label>
        <textarea
          v-model="text"
          id="thread_content"
          class="form-input"
          name="content"
          rows="8"
          cols="140"
        ></textarea>
      </div>

      <div class="btn-group">
        <button @click="cancelThread" class="btn btn-ghost">Cancel</button>
        <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
