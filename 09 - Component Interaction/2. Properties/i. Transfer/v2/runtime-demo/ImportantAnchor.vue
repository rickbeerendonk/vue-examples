<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <a v-bind="$props">!!! <slot></slot> !!!</a>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

module.exports = {
  name: 'ImportantAnchor'
};
</script>

<style scoped></style>
