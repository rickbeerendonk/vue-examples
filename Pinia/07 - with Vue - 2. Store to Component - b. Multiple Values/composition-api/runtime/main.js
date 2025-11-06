/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createApp } from 'vue';
import { createPinia, storeToRefs } from 'pinia';
import { useMainStore } from './store.js';

const pinia = createPinia();

const App = {
  name: 'App',
  setup() {
    const store = useMainStore();
    // Use storeToRefs to maintain reactivity when destructuring
    const { name, year } = storeToRefs(store);
    return { name, year };
  },
  template: `
    <ul>
      <li>Name: {{ name }}</li>
      <li>Year: {{ year }}</li>
    </ul>`
};

const app = createApp(App);
app.use(pinia);
app.mount('#app');
