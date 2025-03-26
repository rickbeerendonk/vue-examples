<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk          -->

<script setup>
import TabContainer from './TabContainer.vue';
</script>

<template>
  <TabContainer>
    <template #first>
      <em>First</em>
    </template>
    <template #second>
      <b>Second</b>
    </template>
    <template #third>
      <u>Third</u>
    </template>
  </TabContainer>
</template>

<style scoped></style>
