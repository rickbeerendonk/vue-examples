<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const result = ref([]);

const keyup = event => {
  result.value.push(
    `key: ${event.key}, code: ${event.code} (ctrlKey: ${event.ctrlKey}, shiftKey: ${event.shiftKey}, altKey: ${event.altKey}, metaKey: ${event.metaKey})`
  );
};
</script>

<template>
  <input :autofocus="'autofocus'" @keyup.arrow-right="keyup" />

  <ul style="background-color: lightgray">
    <li v-for="(item, index) in result" :key="index">{{ item }}</li>
  </ul>
</template>

<style scoped></style>
