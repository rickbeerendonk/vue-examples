<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const loading = ref(false);
const post = ref(null);
const error = ref(null);
const route = useRoute();

async function fetchData() {
  if (!route.params.id) {
    return;
  }

  error.value = post.value = null;
  loading.value = true;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    post.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

// Initial load
onMounted(fetchData);

// Subsequent loads
watch(route, fetchData);
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" style="color: red">{{ error }}</div>
    <div v-else>{{ post }}</div>
  </div>
</template>

<style scoped></style>
