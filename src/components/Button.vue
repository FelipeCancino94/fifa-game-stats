<script setup lang="ts">
import { CurrencyDollarIcon } from '@heroicons/vue/16/solid'

defineProps<{
  label: string
  showIcon?: boolean
  icon?: string
}>()
</script>

<template>
  <button class="button py-2 px-4 flex justify-around items-center gap-2">
    <CurrencyDollarIcon class="w-5" v-if="showIcon && icon === 'dollar'" />
    <span>{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
@use '../styles/mixins' as m;
.button {
  @include m.liquid-glass;
}
</style>
