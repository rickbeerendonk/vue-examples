<!--! European Union Public License version 1.2 !-->
<!--! Copyright © 2025 Rick Beerendonk          !-->

<script setup lang="ts">
import { inject, type Ref } from 'vue';

interface GreetingContext {
  name: Ref<string>;
  setName: (value: string) => void;
}

// Inject the same context used by GreetingEditor
const context = inject<GreetingContext>('greetingContext');

if (!context) {
  throw new Error('CustomContent must be used within GreetingEditor');
}
</script>

<template>
  <h2>
    <u>Hi {{ context.name }}</u>
  </h2>
</template>
