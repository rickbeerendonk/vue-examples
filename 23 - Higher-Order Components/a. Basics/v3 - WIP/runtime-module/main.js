/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import Greeting from './Greeting.js';
import withExtras from './hoc.js';

const GreetingWithExtras = withExtras(Greeting);

const app = Vue.createApp({
  components: {
    GreetingWithExtras
  },
  template: '<GreetingWithExtras name="World" extraColor="red" />'
});
app.mount('#app');
