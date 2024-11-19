<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <h2>Middle</h2>
    <bottom />
  </div>
</template>

<script>
(async () => {
  /* global httpVueLoader */
  const Bottom = await httpVueLoader('./Bottom.vue')();

  module.exports = {
    name: 'Middle',
    components: {
      Bottom
    }
  };
})();
</script>

<style scoped></style>
