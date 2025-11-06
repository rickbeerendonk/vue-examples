/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useMainStore } from './store.js';

const pinia = createPinia();

const App = {
  name: 'App',
  setup() {
    const store = useMainStore();
    return { store };
  },
  template: '<h1>Name: {{ store.name }}</h1>'
};

const app = createApp(App);
app.use(pinia);
app.mount('#app');
