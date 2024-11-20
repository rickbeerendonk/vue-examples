<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const source = ref('Container');
const other = ref('Other');
</script>

<template>
  <div class="outer">
    Normal:
    <div class="inner">
      <slot name="first" />
    </div>
    Scoped:
    <div class="inner">
      <slot name="second" :source="source" :other="other" />
    </div>
  </div>
</template>

<style scoped>
.outer {
  background-color: lightgray;
  padding: 10px;
}

.inner {
  background-color: white;
  padding: 10px;
}
</style>
