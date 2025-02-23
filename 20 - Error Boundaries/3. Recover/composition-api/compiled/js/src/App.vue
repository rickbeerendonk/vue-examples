<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import DividerComponent from './components/DividerComponent.vue';
import ErrorBoundary from './components/ErrorBoundary.vue';
</script>

<template>
  <h1>App</h1>
  <ErrorBoundary>
    <DividerComponent />
  </ErrorBoundary>
</template>

<style scoped></style>
