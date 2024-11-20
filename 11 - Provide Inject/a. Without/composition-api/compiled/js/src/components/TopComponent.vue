<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import MiddleComponent from './MiddleComponent.vue';

defineProps({
  color: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h1>Top</h1>
  <MiddleComponent :color />
</template>

<style scoped></style>
