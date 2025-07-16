<script setup lang="ts">
import StyleGuide from './pages/StyleGuide.vue'
</script>

<template>
  <div class="app-content w-screen h-screen">
    <StyleGuide />
  </div>
</template>

<style scoped>
.app-content {
  background-image: url(./assets/background-boreal.jpg);
  background-size: cover;
  background-position: -33rem;
}
</style>
