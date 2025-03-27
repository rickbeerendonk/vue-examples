<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script setup>
import { onBeforeRouteLeave } from 'vue-router';

// Use the `onBeforeRouteLeave` hook to define the guard
onBeforeRouteLeave((to, from, next) => {
  if (confirm('Do you want to leave?')) {
    next(); // Allow navigation
  } else {
    next(false); // Cancel navigation
  }
});
</script>

<template>
  <h2>Page 2</h2>
</template>

<style scoped></style>
