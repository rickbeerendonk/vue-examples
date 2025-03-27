<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<template>
  <div style="color: red">{{ message }}</div>
</template>

<script setup>
// Define props
defineProps({
  message: {
    type: String,
    required: true
  }
});
</script>

<style scoped></style>
