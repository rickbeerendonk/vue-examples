<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div>
    <EditBox :value="name" @change="changed" />
    <GreetingComponent :name="name" />
  </div>
</template>

<script>
import EditBox from './EditBox.vue';
import GreetingComponent from './GreetingComponent.vue';

export default {
  name: 'GreetingEditor',
  components: {
    EditBox,
    GreetingComponent
  },
  data() {
    return {
      name: 'World'
    };
  },
  methods: {
    changed(value) {
      this.name = value;
    }
  }
};
</script>

<style scoped></style>
