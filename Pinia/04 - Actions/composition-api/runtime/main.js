/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createPinia, defineStore } from 'pinia';
import { ref } from 'vue';

import { addToList } from './helpers.js';

const pinia = createPinia();

const useMainStore = defineStore('main', () => {
  const year = ref(2025);

  function increment() {
    year.value++;
  }

  return { year, increment };
});

const store = useMainStore(pinia);

addToList(store.year);
store.$subscribe(() => addToList(store.year));

store.increment();
