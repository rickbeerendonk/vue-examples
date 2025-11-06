<!--! European Union Public License version 1.2 !-->
<!--! Copyright © 2025 Rick Beerendonk          !-->

<script setup lang="ts">
import GreetingEditorInput from './components/GreetingEditorInput.vue';
import GreetingEditorText from './components/GreetingEditorText.vue';

// These components are rendered OUTSIDE of GreetingEditor
// This will cause an error to be thrown
</script>

<template>
  <GreetingEditorText />
  <GreetingEditorInput />
</template>
