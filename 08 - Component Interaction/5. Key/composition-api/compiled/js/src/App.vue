<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';
import ClickMe from './components/ClickMe.vue';

const id = ref(0);
</script>

<template>
  <button @click="id++">Change ID</button>
  <br />
  <ClickMe :key="id" />
</template>

<style scoped></style>
