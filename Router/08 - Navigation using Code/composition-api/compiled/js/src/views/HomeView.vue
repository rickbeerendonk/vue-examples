<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goToPage1() {
  router.push({ path: '/page1' });
}
</script>

<template>
  <h2>Home</h2>

  <button @click="goToPage1">Page 1</button>
</template>

<style scoped></style>
