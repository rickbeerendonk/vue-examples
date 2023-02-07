/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from 'vue';

new Vue({
  template: `<div>Hello Vue ${Vue.version}!</div>`
}).$mount('#app1'); // <div id="app1"></div>

new Vue({
  data() {
    return {
      greeting: `Hi Vue ${Vue.version}!`
    };
  }
}).$mount('#app2'); // <div id="app2">{{ greeting }}</div>
