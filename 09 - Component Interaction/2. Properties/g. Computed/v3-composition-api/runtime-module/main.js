/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createApp } from '../../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import GreetingComponent from './GreetingComponent.js';

// Bootstrap
const app = createApp({
  components: {
    GreetingComponent
  }
});
app.mount('#app');
