<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
// defineModel is a macro
const customNameModel = defineModel('customName');

function changed(e) {
  customNameModel.value = e.target.value;
}
</script>

<template>
  <input :value="customNameModel" @keyup="changed" />
</template>

<style scoped></style>
