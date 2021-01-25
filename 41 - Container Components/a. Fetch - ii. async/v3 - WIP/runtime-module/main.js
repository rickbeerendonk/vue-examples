/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import PostListContainer from './components/post-list-container.js';

const app = Vue.createApp({
  render: h => h(PostListContainer)
});
app.mount('#app');
