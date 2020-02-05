/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from '../../../../node_modules/vue-next/dist/vue.esm.js';

import App from './App.js';

// Bootstrap
createApp().mount(
  {
    components: {
      app: App
    },
    template: '<app />'
  },
  '#app'
);
