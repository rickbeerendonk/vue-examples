<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script setup>
import { ref, defineAsyncComponent } from 'vue';

// Define async components
const GreetingDutch = defineAsyncComponent(
  () => import('./components/GreetingDutch.vue')
);
const GreetingEnglish = defineAsyncComponent(
  () => import('./components/GreetingEnglish.vue')
);
const GreetingSpanish = defineAsyncComponent(
  () => import('./components/GreetingSpanish.vue')
);

// Reactive state for selected language
const language = ref('english');

// Map component names to async components
const components = {
  dutch: GreetingDutch,
  english: GreetingEnglish,
  spanish: GreetingSpanish
};
</script>

<template>
  <label>
    <input v-model="language" type="radio" value="dutch" />
    Dutch
  </label>
  <label>
    <input v-model="language" type="radio" value="english" />
    English
  </label>
  <label>
    <input v-model="language" type="radio" value="spanish" />
    Spanish
  </label>

  <div style="background: bisque">
    <component :is="components[language]"></component>
  </div>
</template>

<style scoped></style>
