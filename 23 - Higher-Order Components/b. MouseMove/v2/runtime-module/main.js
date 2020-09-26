/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue_2/dist/vue.esm.browser.js';

import Greeting from './Greeting.js';
import withMouseMove from './hoc.js';

const GreetingWithMouseMove = withMouseMove(Greeting);

new Vue({
  el: '#app',
  components: {
    GreetingWithMouseMove
  },
  template: '<GreetingWithMouseMove />'
});
