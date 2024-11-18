/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createApp } from 'vue';

createApp({
  setup() {
    const dynamicevent = 'click';
    function clicked(e) {
      alert(`Event handled.
      Target: ${e.target}`);
    }

    return { dynamicevent, clicked };
  }
}).mount('#app');
