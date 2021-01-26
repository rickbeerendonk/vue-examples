/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, h } from 'vue';
import * as Vuex from 'vuex';

const store = new Vuex.Store();

const App = {
  name: 'App',
  computed: {
    state() {
      // Use global const. Not recommended!
      return store.state;
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
