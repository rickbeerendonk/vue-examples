<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import ContainerComponent from './ContainerComponent.vue';
</script>

<template>
  <ContainerComponent>
    <!-- v-slot:default -->
    <u>Default</u>

    <template v-slot:first>
      <em>First</em>
    </template>

    <template v-slot:second>
      <b>Second</b>
    </template>
  </ContainerComponent>
</template>

<style scoped></style>
