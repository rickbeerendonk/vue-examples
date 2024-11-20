<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
defineProps({
  color: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h3 :style="{ color: color }">Bottom</h3>
</template>

<style scoped></style>
