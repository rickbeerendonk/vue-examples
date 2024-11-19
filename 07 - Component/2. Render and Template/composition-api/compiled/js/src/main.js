// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

import { createApp, h } from 'vue';
import App from './App.vue';

createApp({
  components: {
    App
  },
  render() {
    return h(App);
  }
}).mount('#app');
