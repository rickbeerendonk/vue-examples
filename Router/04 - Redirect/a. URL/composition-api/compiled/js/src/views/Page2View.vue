<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup></script>

<template>
  <h2>Page 2</h2>
  <div>
    $route.redirectedFrom:
    <pre>{{ JSON.stringify($route.redirectedFrom, null, 4) }}</pre>
  </div>
</template>

<style scoped></style>
