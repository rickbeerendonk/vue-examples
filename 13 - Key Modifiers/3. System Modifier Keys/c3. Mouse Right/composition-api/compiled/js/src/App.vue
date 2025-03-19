<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const result = ref([]);

const mousedown = event => {
  result.value.push(
    `button: ${event.button}, (ctrlKey: ${event.ctrlKey}, shiftKey  ${event.shiftKey}, altKey: ${event.altKey}, metaKey: ${event.metaKey})`
  );
};
</script>

<template>
  <h1>Use Mouse Right</h1>

  <button @mousedown.right="mousedown">Mouse-click</button>

  <ul style="background-color: lightgray">
    <li v-for="(item, index) in result" :key="index">{{ item }}</li>
  </ul>
</template>

<style scoped></style>
