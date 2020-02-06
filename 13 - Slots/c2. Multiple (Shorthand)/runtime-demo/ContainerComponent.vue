<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div class="container">
    The default item:
    <div class="content">
      <slot></slot>
      <slot name="default" />
    </div>
    The 1st item:
    <div class="content">
      <slot name="first" />
    </div>
    The 2nd item:
    <div class="content">
      <slot name="second" />
    </div>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

module.exports = {
  name: 'ContainerComponent'
};
</script>

<style scoped>
.container {
  background-color: lightgray;
  padding: 10px;
}

.content {
  background-color: white;
  padding: 10px;
}
</style>
