<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import { ref } from 'vue';
import ContainerComponent from './ContainerComponent.vue';

const source = ref('Root');
</script>

<template>
  <ContainerComponent>
    <template #first>{{ source }}</template>
    <template #second="{ source }">{{ source }}</template>
  </ContainerComponent>
</template>

<style scoped></style>
