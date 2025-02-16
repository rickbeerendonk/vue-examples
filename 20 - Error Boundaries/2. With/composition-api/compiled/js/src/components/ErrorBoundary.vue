<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<template>
  <div
    v-if="error"
    style="background: pink; color: red; padding-left: 0.5rem; overflow: hidden"
  >
    <p>{{ error.message }}</p>
    <pre style="font-size: 0.5rem">{{ error.stack }}</pre>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue';

const error = ref(null);

onErrorCaptured((err, instance, info) => {
  error.value = err;
  console.error('Component:', instance);
  console.error('Info:', info);
  return false; // Stop the error from propagating.
});
</script>

<style scoped></style>
