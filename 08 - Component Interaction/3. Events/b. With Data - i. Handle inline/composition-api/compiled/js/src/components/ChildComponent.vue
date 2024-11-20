<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
});
const emit = defineEmits(['change']);

function changed(e) {
  emit('change', e.target.value);
}
</script>

<template>
  <input :value="name" @keyup="changed" />
</template>

<style scoped></style>
