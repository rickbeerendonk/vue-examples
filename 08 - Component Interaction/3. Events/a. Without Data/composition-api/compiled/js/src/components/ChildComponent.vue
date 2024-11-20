<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
const emit = defineEmits(['updated']);

function buttonClicked() {
  emit('updated');
}
</script>

<template>
  <button @click="buttonClicked">Click</button>
</template>

<style scoped></style>
