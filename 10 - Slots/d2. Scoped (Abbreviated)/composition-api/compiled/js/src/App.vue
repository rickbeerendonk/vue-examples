<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import ContainerComponent from './ContainerComponent.vue';
</script>

<template>
  <!-- Long -->
  <ContainerComponent>
    <template #default="slotProps">{{ slotProps.source }}</template>
  </ContainerComponent>

  <!-- Short (Abbreviated) -->
  <ContainerComponent #default="slotProps">
    {{ slotProps.source }}
  </ContainerComponent>
</template>

<style scoped></style>
