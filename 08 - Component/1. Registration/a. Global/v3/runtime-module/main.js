/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import GreetingComponent from './GreetingComponent.js';
import OtherComponent from './OtherComponent.js';

const app = Vue.createApp({});

// Register component globally
app.component('greeting-component', GreetingComponent);
app.component('other-component', OtherComponent);

app.mount('#app');
