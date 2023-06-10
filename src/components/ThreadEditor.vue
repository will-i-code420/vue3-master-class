<script setup>
import { reactive } from 'vue'
const emit = defineEmits(['submitThread', 'cancelThread'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  }
})
const threadForm = reactive({
  title: props.title,
  text: props.text
})
function submitThread() {
  emit('submitThread', { ...threadForm })
}
function cancelSubmit() {
  emit('cancelThread')
}
</script>

<template>
  <form @submit.prevent="submitThread">
    <div class="form-group">
      <label for="thread_title">Title:</label>
      <input
        v-model="threadForm.title"
        type="text"
        id="thread_title"
        class="form-input"
        name="title"
      />
    </div>

    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea
        v-model="threadForm.text"
        id="thread_content"
        class="form-input"
        name="content"
        rows="8"
        cols="140"
      ></textarea>
    </div>

    <div class="btn-group">
      <button @click.prevent="cancelSubmit" class="btn btn-ghost">Cancel</button>
      <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
    </div>
  </form>
</template>

<style scoped></style>
