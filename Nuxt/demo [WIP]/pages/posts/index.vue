<template>
  <div>
    <h2>Posts</h2>
    <nav>
      <ol>
        <li v-for="post in posts" :key="post.id" :value="post.id">
          <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
// Fetch data both server-side and client-side, rename the data to posts
const { data: posts } = await useFetch(
  'https://jsonplaceholder.typicode.com/posts'
);
</script>
