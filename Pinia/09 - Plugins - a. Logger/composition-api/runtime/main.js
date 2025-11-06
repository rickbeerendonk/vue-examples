/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createApp } from 'vue';
import { createPinia, storeToRefs } from 'pinia';
import { loggerPlugin } from './loggerPlugin.js';
import { useCounterStore } from './store.js';

const pinia = createPinia();

// Add plugin to Pinia
pinia.use(loggerPlugin);

const App = {
  name: 'App',
  setup() {
    const store = useCounterStore();
    const { count } = storeToRefs(store);
    const { increment } = store;

    return { count, increment };
  },
  template: `
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
      <p><small>Plugin logs all store changes below and in console</small></p>
    </div>
  `
};

const app = createApp(App);
app.use(pinia);
app.mount('#app');
