/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const result = ref([]);

    const parentSelfClicked = event => {
      result.value.push(
        `${event.currentTarget.id} received event for ${event.target.id} (Self).`
      );
    };

    const childClicked = event => {
      result.value.push(`${event.target.id} received event (Standard).`);
    };

    const childSelfClicked = event => {
      result.value.push(`${event.target.id} received event (Self).`);
    };

    return {
      result,
      parentSelfClicked,
      childClicked,
      childSelfClicked
    };
  },
  template: `
    <div id="parent" @click.self="parentSelfClicked">
      Parent
      <!-- Order of @click.self and @click matters. -->
      <div id="child" @click.self="childSelfClicked" @click="childClicked">
        Child
      </div>
    </div>

    <ul style="background-color: lightgray">
      <li v-for="item in result">{{ item }}</li>
    </ul>
  `
});

app.mount('#app');
