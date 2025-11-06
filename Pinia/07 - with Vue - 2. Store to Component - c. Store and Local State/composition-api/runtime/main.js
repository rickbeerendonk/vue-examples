/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createApp, ref, computed } from 'vue';
import { createPinia, storeToRefs } from 'pinia';
import { useMainStore } from './store.js';

const pinia = createPinia();

const App = {
  name: 'App',
  setup() {
    // Store state
    const store = useMainStore();
    const { name } = storeToRefs(store);

    // Local state
    const year = ref(2025);
    const previousYear = computed(() => year.value - 1);

    return { name, year, previousYear };
  },
  template: `
    <ul>
      <li>[Store] Name: {{ name }}</li>
      <li>[Local] Year: {{ year }}</li>
      <li>[Local] Previous year: {{ previousYear }}</li>
    </ul>`
};

const app = createApp(App);
app.use(pinia);
app.mount('#app');
