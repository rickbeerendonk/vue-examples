<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup>
import ContainerComponent from './ContainerComponent.vue';
</script>

<template>
  <ContainerComponent>
    <template #default="slotProps">{{ slotProps.source }}</template>
  </ContainerComponent>
</template>

<style scoped></style>
