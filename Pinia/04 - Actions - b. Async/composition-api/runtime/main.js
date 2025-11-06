/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createPinia, defineStore } from 'pinia';
import { ref } from 'vue';

import { addToList } from './helpers.js';

const pinia = createPinia();

const useMainStore = defineStore('main', () => {
  const year = ref(2025);

  async function incrementAsync() {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    year.value++;
  }

  return { year, incrementAsync };
});

const store = useMainStore(pinia);

addToList(store.year);
store.$subscribe(() => addToList(store.year));

// Actions can be async and contain arbitrary asynchronous operations
store.incrementAsync();
