<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1>Router</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/page/1">Page 1</RouterLink>
      <RouterLink to="/page/2">Page 2</RouterLink>
      <RouterLink to="/page/3">Page 3</RouterLink>
      <RouterLink to="/page/4">Page 4</RouterLink>
      <RouterLink to="/page/5">Page 5</RouterLink>
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
