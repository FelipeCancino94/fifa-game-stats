<script setup lang="ts">
defineProps<{
  dataIdentifier?: string
}>()
</script>

<template>
  <div class="card" :data-identifier="dataIdentifier">
    <div class="card-heading">
      <slot name="heading" />
    </div>
    <div class="card-body">
      <slot name="body" />
    </div>
    <div class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/mixins' as m;
.card {
  @include m.liquid-glass;

  padding: 24px 16px;

  .card-body {
    margin: 16px 0;
  }
}
</style>
