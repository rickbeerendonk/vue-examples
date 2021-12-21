/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { computed } from '../../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'GreetingComponent',
  props: ['name'],
  setup(props) {
    const computedName = computed(() => props.name.trim().toUpperCase());
    return { computedName };
  },
  template: '<h1>Hello {{computedName}}!</h1>'
};
