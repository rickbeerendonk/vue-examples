/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    name: 'Pinia'
  })
});
