<!--! European Union Public License version 1.2 !-->
<!--! Copyright © 2025 Rick Beerendonk          !-->

<script setup lang="ts">
import { ref, provide } from 'vue';

const name = ref('World');

const setName = (value: string) => {
  name.value = value;
};

// Provide context to child components
provide('greetingContext', {
  name,
  setName
});
</script>

<template>
  <slot />
</template>
