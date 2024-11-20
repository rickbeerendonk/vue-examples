<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
defineProps({
  // Must be "modelValue" to use with v-model
  modelValue: {
    type: String,
    required: true
  }
});

// Must be "update:modelValue" to use with v-model
const emit = defineEmits(['update:modelValue']);

function changed(e) {
  emit('update:modelValue', e.target.value);
}
</script>

<template>
  <input :value="modelValue" @keyup="changed" />
</template>

<style scoped></style>
