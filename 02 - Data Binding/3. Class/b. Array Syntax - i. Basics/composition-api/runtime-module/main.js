/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref
} from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

createApp({
  setup() {
    const classDynamic1 = ref('dynamic1');
    const classDynamic2 = ref('dynamic2');

    const clicked = () => {
      classDynamic1.value = classDynamic1.value ? '' : 'dynamic1';
      classDynamic2.value = classDynamic2.value ? '' : 'dynamic2';
    };

    return { classDynamic1, classDynamic2, clicked };
  }
}).mount('#app');
