/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  createApp,
  Teleport
} from '../../../../node_modules/vue-next/dist/vue.esm-browser.js';

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
