<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
defineProps({
  name: {
    type: String,
    default: 'World'
  }
});
</script>

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<style scoped></style>
