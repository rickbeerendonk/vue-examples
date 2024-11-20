<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
console.log(JSON.stringify(attrs));
</script>

<template>
  <a>!!! <slot></slot> !!!</a>
</template>

<style scoped></style>
