/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

Vue.createApp({
  data() {
    return {
      name: 'Vue'
    };
  },
  render() {
    return Vue.h('h1', ['Hello ', this.name, '!']);
  }
}).mount('#app');
