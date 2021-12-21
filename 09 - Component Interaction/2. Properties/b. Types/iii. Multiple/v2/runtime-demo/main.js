/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const GreetingComponent = httpVueLoader('./GreetingComponent.vue');

new Vue({
  el: '#app',
  components: {
    GreetingComponent
  },
  template: `
    <div>
      <GreetingComponent name="World" />
      <GreetingComponent :name="123" />
      <GreetingComponent :name="true" />
    </div>
  `
});
