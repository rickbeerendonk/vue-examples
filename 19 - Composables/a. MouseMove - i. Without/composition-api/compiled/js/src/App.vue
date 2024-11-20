<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mousePosition = ref({ x: undefined, y: undefined });

function handleMouseMove(e) {
  mousePosition.value = { x: e.pageX, y: e.pageY };
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  Mouse Position: (X = {{ mousePosition.x }}, Y = {{ mousePosition.y }})
</template>

<style scoped></style>
