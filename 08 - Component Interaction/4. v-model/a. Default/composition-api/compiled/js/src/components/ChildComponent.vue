<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
// defineModel is a macro
const model = defineModel();

function changed(e) {
  model.value = e.target.value;
}
</script>

<template>
  <input :value="model" @keyup="changed" />
</template>

<style scoped></style>
