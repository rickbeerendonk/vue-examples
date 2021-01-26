/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue_2/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex_3/dist/vuex.esm.browser.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: 'CreateStore'
  }
});

const App = {
  name: 'App',
  computed: {
    // Relatively easy to add a computed property
    state() {
      return this.$store.state;
    }
  },
  template: '<h1>State: {{ state }}</h1>'
};

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
