/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint-disable vue/one-component-per-file */

import { createApp, version } from 'vue';

// App 1: No <div> needed in template.
createApp({
  template: `Template: Vue ${version}!`
}).mount('#app1' /* <div id="app1"></div> */);

// App 2: <div> needed in template.
createApp({
  setup() {
    const greeting = `Setup: Vue ${version}!`;
    return { greeting };
  },
  template: `<div>{{ greeting }}</div>`
}).mount('#app2' /* <div id="app2">{{ greeting }}</div> */);
