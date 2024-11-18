/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import {
  createApp,
  ref,
  computed,
  watch
} from '../../../../node_modules/vue/dist/vue.esm-browser.js';

createApp({
  setup() {
    const firstName = ref('Evan');
    const lastName = ref('You');
    const fullNameViaWatch = ref('');
    const fullNameViaComputed = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });
    watch([firstName, lastName], (values /*, oldValues */) => {
      fullNameViaWatch.value = `${values[0]} ${values[1]}`;
    });

    return { firstName, lastName, fullNameViaWatch, fullNameViaComputed };
  }
}).mount('#app');
