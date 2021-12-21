/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../../node_modules/vue_2/dist/vue.esm.browser.js';

import GreetingComponent from './GreetingComponent.js';

new Vue({
  el: '#app',
  components: {
    GreetingComponent
  },
  template: `
    <div>
      <GreetingComponent name="World" />
      <GreetingComponent :name="123" />
      <GreetingComponent :name="true" />
    </div>
  `
});
