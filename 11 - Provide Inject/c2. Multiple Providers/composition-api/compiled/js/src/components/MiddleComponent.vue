<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { provide } from 'vue';

import BottomComponent from './BottomComponent.vue';

provide('color', 'blue');
</script>

<template>
  <h2>Middle</h2>
  <BottomComponent />
</template>

<style scoped></style>
