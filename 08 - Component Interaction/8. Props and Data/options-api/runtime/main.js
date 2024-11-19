/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue/dist/vue.esm-browser.js';

import ChildComponent from './ChildComponent.js';

// Bootstrap
const app = Vue.createApp({
  components: {
    ChildComponent
  },
  data() {
    return {
      value: 'One'
    };
  }
});
app.mount('#app');
