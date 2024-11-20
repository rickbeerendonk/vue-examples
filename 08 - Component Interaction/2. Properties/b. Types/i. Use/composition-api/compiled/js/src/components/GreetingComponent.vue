<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
const props = defineProps({
  name: String
});

console.log(props.name);
</script>

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<style scoped></style>
