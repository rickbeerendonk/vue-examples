<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const source = ref('Container');
</script>

<template>
  <div class="outer">
    Scoped:
    <div class="inner">
      <slot :source="source" />
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
