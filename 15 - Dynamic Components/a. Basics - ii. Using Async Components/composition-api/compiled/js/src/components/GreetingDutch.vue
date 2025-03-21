<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const greeting = ref('Wereld');
</script>

<template>
  <label>Dutch: <input v-model="greeting" /></label>
  <p>Hallo {{ greeting }}</p>
</template>

<style scoped></style>
