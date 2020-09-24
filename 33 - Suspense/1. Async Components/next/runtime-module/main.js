/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from '../../../../node_modules/vue-next/dist/vue.esm-browser.js';

import App from './App.js';

// Bootstrap
createApp({
  components: {
    app: App
  },
  template: '<app />'
}).mount('#app');
