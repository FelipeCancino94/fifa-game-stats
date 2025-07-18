<script setup lang="ts">
defineProps<{
  data: Array<Record<string, any>>
}>()
</script>

<template>
  <div class="table-component overflow-x-auto w-full">
    <div class="table w-full">
      <!-- Header -->
      <div class="table-header-group">
        <div class="table-row border-b-2 border-neutral-50/25 font-bold">
          <div
            class="table-cell min-w-[120px] whitespace-nowrap px-4 py-1 text-left"
            v-for="(value, key) in data[0]"
            :key="key"
          >
            {{ key }}
          </div>
        </div>
      </div>

      <!-- Rows -->
      <div class="table-row-group">
        <div
          class="table-row border-t border-neutral-50/10"
          v-for="(row, rowIndex) in data"
          :key="rowIndex"
        >
          <div
            class="table-cell min-w-[120px] whitespace-nowrap px-4 py-1 text-left"
            v-for="(value, key) in row"
            :key="key"
          >
            {{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/mixins' as m;

.table-component {
  @include m.liquid-glass;

  padding: 24px;

  &:before {
    content: none;
  }
}
</style>
