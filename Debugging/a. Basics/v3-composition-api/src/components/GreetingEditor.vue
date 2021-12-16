<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk          -->

<template>
  <div>
    <EditBox :value="name" @change="changed" />
    <GreetingComponent :name="name" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import EditBox from './EditBox.vue';
import GreetingComponent from './GreetingComponent.vue';

const name = ref('World');
const changed = value => {
  name.value = value;
};
</script>

<style scoped></style>
