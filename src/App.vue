<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped></style>
