<script setup>
import { ref } from 'vue'
const emit = defineEmits(['change', 'delete'])
const newPostText = ref('')
function submitPostForm() {
  const id = guidGenerator()
  emit('submitPost', { id, text: newPostText.value })
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
  <div class="col-full mt-1">
    <h1>Add post in <i>Cooking</i></h1>

    <form @submit.prevent="submitPostForm">
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
</template>

<style scoped></style>
