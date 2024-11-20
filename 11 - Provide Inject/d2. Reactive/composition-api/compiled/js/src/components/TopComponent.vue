<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { provide, ref } from 'vue';

import MiddleComponent from './MiddleComponent.vue';

const props = defineProps({
  initialColor: {
    type: String,
    required: true
  }
});

const color = ref(props.initialColor);
function switchColor() {
  color.value = color.value === 'red' ? 'blue' : 'red';
}

provide('color', color);
</script>

<template>
  <h1>Top</h1>
  <MiddleComponent />
  <button @click="switchColor">Switch (current: {{ color }})</button>
</template>

<style scoped></style>
