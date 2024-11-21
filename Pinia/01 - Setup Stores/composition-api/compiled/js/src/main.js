// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
