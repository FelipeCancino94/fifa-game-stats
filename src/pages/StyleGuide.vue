<script setup lang="ts">
import Button from '../components/Button.vue'
import Card from '../components/Card.vue'
import Table from '../components/Table.vue'
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
      <Button label="With Icon" :showIcon="true" :icon="'dollar'" />
    </div>
    <h2 class="text-2xl">Cards</h2>
    <div class="pl-4 mb-4">
      <Card dataIdentifier="test-123">
        <template #heading>
          <h3 class="text-2xl">Este es el heading...</h3>
        </template>
        <template #body>
          <p>
            Este es el body content ... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Libero impedit natus, quos amet inventore non
            repellat ipsa aliquam quasi labore fuga sit et illo animi facilis
            placeat maiores sunt vitae!
          </p>
          <Button label="Learn more" />
        </template>
        <template #footer>
          <p>Este es el footer ...</p>
        </template>
      </Card>
    </div>
    <h2 class="text-2xl">Table</h2>
    <div class="pl-4 mb-4">
      <Table :cells="5" :rows="3" />
    </div>
  </div>
</template>
