<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const recursive = ref(false);
</script>

<template>
  <button :disabled="recursive" @click="recursive = true">Hello World!</button>
  <greeting-component v-if="recursive" />
</template>

<style scoped></style>
