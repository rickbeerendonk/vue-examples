<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { useColorStore } from '../stores/color';

const colorStore = useColorStore();
</script>

<template>
  <h3 :style="{ color: colorStore.color }">Bottom</h3>
</template>

<style scoped></style>
