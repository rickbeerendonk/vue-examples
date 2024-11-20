<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<script setup></script>

<template>
  <h2>Page {{ $route.params.id }}{{ $route.params.sub }}</h2>
  <ul>
    <li>$route.fullPath: {{ $route.fullPath }}</li>
    <li>$route.path: {{ $route.path }}</li>
    <li>$route.params: {{ JSON.stringify($route.params) }}</li>
    <li>$route.query: {{ JSON.stringify($route.query) }}</li>
    <li>$route.name: {{ $route.name }}</li>
    <li>$route.redirectedFrom: {{ $route.redirectedFrom }}</li>
  </ul>
</template>

<style scoped></style>
