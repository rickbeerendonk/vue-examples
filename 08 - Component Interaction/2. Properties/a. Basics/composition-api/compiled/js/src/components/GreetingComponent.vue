<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
// defineProps is a compiler micro (no need to import)
const props = defineProps({
  name
});

console.log(props.name);
</script>

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<style scoped></style>
