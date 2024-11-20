<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';
import ContainerComponent from './ContainerComponent.vue';

const name1 = ref('first');
const name2 = ref('second');

function handleSwitch() {
  if (name1.value === 'first') {
    name1.value = 'second';
    name2.value = 'first';
  } else {
    name1.value = 'first';
    name2.value = 'second';
  }
}
</script>

<template>
  <ContainerComponent>
    <template #[name1]>
      <em>First</em>
    </template>

    <template #[name2]>
      <b>Second</b>
    </template>
  </ContainerComponent>

  <button @click="handleSwitch">Switch</button>
</template>

<style scoped></style>
