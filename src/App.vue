<script setup lang="ts">
import StyleGuide from './pages/StyleGuide.vue'
import TeamStats from './pages/TeamStats.vue'
import PlayersList from './pages/PlayersList.vue'
import Tabs from './components/Tabs.vue'
import type { TabItem } from './types/Types'

const tabsList: TabItem[] = [
  {
    label: 'Style Guide',
    component: StyleGuide,
  },
  {
    label: 'Team Stats',
    component: TeamStats,
  },
  {
    label: 'Player List',
    component: PlayersList,
  },
]
</script>

<template>
  <div class="app-content w-full h-full min-h-screen">
    <Tabs :tabs="tabsList" />
  </div>
</template>

<style lang="scss" scoped>
.app-content {
  background-image: url(./assets/bg.jpg);
  background-size: cover;

  @media (min-width: 1024px) {
    background-image: url(./assets/bg-desk.jpg);
  }
}
</style>
