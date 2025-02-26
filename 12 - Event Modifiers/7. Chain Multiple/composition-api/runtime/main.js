/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, ref } from 'vue';

const app = createApp({
  setup() {
    const result = ref([]);

    const parentCapturingClicked = event => {
      result.value.push(
        `${event.currentTarget.id} received event for ${event.target.id} in capturing phase.`
      );
    };

    const childClicked = event => {
      result.value.push(`${event.target.id} received event.`);
    };

    return {
      result,
      parentCapturingClicked,
      childClicked
    };
  },
  template: `
    <div id="parent" @click.capture="parentCapturingClicked">
      Parent
      <div id="child" @click="childClicked">Child</div>
    </div>

    <ul style="background-color: lightgray">
      <li v-for="item in result">{{ item }}</li>
    </ul>
  `
});

app.mount('#app');
