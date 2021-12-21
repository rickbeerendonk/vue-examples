/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import GreetingComponent from './GreetingComponent.js';

const app = Vue.createApp({
  components: {
    GreetingComponent
  },
  template: `
    <GreetingComponent name="World" />
    <GreetingComponent :name="123" />
    <GreetingComponent :name="true" />
  `
});
app.mount('#app');
