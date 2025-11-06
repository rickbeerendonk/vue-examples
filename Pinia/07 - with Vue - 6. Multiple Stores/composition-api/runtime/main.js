/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createApp } from 'vue';
import { createPinia, storeToRefs } from 'pinia';
import { useUserStore } from './userStore.js';
import { useCounterStore } from './counterStore.js';

const pinia = createPinia();

const App = {
  name: 'App',
  setup() {
    // Use multiple stores
    const userStore = useUserStore();
    const counterStore = useCounterStore();

    const { name } = storeToRefs(userStore);
    const { count } = storeToRefs(counterStore);

    const { changeName } = userStore;
    const { increment } = counterStore;

    return { name, count, changeName, increment };
  },
  template: `
    <div>
      <h2>User Store</h2>
      <p>Name: {{ name }}</p>
      <input :value='name' @input="e => changeName(e.target.value)" />
      
      <h2>Counter Store</h2>
      <p>Count: {{ count }}</p>
      <button @click="() => increment()">Increment</button>
    </div>
  `
};

const app = createApp(App);
app.use(pinia);
app.mount('#app');
