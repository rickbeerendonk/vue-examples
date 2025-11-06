/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => {
    // Get persistently stored state
    const stored = localStorage.getItem('pinia-main');
    return stored
      ? JSON.parse(stored)
      : {
          name: 'Vue',
          year: 2025
        };
  },
  actions: {
    changeName(newName) {
      this.name = newName;
    },
    incrementYear(amount = 1) {
      this.year += amount;
    }
  }
});
