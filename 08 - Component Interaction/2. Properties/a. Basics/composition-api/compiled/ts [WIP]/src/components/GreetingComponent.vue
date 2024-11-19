<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script setup lang="ts">
interface Props {
  name: any; // Don't use any!
}

defineProps<Props>();
</script>

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<style scoped></style>
