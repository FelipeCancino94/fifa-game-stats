<script setup lang="ts">
import StyleGuide from './pages/StyleGuide.vue'
</script>

<template>
  <div class="app-content w-screen h-screen">
    <StyleGuide />
  </div>
</template>

<style lang="scss" scoped>
.app-content {
  background-image: url(./assets/bg-mobile.jpg);
  background-size: cover;

  @media (min-width: 1024px) {
    background-image: url(./assets/bg-desktop.jpg);
  }
}
</style>
