<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div class="container">
    Scoped:
    <div class="content">
      <slot :source="source"></slot>
    </div>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

module.exports = {
  name: 'ContainerComponent',
  data() {
    return {
      source: 'Container'
    };
  }
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
