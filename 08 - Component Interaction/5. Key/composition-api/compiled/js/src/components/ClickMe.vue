<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <button @click.prevent="count++">
    This link has been clicked {{ count }} times.
  </button>
</template>

<style scoped></style>
