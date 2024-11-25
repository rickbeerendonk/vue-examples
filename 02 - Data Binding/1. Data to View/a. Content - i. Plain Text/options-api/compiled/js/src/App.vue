<script>
export default {
  data() {
    return {
      greeting: `Hello Vue!`
    };
  }
};
</script>

<template>
  <!--  v-text directive -->
  <span v-text="greeting"></span>
</template>
