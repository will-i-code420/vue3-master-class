<script setup>
import { ref } from 'vue'
const emit = defineEmits(['submitPost'])
const newPostText = ref('')
function submitPostForm() {
  emit('submitPost', { text: newPostText.value })
  newPostText.value = ''
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
