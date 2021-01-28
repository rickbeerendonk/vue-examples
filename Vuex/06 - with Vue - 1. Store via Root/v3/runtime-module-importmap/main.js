/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';
import * as Vuex from 'vuex';

const store = new Vuex.Store();

const App = {
  name: 'App',
  computed: {
    state() {
      return this.$store.state;
    }
  },
  template: '<h1>State: {{ state }}</h1>'
};

const app = createApp(App);
app.use(store);
app.mount('#app');
