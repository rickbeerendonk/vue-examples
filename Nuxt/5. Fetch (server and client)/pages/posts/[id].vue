<template>
  <div>
    <h2>{{ route.params.id }}. {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup>
const route = useRoute();

// Fetch data both server-side and client-side, rename the data to post
const { data: post } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
);
</script>
