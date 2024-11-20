<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { inject } from 'vue';

const myColor = inject('color');
</script>

<template>
  <h3 :style="{ color: myColor }">Bottom 1</h3>
</template>

<style scoped></style>
