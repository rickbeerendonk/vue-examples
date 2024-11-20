<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1>Router</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/page/1/a">Page 1a</RouterLink>
      <RouterLink to="/page/1/b">Page 1b</RouterLink>
      <RouterLink to="/page/2/a">Page 2a</RouterLink>
      <RouterLink to="/page/2/b">Page 2b</RouterLink>
      <RouterLink to="/page/2/c">Page 2c</RouterLink>
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
