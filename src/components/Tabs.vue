<script setup lang="ts">
import type { TabItem } from '@/types/Types'
import { ref } from 'vue'

defineProps<{
  tabs: Array<TabItem>
}>()

const activeTabIndex = ref(0)
</script>

<template>
  <div class="tabs-component p-4">
    <div class="container-tabs flex justify-between items-center">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTabIndex = index"
        :class="{ active: activeTabIndex === index }"
        class="tab p-4"
      >
        <span class="text-neutral-50">{{ tab.label }}</span>
      </div>
    </div>
    <div class="tab-content">
      <component :is="tabs[activeTabIndex].component" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/mixins' as m;
.tabs-component {
  .container-tabs {
    @include m.liquid-glass;

    .tab {
      transition: all 0.3s ease-in-out;

      &:not(.active) {
        border: 1px solid transparent;
        box-shadow: none;
        border-radius: 2rem;
      }

      &.active {
        @include m.liquid-glass;
      }
    }
  }
}
</style>
