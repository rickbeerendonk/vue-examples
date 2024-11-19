/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createApp } from 'vue';

import GreetingComponent from './GreetingComponent.js';

// Bootstrap
const app = createApp({
  components: {
    GreetingComponent
  }
});
app.mount('#app');
