/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createPinia, defineStore } from 'pinia';
import { ref } from 'vue';

const pinia = createPinia();

const useMainStore = defineStore('main', () => {
  const year = ref(2025);
  return { year };
});

const store = useMainStore(pinia);

document.getElementById('content').innerText = `Year: ${store.year}`;
