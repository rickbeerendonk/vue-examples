<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </li>
  </ul>
</template>

<script setup>
import Post from './Post.vue';

// Define props
defineProps({
  posts: {
    type: Array,
    required: true
  }
});
</script>

<style scoped></style>
