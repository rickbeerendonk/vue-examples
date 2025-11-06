/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createPinia, defineStore } from 'pinia';

const pinia = createPinia();

const useMainStore = defineStore('main', () => {
  return {};
});

const store = useMainStore(pinia);

document.getElementById('content').innerText = JSON.stringify(store);
