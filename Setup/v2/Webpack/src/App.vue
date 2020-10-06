<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div id="app">
    <greeting name="Vue" />
    <greeting-with-jsx name="JSX" />
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';
import GreetingWithJsx from './components/GreetingWithJsx.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    GreetingWithJsx
  }
};
</script>

<style>
#app {
  color: #444;
}
</style>
