<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <input v-model="name" />
    <h1>Hello {{ name }}!</h1>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

module.exports = {
  name: 'GreetingComponent',
  props: ['initialName'],
  // data property:
  // - must be a function and not an arrow function
  // - in an arrow function code can't access this
  data: () => ({
    name: this.initialName
  })
};
</script>

<style scoped></style>
