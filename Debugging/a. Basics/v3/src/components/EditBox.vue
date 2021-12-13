<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <input :value="value" @keyup="changed" />
</template>

<script>
export default {
  name: 'EditBox',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  emits: ['change'],
  methods: {
    changed(e) {
      this.$emit('change', e.target.value);
    }
  }
};
</script>

<style scoped></style>
