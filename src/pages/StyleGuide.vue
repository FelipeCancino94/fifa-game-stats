<script setup lang="ts">
import Button from '../components/Button.vue'
</script>

<template>
  <div class="style-guide--section p-4 text-neutral-50">
    <h1 class="text-center text-4xl">Style Guide</h1>
    <h2 class="text-2xl">Botones</h2>
    <div class="pl-4 mb-4">
      <h3 class="text-xl">Primary</h3>
      <Button label="Primary Button" />
    </div>
    <div class="pl-4">
      <h3 class="text-xl">Primary with icon</h3>
      <Button label="With Icon" :showIcon="true" />
    </div>
  </div>
</template>
