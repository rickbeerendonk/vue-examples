<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2018 Rick Beerendonk          -->

<script setup>
import { watch } from 'vue';

import { useDocumentHidden } from './composables/useDocumentHidden.js';

const isDocumentHidden = useDocumentHidden();

watch(isDocumentHidden, value => {
  console.log(`Document is ${value ? 'Hidden' : 'Visible'}!`);
});
</script>

<template>
  <h1>Document is {{ isDocumentHidden ? 'Hidden' : 'Visible' }}!</h1>
</template>

<style scoped></style>
