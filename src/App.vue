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
header > a.logo {
  width: 50px;
}

@media (min-width: 240px) and (max-width: 720px) {
  header > a.logo {
    width: 35px;
  }
}
</style>
