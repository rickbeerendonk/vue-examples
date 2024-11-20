<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const date = ref(new Date());

function handleSubmit(e) {
  e.preventDefault();
}
</script>

<template>
  <form @submit="handleSubmit">
    <p>Page loaded at: {{ date.toLocaleTimeString() }}</p>
    <button>Submit</button>
  </form>
</template>

<style scoped></style>
