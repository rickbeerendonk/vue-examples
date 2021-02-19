/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'Child',
  props: ['modelValue'], // must be "modelValue" to use with v-model
  emits: ['update:modelValue'], // Must be "update:modelValue" to use with v-model
  methods: {
    changed(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  },
  template: '<input :value="modelValue" @keyup="changed" />'
};
