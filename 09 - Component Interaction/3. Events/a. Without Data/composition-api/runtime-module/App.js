/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import Child from './Child.js';
import { ref } from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'App',
  components: {
    Child
  },
  setup() {
    const count = ref(0);
    const childChanged = () => {
      count.value++;
    };

    return { count, childChanged };
  },
  template: `
    <child @updated="childChanged" />
    <h1>Clicked: {{ count }}</h1>
  `
};
