<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue';

// Define async components
const GreetingDutch = () => import('./components/GreetingDutch.vue');
const GreetingEnglish = () => import('./components/GreetingEnglish.vue');
const GreetingSpanish = () => import('./components/GreetingSpanish.vue');

// Register async components
const GreetingDutchComponent = defineAsyncComponent(GreetingDutch);
const GreetingEnglishComponent = defineAsyncComponent(GreetingEnglish);
const GreetingSpanishComponent = defineAsyncComponent(GreetingSpanish);

// Reactive state for selected language
const language = ref('english');

// Map component names to async components
const components = {
  dutch: GreetingDutchComponent,
  english: GreetingEnglishComponent,
  spanish: GreetingSpanishComponent
};

// Preload components after the UI is shown
onMounted(() => {
  GreetingDutch(); // Preload the Dutch component
  // GreetingSpanish(); // Uncomment to preload the Spanish component
});
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
