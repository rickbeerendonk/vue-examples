/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp, h } from 'vue';

import App from './main/components/App.js';
import store from './main/store/index.js';

const app = createApp({
  render() {
    return h(App);
  }
});
app.use(store);
app.mount('#app');
