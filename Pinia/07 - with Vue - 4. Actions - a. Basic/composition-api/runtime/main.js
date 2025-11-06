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

    // Actions can be destructured directly (without storeToRefs)
    const { changeName, incrementYear } = store;

    return { name, year, changeName, incrementYear };
  },
  template: `
    <h1>Hello {{ name }}!</h1>
    <input :value='name' @input="e => changeName(e.target.value)" />

    <h1>{{ year }}</h1>
    <button @click="() => incrementYear()">Increase</button>
    <button @click="() => incrementYear(5)">Increase with 5</button>
  `
};

const app = createApp(App);
app.use(pinia);
app.mount('#app');
