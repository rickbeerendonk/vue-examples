<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import BottomComponent from './BottomComponent.vue';

defineProps({
  color: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h2>Middle</h2>
  <BottomComponent :color />
</template>

<style scoped></style>
