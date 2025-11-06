<!--! European Union Public License version 1.2 !-->
<!--! Copyright © 2025 Rick Beerendonk          !-->

<script setup lang="ts">
import { inject, type Ref } from 'vue';

interface GreetingContext {
  name: Ref<string>;
  setName: (value: string) => void;
}

const context = inject<GreetingContext>('greetingContext');
</script>

<template>
  <h1>Hello {{ context?.name }}!</h1>
</template>
