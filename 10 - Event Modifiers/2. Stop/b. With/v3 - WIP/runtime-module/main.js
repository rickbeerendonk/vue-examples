/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

const app = Vue.createApp({
  data: {
    result: []
  },
  methods: {
    parentClicked: function (event) {
      this.result.push(
        `${event.currentTarget.id} received event for ${event.target.id}.`
      );
    },
    childClicked: function (event) {
      this.result.push(
        `${event.target.id} received event (Standard) -- with stop.`
      );
    },
    childSelfClicked: function (event) {
      this.result.push(`${event.target.id} received event (Self).`);
    }
  }
});
app.mount('#app');
