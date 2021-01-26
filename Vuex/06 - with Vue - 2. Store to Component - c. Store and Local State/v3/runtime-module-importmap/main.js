/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, h } from 'vue';
import { mapState, Store } from 'vuex';

const store = new Store({
  state: {
    name: 'CreateStore'
  }
});

const App = {
  name: 'App',
  data() {
    return {
      year: 2020
    };
  },
  computed: {
    // Copy all from store
    ...mapState({ name: state => state.name }),
    // Local computed property
    previousYear() {
      return this.year - 1;
    }
  },
  template: `
    <ul>
      <li>[Store] Name: {{ name }}</li>
      <li>[Local] Year: {{ year }}</li>
      <li>[Local] Previous year: {{ previousYear }}</li>
    </ul>`
};

const app = createApp({
  render() {
    return h(App);
  }
});
app.use(store);
app.mount('#app');
