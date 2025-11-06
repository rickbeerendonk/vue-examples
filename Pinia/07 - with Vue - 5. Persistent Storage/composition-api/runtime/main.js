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
    const { name, year } = storeToRefs(store);
    const { changeName, incrementYear } = store;

    // Subscribe to store changes and persist to localStorage
    store.$subscribe((mutation, state) => {
      localStorage.setItem('pinia-main', JSON.stringify(state));
    });

    return { name, year, changeName, incrementYear };
  },
  template: `
    <h1>Hello {{ name }}!</h1>
    <input :value='name' @input="e => changeName(e.target.value)" />

    <h1>{{ year }}</h1>
    <button @click="() => incrementYear()">Increase</button>
    <button @click="() => incrementYear(5)">Increase with 5</button>
    
    <p><small>State is persisted in localStorage. Refresh to see it retained.</small></p>
  `
};

const app = createApp(App);
app.use(pinia);
app.mount('#app');
