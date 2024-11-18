/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createApp } from 'vue';

import PostListContainer from './components/post-list-container.js';
import store from './store.js';

const app = createApp(PostListContainer);
app.use(store);
app.mount('#app');
