<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk          -->

<template>
  <input :value="value" @keyup="changed" />
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  value: {
    type: String,
    required: true
  }
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['change']);

const changed = e => {
  emit('change', e.target.value);
};
</script>

<style scoped></style>
