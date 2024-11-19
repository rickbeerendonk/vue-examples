<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import MyComponent from './components/MyComponent.vue';
</script>

<template>
  <h1>App</h1>
  <MyComponent
    str="World"
    :num="123"
    :bool="true"
    :arr="[1, true, 'one']"
    :obj="{ a: 1, b: 2 }"
    :date="new Date()"
    :fun="
      function (a) {
        return a + a;
      }
    "
  />
</template>

<style scoped></style>
