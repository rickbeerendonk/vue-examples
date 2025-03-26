<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk          -->

<script setup>
import { ref, useSlots } from 'vue';

const slots = useSlots();
const tabs = ref(Object.keys(slots));
const selectedTab = ref(tabs.value[0]);

const setSelectTab = tab => {
  selectedTab.value = tab;
};
</script>

<template>
  <button
    v-for="tab in tabs"
    :key="tab"
    :disabled="tab === selectedTab"
    @click="setSelectTab(tab)"
  >
    {{ tab }}
  </button>

  <div>
    <slot :name="selectedTab" />
  </div>
</template>

<style scoped></style>
