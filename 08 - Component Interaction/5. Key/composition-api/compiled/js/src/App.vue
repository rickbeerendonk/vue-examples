<script setup>
import { ref, computed } from 'vue';
import ClickMe from './components/ClickMe.vue';

const id = ref(0);
const keys = computed(() => [id.value, id.value + 1]);
</script>

<template>
  <button @click="id++">Change ID</button>
  <br />
  <ClickMe v-for="key in keys" :key="key" />
</template>
