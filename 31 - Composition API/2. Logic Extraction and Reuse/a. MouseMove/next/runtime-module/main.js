/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue-next/dist/vue.esm-browser.js';

import Greeting from './Greeting.js';

// Bootstrap
const app = Vue.createApp(Greeting);
app.mount('#app');
