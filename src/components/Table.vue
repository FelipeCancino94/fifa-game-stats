<script setup lang="ts">
defineProps<{
  dataIdentifier?: string
  cells: number
  rows: number
}>()
</script>

<template>
  <div class="table w-full">
    <div
      class="row grid grid-cols-5 gap-4 border-t-2 border-neutral-50/25"
      v-for="(row, index) in rows"
    >
      <div class="cell py-1 text-center" v-for="(cell, index) in cells">
        <p>Cell</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/mixins' as m;

.table {
  @include m.liquid-glass;

  padding: 24px 0;
}
</style>
