<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div>
    <edit-box :value="name" @change="changed" />
    <greeting :name="name" />
  </div>
</template>

<script>
import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

export default {
  name: 'GreetingEditor',
  components: {
    EditBox,
    Greeting
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
