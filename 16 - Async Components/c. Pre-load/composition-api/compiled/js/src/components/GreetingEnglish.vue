<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const greeting = ref('World');
</script>

<template>
  <label>English: <input v-model="greeting" /></label>
  <p>Hello {{ greeting }}</p>
</template>

<style scoped></style>
