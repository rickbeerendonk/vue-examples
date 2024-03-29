/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

Vue.createApp({
  render() {
    return Vue.h(
      'a', // tag name
      {
        href: 'https://vuejs.org',
        target: '_blank'
      }, // object with attributes
      ['Vue website'] // array of children
    );
  }
}).mount('#app');
