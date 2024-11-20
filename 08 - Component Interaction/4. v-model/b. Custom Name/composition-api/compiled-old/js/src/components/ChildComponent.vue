<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
defineProps({
  // Must be "customName" to use with v-model
  customName: {
    type: String,
    required: true
  }
});

// Must be "update:customName" to use with v-model
const emit = defineEmits(['update:customName']);

function changed(e) {
  emit('update:customName', e.target.value);
}
</script>

<template>
  <input :value="customName" @keyup="changed" />
</template>

<style scoped></style>
