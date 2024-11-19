<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import BottomComponent from './BottomComponent.vue';
</script>

<template>
  <div id="middle">
    <h2>Middle</h2>
    <BottomComponent />
  </div>
</template>

<style scoped>
/* scoped */
div {
  background-color: #d676ff;
}

#middle {
  text-decoration-line: underline;
}
</style>
