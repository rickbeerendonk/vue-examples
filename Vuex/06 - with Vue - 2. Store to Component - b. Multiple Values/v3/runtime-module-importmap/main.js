/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, h } from 'vue';
import { mapState, Store } from 'vuex';

const store = new Store({
  state: {
    name: 'CreateStore',
    year: 2020
  }
});

const App = {
  name: 'App',
  // Harder to have multiple computed properties, therefor use mapState helper.
  computed: mapState({
    // Function
    name: state => state.name,
    // Alias
    year: 'year'
  }),
  template: `
    <ul>
      <li>Name: {{ name }}</li>
      <li>Year: {{ year }}</li>
    </ul>`
};

const app = createApp({
  render() {
    return h(App);
  }
});
app.use(store);
app.mount('#app');
