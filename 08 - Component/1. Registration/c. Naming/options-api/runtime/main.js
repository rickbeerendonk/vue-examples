/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

import GreetingComponent from './GreetingComponent.js';
import OtherComponent from './OtherComponent.js';

const app = Vue.createApp({});

// Register component globally
app.component(/* PascalCase */ 'GreetingComponent', GreetingComponent);
app.component(/* PascalCase */ 'OtherComponent', OtherComponent);

app.mount('#app');
