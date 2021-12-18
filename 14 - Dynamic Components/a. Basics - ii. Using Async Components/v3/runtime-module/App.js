/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { defineAsyncComponent } from '../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

export default {
  name: 'App',
  data() {
    return {
      language: 'English'
    };
  },
  computed: {
    greetingLanguageComponent() {
      // Preserve reactivity
      // Don't use 'this.language' directly in the template string
      const lang = this.language;
      return defineAsyncComponent(() => import(`./Greeting${lang}.js`));
    }
  },
  template: `
    <label>
      <input v-model="language" type="radio" value="Dutch" />
      Dutch
    </label>
    <label>
      <input v-model="language" type="radio" value="English" />
      English
    </label>
    <label>
      <input v-model="language" type="radio" value="Spanish" />
      Spanish
    </label>

    <div style="background: bisque">
      <component :is="greetingLanguageComponent"></component>
    </div>
  `
};
