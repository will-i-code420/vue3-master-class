<script setup>
import { useUsersStore } from '@/stores/users'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
defineEmits(['cancelEdit', 'saveEdit'])
const activeUser = reactive({ ...props.user })
function cancelEdit() {
  router.push({ name: 'profile' })
}
function updateProfile() {
  useUsersStore().updateUser({ ...activeUser })
  router.push({ name: 'profile' })
}
</script>

<template>
  <div class="profile-card">
    <form @submit.prevent="updateProfile">
      <p class="text-center">
        <img
          :src="user.avatar"
          :alt="`${user.name} profile pic`"
          class="avatar-xlarge img-update"
        />
      </p>

      <div class="form-group">
        <input
          v-model="activeUser.username"
          type="text"
          placeholder="Username"
          class="form-input text-lead text-bold"
        />
      </div>

      <div class="form-group">
        <input
          v-model="activeUser.name"
          type="text"
          placeholder="Full Name"
          class="form-input text-lead"
        />
      </div>

      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea
          v-model="activeUser.bio"
          class="form-input"
          id="user_bio"
          placeholder="Write a few words about yourself."
        ></textarea>
      </div>

      <div class="stats">
        <span>{{ useUsersStore().userPosts.length }} posts</span>
        <span>{{ useUsersStore().userThreads.length }} threads</span>
      </div>

      <hr />

      <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input
          v-model="activeUser.website"
          autocomplete="off"
          class="form-input"
          id="user_website"
        />
      </div>

      <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input v-model="activeUser.email" autocomplete="off" class="form-input" id="user_email" />
      </div>

      <div class="form-group">
        <label class="form-label" for="user_location">Location</label>
        <input
          v-model="activeUser.location"
          autocomplete="off"
          class="form-input"
          id="user_location"
        />
      </div>

      <div class="btn-group space-between">
        <button @click.prevent="cancelEdit" class="btn-ghost">Cancel</button>
        <button type="submit" class="btn-blue">Save</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
