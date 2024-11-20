<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import ContainerComponent from './ContainerComponent.vue';
</script>

<template>
  <container-component>
    <!-- #default -->
    <u>Default</u>

    <template #first>
      <em>First</em>
    </template>

    <template #second>
      <b>Second</b>
    </template>
  </container-component>
</template>

<style scoped></style>
