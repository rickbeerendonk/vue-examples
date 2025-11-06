/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createApp } from 'vue';
import { createPinia, storeToRefs } from 'pinia';
import { useCounterStore } from './store.js';

const pinia = createPinia();

const App = {
  name: 'App',
  setup() {
    const store = useCounterStore();
    const { count, doubleCount, quadrupleCount } = storeToRefs(store);
    return { count, doubleCount, quadrupleCount };
  },
  template: `
    <ul>
      <li>Count: {{ count }}</li>
      <li>Double Count: {{ doubleCount }}</li>
      <li>Quadruple Count: {{ quadrupleCount }}</li>
    </ul>`
};

const app = createApp(App);
app.use(pinia);
app.mount('#app');
