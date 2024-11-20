<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: String
});

const computedName = computed(() => props.name.trim().toUpperCase());
</script>

<template>
  <h1>Hello {{ computedName }}!</h1>
</template>

<style scoped></style>
