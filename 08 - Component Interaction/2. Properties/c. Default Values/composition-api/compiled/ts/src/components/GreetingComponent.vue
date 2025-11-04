<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup lang="ts">
interface Props {
  name?: string;
}

withDefaults(defineProps<Props>(), {
  name: 'World'
});
</script>

<template>
  <h1>Hello {{ name }}!</h1>
</template>

<style scoped></style>
