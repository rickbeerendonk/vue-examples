<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<template>
  <Fetching v-if="isFetching" />
  <ErrorMessage v-else-if="error" :message="error" />
  <PostList v-else :posts="posts" />
</template>

<script setup>
import { ref, onMounted } from 'vue';

import ErrorMessage from './ErrorMessage.vue';
import Fetching from './Fetching.vue';
import PostList from './PostList.vue';

// Reactive state
const isFetching = ref(false);
const error = ref(null);
const posts = ref([]);

// Fetch posts function
const fetchPosts = async () => {
  isFetching.value = true;
  try {
    const response = await fetch('resources/posts.json');
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    posts.value = json;
  } catch (error) {
    error.value = error.message;
  } finally {
    isFetching.value = false;
  }
};

// Fetch posts on component mount
onMounted(() => {
  fetchPosts();
});
</script>

<style scoped></style>
