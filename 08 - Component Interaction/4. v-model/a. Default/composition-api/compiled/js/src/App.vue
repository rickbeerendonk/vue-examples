<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const greetingText = ref('World');
</script>

<template>
  <h1>Hello {{ greetingText }}</h1>

  <hr />

  <!-- Short -->
  <ChildComponent v-model="greetingText" />

  <hr />

  <!-- Long -->
  <ChildComponent
    :modelValue="greetingText"
    @update:modelValue="greetingText = $event"
  />
</template>

<style scoped></style>
