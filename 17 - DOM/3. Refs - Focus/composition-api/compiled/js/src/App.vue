<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref, onMounted } from 'vue';

const name = ref('World');
const input = ref(null);

function changed(e) {
  const target = e.target;
  name.value = target.value;
}

onMounted(() => {
  if (input.value) {
    input.value.focus();
  }
});
</script>

<template>
  <div>
    <input ref="input" :value="name" @keyup="changed" />
    <h1>Hello {{ name }}!</h1>
  </div>
</template>

<style scoped></style>
