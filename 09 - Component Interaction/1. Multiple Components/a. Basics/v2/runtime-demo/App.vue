<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <h1>App</h1>
    <ComponentA></ComponentA>
    <ComponentB></ComponentB>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */
/* global httpVueLoader */

const ComponentA = httpVueLoader('./ComponentA.vue');
const ComponentB = httpVueLoader('./ComponentB.vue');

module.exports = {
  name: 'App',
  components: {
    componenta: ComponentA,
    componentb: ComponentB
  }
};
</script>

<style scoped></style>
