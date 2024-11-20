/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data() {
    return {
      result: []
    };
  },
  methods: {
    parentClicked(event) {
      this.result.push(
        `${event.currentTarget.id} received event for ${event.target.id}.`
      );
    },
    childClicked(event) {
      this.result.push(`${event.target.id} received event.`);
    }
  }
});
app.mount('#app');
