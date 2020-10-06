<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <input v-model="name" />
    <h1>Hello {{ name }}!</h1>
    <p>InitialName: {{ initialName }}</p>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

module.exports = {
  name: 'GreetingComponent',
  props: ['initialName'],
  data() {
    return {
      name: this.initialName
    };
  }
};
</script>

<style scoped></style>
