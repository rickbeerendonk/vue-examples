/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint-disable vue/one-component-per-file */

import { createApp, version } from 'vue';

createApp({
  template: `Template: Vue ${version}!` // No <div> needed.
}).mount('#app1' /* <div id="app1"></div> */);

createApp({
  data() {
    return {
      greeting: `Data: Vue ${version}!`
    };
  }
}).mount('#app2' /* <div id="app2">{{ greeting }}</div> */);
