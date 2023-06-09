<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  },
  userPostCount: {
    type: Number,
    required: true
  },
  userThreadCount: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="profile-card">
    <p class="text-center">
      <img :src="user.avatar" :alt="`${user.name} profile pic`" class="avatar-xlarge" />
    </p>

    <h1 class="title">{{ user.username }}</h1>

    <p class="text-lead">{{ user.name }}</p>

    <p class="text-justify">{{ user.bio || 'No bio specified' }}</p>

    <span class="online">{{ user.username }} is online</span>

    <div class="stats">
      <span>{{ userPostCount }} posts</span>
      <span>{{ userThreadCount }} threads</span>
    </div>

    <hr />

    <p v-if="user.website" class="text-large text-center">
      <i class="fa fa-globe"></i>
      <router-link :to="user.website"> Visit {{ user.username }}</router-link>
    </p>
  </div>
</template>

<style scoped></style>
