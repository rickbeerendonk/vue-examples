/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const result = ref([]);

    const parentClicked = event => {
      result.value.push(
        `${event.currentTarget.id} received event for ${event.target.id}.`
      );
    };

    const childClicked = event => {
      result.value.push(`${event.target.id} received event.`);
    };

    return {
      result,
      parentClicked,
      childClicked
    };
  },
  template: `
    <div id="parent" @click="parentClicked">
      Parent
      <div id="child" @click="childClicked">Child</div>
    </div>

    <ul style="background-color: lightgray">
      <li v-for="item in result">{{ item }}</li>
    </ul>
  `
});

app.mount('#app');
