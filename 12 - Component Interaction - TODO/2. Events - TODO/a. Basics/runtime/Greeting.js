/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

// @vue/component
export default {
  name: 'Greeting',
  props: ['name'],
  methods: {
    changed(e) {
      this.$emit('change', e.target.value);
    }
  },
  template: '<input :value="name" @keyup="changed" />'
};
