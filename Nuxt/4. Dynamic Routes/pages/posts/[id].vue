<template>
  <div>
    <h2>Post {{ route.params.id }}</h2>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
