// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

import { createApp, version } from 'vue';

const app = createApp({
  template: `Template: Vue ${version}!`
});
app.mount('#app');
