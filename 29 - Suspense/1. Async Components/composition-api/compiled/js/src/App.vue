<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script setup>
import { ref, defineAsyncComponent } from 'vue';

const Greeting = defineAsyncComponent(() => import('./Greeting.vue'));
const visible = ref(false);
</script>

<template>
  <button @click="visible = !visible">
    {{ visible ? 'Hide' : 'Show' }}
  </button>

  <Suspense v-if="visible">
    <template #default>
      <Greeting />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style scoped></style>
