<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<!-- eslint-disable vue/valid-define-props -->

<script setup lang="ts">
interface Props {
  name: string | number;
}

// defineProps is a compiler micro (no need to import)
defineProps<Props>();
</script>

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<style scoped></style>
