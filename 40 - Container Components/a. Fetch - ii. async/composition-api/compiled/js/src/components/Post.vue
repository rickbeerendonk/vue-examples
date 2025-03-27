<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<template>
  <span>{{ post.title }}</span>
</template>

<script setup>
// Define props
defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>

<style scoped></style>
