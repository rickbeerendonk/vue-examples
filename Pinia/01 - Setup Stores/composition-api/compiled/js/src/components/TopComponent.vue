<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { useColorStore } from '../stores/color';

import MiddleComponent from './MiddleComponent.vue';

const colorStore = useColorStore();

function handleSwitch() {
  colorStore.switchColor();
}
</script>

<template>
  <h1>Top</h1>
  <MiddleComponent />
  <button @click="handleSwitch">
    Switch in Top (current: {{ colorStore.color }})
  </button>
</template>

<style scoped></style>
