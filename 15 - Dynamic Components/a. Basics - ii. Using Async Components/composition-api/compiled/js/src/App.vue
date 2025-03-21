<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue';

const language = ref('English');

const greetingLanguageComponent = computed(() => {
  // Preserve reactivity
  // Don't use 'this.language' directly in the template string
  const lang = language.value;
  return defineAsyncComponent(() => import(`./components/Greeting${lang}.vue`));
});
</script>

<template>
  <label>
    <input v-model="language" type="radio" value="Dutch" />
    Dutch
  </label>
  <label>
    <input v-model="language" type="radio" value="English" />
    English
  </label>
  <label>
    <input v-model="language" type="radio" value="Spanish" />
    Spanish
  </label>

  <div style="background: bisque">
    <component :is="greetingLanguageComponent"></component>
  </div>
</template>

<style scoped></style>
