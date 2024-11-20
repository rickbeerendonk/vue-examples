<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { provide } from 'vue';

import MiddleComponent from './MiddleComponent.vue';

const props = defineProps({
  color: {
    type: String,
    required: true
  }
});

provide('color', props.color);
</script>

<template>
  <h1>Top</h1>
  <MiddleComponent />
</template>

<style scoped></style>
