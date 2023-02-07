/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from 'vue';

new Vue({
  el: '#app1',
  template: `<div>Hello Vue ${Vue.version}!</div>`
});

new Vue({
  el: '#app2',
  data() {
    return {
      greeting: `Hi Vue ${Vue.version}!`
    };
  }
});
