// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

import { createApp } from 'vue';
import App from './App.vue';

import GreetingComponent from './components/GreetingComponent.vue';
import OtherComponent from './components/OtherComponent.vue';

const app = createApp(App);
app.component('GreetingComponent', GreetingComponent);
app.component('OtherComponent', OtherComponent);
app.mount('#app');
