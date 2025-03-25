<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue';

import ErrorComponent from './components/Error.vue';
import LoadingComponent from './components/Loading.vue';

// Helper function to create async components
function createAsyncComponent(module) {
  return defineAsyncComponent({
    loader: () => import(module),
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    delay: 100, // Delay before showing the loading component
    timeout: 2000 // Timeout before showing the error component
  });
}

// Define async components
const GreetingDutch = createAsyncComponent('./components/GreetingDutch.vue');
const GreetingEnglish = createAsyncComponent(
  './components/GreetingEnglish.vue'
);
const GreetingSpanish = createAsyncComponent(
  './components/GreetingSpanish.vue'
);
const GreetingUnknown = createAsyncComponent('./components/does-not-exists');

// Reactive state for selected language
const language = ref('english');

// Compute the dynamic component name
const greetingLanguage = computed(() => {
  return {
    dutch: GreetingDutch,
    english: GreetingEnglish,
    spanish: GreetingSpanish,
    unknown: GreetingUnknown
  }[language.value];
});
</script>

<template>
  <div style="color: lightgray">
    <em>Show this example with a Network Latency.</em>
  </div>

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
  <label>
    <input v-model="language" type="radio" value="unknown" />
    Unknown
  </label>

  <div style="background: bisque">
    <component :is="greetingLanguage"></component>
  </div>
</template>

<style scoped></style>
