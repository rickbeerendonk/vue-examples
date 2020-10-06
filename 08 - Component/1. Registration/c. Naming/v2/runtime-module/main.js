/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

import GreetingComponent from './GreetingComponent.js';
import OtherComponent from './OtherComponent.js';

// Register component globally
Vue.component(/* PascalCase */ 'GreetingComponent', GreetingComponent);
Vue.component(/* PascalCase */ 'OtherComponent', OtherComponent);

// Bootstrap
new Vue({
  el: '#app'
});
