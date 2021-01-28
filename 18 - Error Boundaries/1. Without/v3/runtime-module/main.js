/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import DividerComponent from './DividerComponent.js';

const app = Vue.createApp({
  components: { DividerComponent },
  template: `
    <h1>Without Error Boundary</h1>
    <divider-component />
  `
});
app.mount('#app');
