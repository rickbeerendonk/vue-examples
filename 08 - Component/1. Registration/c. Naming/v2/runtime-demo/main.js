/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const GreetingComponent = httpVueLoader('./GreetingComponent.vue');
const OtherComponent = httpVueLoader('./OtherComponent.vue');

// Register component globally
Vue.component(/* PascalCase */ 'GreetingComponent', GreetingComponent);
Vue.component(/* PascalCase */ 'OtherComponent', OtherComponent);

// Bootstrap
new Vue({
  el: '#app'
});
