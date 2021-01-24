/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import GreetingDutch from './GreetingDutch.js';
import GreetingEnglish from './GreetingEnglish.js';
import GreetingSpanish from './GreetingSpanish.js';

export default {
  name: 'App',
  components: {
    GreetingDutch,
    GreetingEnglish,
    GreetingSpanish
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
    <div>
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
    </div>
  `
};
