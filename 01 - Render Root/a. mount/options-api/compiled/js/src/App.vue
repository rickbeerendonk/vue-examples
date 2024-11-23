<script>
import { version } from 'vue';

export default {
  data() {
    return {
      greeting: `Vue ${version}!`
    };
  }
};
</script>

<template>{{ greeting }}</template>
