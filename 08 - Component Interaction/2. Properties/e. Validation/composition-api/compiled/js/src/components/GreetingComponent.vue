<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<!-- eslint-disable vue/require-default-prop -->

<script setup>
defineProps({
  name: {
    type: String,
    validator(value) {
      // Check first character is in upper case
      return value.length && value[0] === value[0].toUpperCase();
    }
  }
});
</script>

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<style scoped></style>
