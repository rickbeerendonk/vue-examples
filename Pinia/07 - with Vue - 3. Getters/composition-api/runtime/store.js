/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 5
  }),
  getters: {
    doubleCount: state => state.count * 2,
    // Getter can access other getters
    quadrupleCount() {
      return this.doubleCount * 2;
    }
  }
});
