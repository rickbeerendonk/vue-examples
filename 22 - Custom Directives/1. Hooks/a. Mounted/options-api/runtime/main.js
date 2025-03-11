/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';

const app = createApp({
  el: '#app'
});

app.directive('focus', {
  mounted(elem) {
    elem.focus();
  }
});

app.mount('#app');
