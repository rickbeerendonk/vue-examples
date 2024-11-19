<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
defineProps({
  greet: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h1>{{ greet }} {{ name }}!</h1>
</template>

<style scoped></style>
