<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';
import GreetingComponent from './components/GreetingComponent.vue';

const appName = ref('App');
</script>

<template>
  <h1>{{ appName }}</h1>
  <GreetingComponent />
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
