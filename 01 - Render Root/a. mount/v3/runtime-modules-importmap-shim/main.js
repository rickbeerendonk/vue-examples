/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';

Vue.createApp({
  template: `Hello Vue ${Vue.version}!` // No <div> needed.
}).mount('#app1' /* // <div id="app1"></div> */);

Vue.createApp({
  data() {
    return {
      greeting: `Hi Vue ${Vue.version}!`
    };
  }
}).mount('#app2' /* <div id="app2">{{ greeting }}</div> */);
