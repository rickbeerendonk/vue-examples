<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <p style="color: gray">See console for "Avoid mutating" warning</p>
    <input v-model="name" />
    <h1>Hello {{ name }}!</h1>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

module.exports = {
  name: 'GreetingComponent',
  props: ['name']
};
</script>

<style scoped></style>
