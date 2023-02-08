/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data() {
    return {
      options: [
        { description: 'Option A', value: 'A' },
        { description: 'Option B', value: 'B' },
        { description: 'Option C', value: 'C' }
      ],
      selected: 'B'
    };
  }
});
app.mount('#app');
