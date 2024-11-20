<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const result = ref(null);

function changed(e) {
  // Use result to get direct DOM access
  result.value.innerText = `Hello ${e.target.value}!`;
}
</script>

<template>
  <input @keyup="changed" />

  <!-- Connect result with the h1 -->
  <h1 ref="result"></h1>
</template>

<style scoped></style>
