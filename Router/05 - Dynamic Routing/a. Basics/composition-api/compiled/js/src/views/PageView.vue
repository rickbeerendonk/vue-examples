<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup></script>

<template>
  <h2>Page {{ $route.params.id }}</h2>
  <div>
    $route.params:
    <pre>{{ JSON.stringify($route.params, null, 4) }}</pre>
  </div>
</template>

<style scoped></style>
