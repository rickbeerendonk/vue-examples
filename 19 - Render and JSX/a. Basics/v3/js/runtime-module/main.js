/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  render() {
    return Vue.h(
      'h1', // tag name
      ['Hello Vue', '!'] // array of children
    );
  }
}).mount('#app');
