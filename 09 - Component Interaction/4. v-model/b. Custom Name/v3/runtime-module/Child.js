/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'Child',
  props: ['customName'], // must be "customName" to use with v-model:custom-name
  emits: ['update:customName'], // Must be "update:customName" to use with v-model:custom-name
  methods: {
    changed(e) {
      this.$emit('update:customName', e.target.value);
    }
  },
  template: '<input :value="customName" @keyup="changed" />'
};
