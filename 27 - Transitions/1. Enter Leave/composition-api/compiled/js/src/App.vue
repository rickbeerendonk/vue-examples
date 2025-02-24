<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>

<template>
  <div id="app">
    <button @click="show = !show">Show / Hide</button>
    <transition name="fade">
      <h1 v-if="show">Hello Vue Transitions!</h1>
    </transition>
  </div>
</template>

<style scoped>
h1 {
  background-color: #d676ff;
  color: #444;
  padding: 1rem;
}

.fade-enter-active {
  opacity: 0;
  transition: opacity 3s ease-in-out;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
