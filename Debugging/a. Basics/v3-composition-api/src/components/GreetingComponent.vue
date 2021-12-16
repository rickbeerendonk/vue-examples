<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk          -->

<template>
  <h1 v-if="name">Hello {{ name }}!</h1>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  name: {
    type: String,
    default: null,
    required: false
  }
});
</script>

<style scoped>
h1 {
  color: #d676ff;
}
</style>
