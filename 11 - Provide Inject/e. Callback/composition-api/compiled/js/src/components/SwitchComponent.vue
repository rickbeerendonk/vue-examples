<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { inject } from 'vue';

const switchColor = inject('switchColor');
</script>

<template>
  <button @click="switchColor">Switch color</button>
</template>

<style scoped></style>
