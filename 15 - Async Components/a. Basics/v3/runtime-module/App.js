/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { defineAsyncComponent } from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

export default {
  name: 'App',
  components: {
    GreetingDutch: defineAsyncComponent(() => import('./GreetingDutch.js')),
    GreetingEnglish: defineAsyncComponent(() => import('./GreetingEnglish.js')),
    GreetingSpanish: defineAsyncComponent(() => import('./GreetingSpanish.js'))
  },
  data() {
    return {
      language: 'english'
    };
  },
  computed: {
    greetingLanguage() {
      return 'greeting-' + this.language;
    }
  },
  template: `
    <label>
      <input v-model="language" type="radio" value="dutch" />
      Dutch
    </label>
    <label>
      <input v-model="language" type="radio" value="english" />
      English
    </label>
    <label>
      <input v-model="language" type="radio" value="spanish" />
      Spanish
    </label>

    <div style="background: bisque">
      <component v-bind:is="greetingLanguage"></component>
    </div>
  `
};
