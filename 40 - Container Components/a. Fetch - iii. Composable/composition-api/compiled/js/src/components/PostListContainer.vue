<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<template>
  <Fetching v-if="isFetching" />
  <ErrorMessage v-else-if="error" :message="error" />
  <PostList v-else :posts="posts" />
</template>

<script setup>
import { useFetchPosts } from '../composables/useFetchPosts.js';

import ErrorMessage from './ErrorMessage.vue';
import Fetching from './Fetching.vue';
import PostList from './PostList.vue';

// Use the composable
const { isFetching, error, posts } = useFetchPosts();
</script>

<style scoped></style>
