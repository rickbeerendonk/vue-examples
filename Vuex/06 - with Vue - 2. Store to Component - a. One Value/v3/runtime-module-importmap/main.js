/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, h } from 'vue';
import * as Vuex from 'vuex';

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

const app = createApp({
  render() {
    return h(App);
  }
});
app.use(store);
app.mount('#app');
