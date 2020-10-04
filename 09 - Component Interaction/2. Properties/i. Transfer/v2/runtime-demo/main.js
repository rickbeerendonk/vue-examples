/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const ImportantAnchor = httpVueLoader('./ImportantAnchor.vue');

// Bootstrap
new Vue({
  el: '#app',
  components: {
    'important-anchor': ImportantAnchor
  }
});
