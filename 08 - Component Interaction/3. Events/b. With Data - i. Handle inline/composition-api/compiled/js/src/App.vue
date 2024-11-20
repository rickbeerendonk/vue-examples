<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const greetingText = ref('World');
</script>

<template>
  <ChildComponent :name="greetingText" @change="greetingText = $event" />
  <h1>Hello {{ greetingText }}</h1>
</template>

<style scoped></style>
