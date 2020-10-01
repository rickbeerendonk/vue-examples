<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div class="container">
    Normal:
    <div class="content">
      <slot name="first" />
    </div>
    Scoped:
    <div class="content">
      <slot name="second" :source="source" />
    </div>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */

module.exports = {
  name: 'ContainerComponent',
  data: () => ({
    source: 'Container'
  })
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
