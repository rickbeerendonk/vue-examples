<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <button @click="id++">Change ID</button>
    <br />
    <click-me :key="id" />
  </div>
</template>

<script>
/* global httpVueLoader */

const ClickMe = httpVueLoader('./ClickMe.vue');

module.exports = {
  name: 'App',
  components: {
    ClickMe
  },
  data() {
    return {
      id: 0
    };
  }
};
</script>

<style scoped></style>
