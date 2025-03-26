<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const greeting = ref('Mundo');
</script>

<template>
  <label>Spanish: <input v-model="greeting" /></label>
  <p>Hola {{ greeting }}</p>
</template>

<style scoped></style>
