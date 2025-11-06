<!--! European Union Public License version 1.2 !-->
<!--! Copyright © 2025 Rick Beerendonk          !-->

<script setup lang="ts">
import GreetingEditor from './components/GreetingEditor.vue';
import GreetingEditorInput from './components/GreetingEditorInput.vue';
import CustomContent from './components/CustomContent.vue';
</script>

<template>
  <GreetingEditor>
    <div style="background-color: lightgray">
      <CustomContent />
    </div>
    <GreetingEditorInput />
  </GreetingEditor>
</template>
