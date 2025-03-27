<template>
  <div>
    <h1>Demo</h1>
    <button @click="increment">Count = {{ count }}</button>
    <nav>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const increment = () => {
  count.value++;
};
</script>
