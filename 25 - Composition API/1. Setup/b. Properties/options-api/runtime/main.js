/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';

import CountView from './CountView.js';

// Bootstrap
const app = createApp({
  components: {
    CountView
  }
});
app.mount('#app');
