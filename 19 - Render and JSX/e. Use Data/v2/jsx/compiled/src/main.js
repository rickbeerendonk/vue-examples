/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from 'vue';

import App from './App.vue';

const component = new Vue({
  render() {
    return <App />;
  }
}).$mount();

document.body.appendChild(component.$el);
