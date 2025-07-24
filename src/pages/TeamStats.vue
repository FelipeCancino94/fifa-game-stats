<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'

const players = ref(null)
const error = ref(null)
/* eslint-disable */
onMounted(async () => {
  try {
    const res = await fetch('/api/team')
    players.value = await res.json()
    console.log(players.value)
  } catch (err: any) {
    error.value = err
    console.error(err)
  }
})
</script>

<template>
  <div class="team-stats-section py-4 grid grid-cols-2 gap-4">
    <Card data-identifier="1" class="text-neutral-50 text-center">
      <template #heading>
        <h3 class="text-3xl">Serie A</h3>
      </template>
      <template #body>
        <p class="text-6xl">19</p>
      </template>
      <template #footer>
        <p class="text-xs">último campeonato: 2021-2022</p>
      </template>
    </Card>

    <Card data-identifier="1" class="text-neutral-50 text-center">
      <template #heading>
        <h3 class="text-3xl">UCL</h3>
      </template>
      <template #body>
        <p class="text-6xl">7</p>
      </template>
      <template #footer>
        <p class="text-xs">último campeonato: 2006-2007</p>
      </template>
    </Card>

    <Card data-identifier="1" class="text-neutral-50 text-center">
      <template #heading>
        <h3 class="text-3xl">Coppa Italia</h3>
      </template>
      <template #body>
        <p class="text-6xl">5</p>
      </template>
      <template #footer>
        <p class="text-xs">último campeonato: 1999-2000</p>
      </template>
    </Card>
  </div>
</template>
