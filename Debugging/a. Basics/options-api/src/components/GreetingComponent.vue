<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<template>
  <h1 v-if="name">Hello {{ name }}!</h1>
</template>

<script>
export default {
  name: 'GreetingComponent',
  props: {
    name: {
      type: String,
      default: null,
      required: false
    }
  }
};
</script>

<style scoped>
h1 {
  color: #d676ff;
}
</style>
