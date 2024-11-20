<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1>Router</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/page1">Page 1</RouterLink>
      <RouterLink to="/page2">Page 2</RouterLink>
      <RouterLink to="/page404">Page 404</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

  <footer>My copyright</footer>
</template>

<style scoped>
header,
footer {
  background: lightblue;
  padding: 0.5rem;
}

main {
  padding: 0.5rem;
}

header h1,
header nav {
  margin-block-start: 0;
  margin-block-end: 0;
}

header nav > a {
  margin-right: 0.5rem;
}
</style>
