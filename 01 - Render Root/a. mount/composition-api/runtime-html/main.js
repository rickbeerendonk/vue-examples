/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, version } from 'vue';

const app = createApp({
  setup() {
    const greeting = `Vue ${version}!`;
    return { greeting };
  }
});
app.mount('#app');
