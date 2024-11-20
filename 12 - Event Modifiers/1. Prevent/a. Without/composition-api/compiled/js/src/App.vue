<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const date = ref(new Date());
</script>

<template>
  <form>
    <p>Page loaded at: {{ date.toLocaleTimeString() }}</p>
    <button>Submit</button>
  </form>
</template>

<style scoped></style>
