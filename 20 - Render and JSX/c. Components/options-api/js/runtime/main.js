/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

const Greeting = {
  props: ['name'],
  template: `<h1>Hello {{ name }}!</h1>`
};

Vue.createApp({
  render() {
    return Vue.h(
      Greeting, // tag name
      {
        name: 'World'
      } // object with attributes
      // [Optional] array of children
    );
  }
}).mount('#app');
