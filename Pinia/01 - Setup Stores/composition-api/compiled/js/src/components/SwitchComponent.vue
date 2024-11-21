<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { useColorStore } from '../stores/color';

const colorStore = useColorStore();

function handleSwitch() {
  colorStore.switchColor();
}
</script>

<template>
  <button @click="handleSwitch">Switch color</button>
</template>

<style scoped></style>
