/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { defineAsyncComponent } from 'vue';

const GreetingDutch = () => import('./GreetingDutch.js');
const GreetingEnglish = () => import('./GreetingEnglish.js');
const GreetingSpanish = () => import('./GreetingSpanish.js');

export default {
  name: 'App',
  components: {
    GreetingDutch: defineAsyncComponent(GreetingDutch),
    GreetingEnglish: defineAsyncComponent(GreetingEnglish),
    GreetingSpanish: defineAsyncComponent(GreetingSpanish)
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
  mounted() {
    // After the UI is shown, pre-load components so they are already
    // in memory when you need them (see behavior on devtools' network tab)
    GreetingDutch();
    // GreetingSpanish();
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
      <component :is="greetingLanguage"></component>
    </div>
  `
};
