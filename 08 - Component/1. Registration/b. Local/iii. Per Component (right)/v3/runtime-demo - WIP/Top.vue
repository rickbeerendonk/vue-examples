<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <h1>Top</h1>
    <middle />
  </div>
</template>

<script>
(async () => {
  /* global httpVueLoader */
  const Middle = await httpVueLoader('./Middle.vue')();

  module.exports = {
    name: 'Top',
    components: {
      Middle
    }
  };
})();
</script>

<style scoped></style>
