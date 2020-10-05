<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div id="app">
    <header>
      <h1>Router - Lazy Loading</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/page1">Page 1</router-link>
        <router-link to="/page2">Page 2</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>My copyright</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

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
