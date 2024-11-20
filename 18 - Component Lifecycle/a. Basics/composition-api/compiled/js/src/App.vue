<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref, watch, onMounted } from 'vue';
import HelloComponent from './components/HelloComponent.vue';

const currentComponent = ref(HelloComponent);
const name = ref('A');

watch(name, () => {
  setTimeout(() => {
    // Hide component (but keep alive)
    currentComponent.value = null;
    // Show component (but keep alive)
    setTimeout(() => {
      currentComponent.value = HelloComponent;
    }, 100);
  }, 100);
});

onMounted(() => {
  name.value = 'B';
});
</script>

<template>
  <div id="app">
    <keep-alive>
      <component :is="currentComponent" :name="name"></component>
    </keep-alive>
  </div>
</template>

<style scoped></style>
