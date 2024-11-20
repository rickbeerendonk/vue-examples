<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { provide } from 'vue';

import MiddleComponent from './MiddleComponent.vue';
import BottomComponent from './BottomComponent.vue';

provide('color', 'red');
</script>

<template>
  <h1>Top</h1>
  <MiddleComponent />
  <BottomComponent />
</template>

<style scoped></style>
