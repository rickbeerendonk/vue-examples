<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <p style="color: gray">Divide by zero to throw an exception</p>
    <input v-model.number="numerator" type="number" />
    <span> divided by </span>
    <input v-model.number="denominator" autofocus type="number" />
    <span> is equal to </span>
    {{ result }}.
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const numerator = ref(3);
const denominator = ref(2);

const result = computed(() => {
  if (denominator.value === 0) {
    throw new Error('Division by zero.');
  }
  return numerator.value / denominator.value;
});
</script>

<style scoped></style>
