<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
