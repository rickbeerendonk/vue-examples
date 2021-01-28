/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import Greeting from './Greeting.js';
import withMouseMove from './hoc.js';

const GreetingWithMouseMove = withMouseMove(Greeting);

const app = Vue.createApp({
  components: {
    GreetingWithMouseMove
  },
  template: '<GreetingWithMouseMove />'
});
app.mount('#app');
