<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script setup>
import { ref } from 'vue';

import GreetingDutch from './components/GreetingDutch.vue';
import GreetingEnglish from './components/GreetingEnglish.vue';
import GreetingSpanish from './components/GreetingSpanish.vue';

const language = ref('english');

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
    <!-- Cache inactive components -->
    <keep-alive>
      <component :is="components[language]"></component>
    </keep-alive>
  </div>
</template>

<style scoped></style>
