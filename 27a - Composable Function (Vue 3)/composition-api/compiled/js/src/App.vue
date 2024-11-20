<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { useMouseMove } from './composables/useMouseMove';

const mousePosition = useMouseMove();
</script>

<template>
  Mouse Position: (X = {{ mousePosition.x }}, Y = {{ mousePosition.y }})
</template>

<style scoped></style>
