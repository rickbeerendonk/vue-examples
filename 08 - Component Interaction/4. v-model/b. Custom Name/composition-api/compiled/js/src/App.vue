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
  <ChildComponent v-model:custom-name="greetingText" />

  <hr />

  <!-- Long -->
  <ChildComponent
    :custom-name="greetingText"
    @update:custom-name="greetingText = $event"
  />
</template>

<style scoped></style>
