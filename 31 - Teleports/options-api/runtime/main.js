/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, Teleport } from 'vue';

createApp({
  components: {
    Teleport
  },
  template: `
      This is the Vue app.
      <teleport to="#portal">
        I am shown outside the Vue root element.
      </teleport>
    `
}).mount('#app');
