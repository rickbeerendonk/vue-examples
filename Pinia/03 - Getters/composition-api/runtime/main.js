/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createPinia, defineStore } from 'pinia';
import { computed, ref } from 'vue';

const pinia = createPinia();

const useMainStore = defineStore('main', () => {
  const items = ref([
    { id: 0, sex: 'female', country: 'NL', name: 'Alexandra' },
    { id: 1, sex: 'male', country: 'EN', name: 'Benjamin' },
    { id: 2, sex: 'female', country: 'EN', name: 'Charlotte' },
    { id: 3, sex: 'male', country: 'NL', name: 'Dirk' }
  ]);

  // 1a. Property style
  const females = computed(() =>
    items.value.filter(item => item.sex === 'female')
  );

  // 1b. Property style + Use other getter
  const femaleCount = computed(() => females.value.length);

  // 2. Function style - return a function for dynamic getters
  const fromCountry = computed(() => {
    return country => items.value.filter(item => item.country === country);
  });

  return { items, females, femaleCount, fromCountry };
});

const store = useMainStore(pinia);

document.getElementById('content').innerText = `
  Females:
  ${JSON.stringify(store.females)}

  Female count:
  ${store.femaleCount}

  From country (NL):
  ${JSON.stringify(store.fromCountry('NL'))}
`;
