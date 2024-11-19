<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<!-- eslint-disable vue/no-mutating-props -->

<template>
  <p style="color: gray">See console for "Avoid mutating" warning</p>
  <input v-model="name" />
  <h1>Hello {{ name }}!</h1>
</template>

<style scoped></style>
