/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data() {
    return {
      result: []
    };
  },
  methods: {
    parentSelfClicked(event) {
      this.result.push(
        `${event.currentTarget.id} received event for ${event.target.id} (Self).`
      );
    },
    childClicked(event) {
      this.result.push(`${event.target.id} received event (Standard).`);
    },
    childSelfClicked(event) {
      this.result.push(`${event.target.id} received event (Self).`);
    }
  }
});
app.mount('#app');
