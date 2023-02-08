/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    const dynamicevent = 'click';
    const clicked = e => {
      alert(`Event handled.
      Target: ${e.target}`);
    };

    return { dynamicevent, clicked };
  }
}).mount('#app');
