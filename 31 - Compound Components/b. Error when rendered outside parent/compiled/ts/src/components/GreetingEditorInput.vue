<!--! European Union Public License version 1.2 !-->
<!--! Copyright © 2025 Rick Beerendonk          !-->

<script setup lang="ts">
import { inject, type Ref } from 'vue';

interface GreetingContext {
  name: Ref<string>;
  setName: (value: string) => void;
}

const context = inject<GreetingContext>('greetingContext');

if (!context) {
  throw new Error('GreetingEditorInput must be used within GreetingEditor');
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  context.setName(target.value);
};
</script>

<template>
  <input autofocus :value="context.name.value" @input="handleInput" />
</template>
