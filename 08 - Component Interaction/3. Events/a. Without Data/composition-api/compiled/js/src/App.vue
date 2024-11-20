<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const count = ref(0);
const childChanged = () => {
  count.value++;
};
</script>

<template>
  <ChildComponent @updated="childChanged" />
  <h1>Clicked: {{ count }}</h1>
</template>

<style scoped></style>
