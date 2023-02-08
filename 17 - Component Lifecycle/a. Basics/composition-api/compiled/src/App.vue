<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div id="app">
    <keep-alive>
      <component :is="currentComponent" :name="name"></component>
    </keep-alive>
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue';

export default {
  name: 'App',
  components: {
    HelloComponent
  },
  data() {
    return {
      currentComponent: HelloComponent,
      name: 'A'
    };
  },
  watch: {
    name() {
      setTimeout(() => {
        // Hide component (but keep alive)
        this.currentComponent = null;
        // Show component (but keep alive)
        setTimeout(() => (this.currentComponent = HelloComponent), 100);
      }, 100);
    }
  },
  mounted() {
    this.$nextTick(function () {
      // After the entire view has been rendered
      this.name = 'B';
    });
  }
};
</script>

<style></style>
