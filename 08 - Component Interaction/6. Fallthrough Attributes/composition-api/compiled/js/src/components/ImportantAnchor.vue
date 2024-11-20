<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
console.log(JSON.stringify(attrs));
</script>

<template>
  <a>!!! <slot /> !!!</a>

  <!-- See effect when having 2 items -->
  <!--
  <a v-bind="attrs">!!! <slot /> !!!</a>
  -->
</template>

<style scoped></style>
