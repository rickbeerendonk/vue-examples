/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { defineAsyncComponent } from '../../../../node_modules/vue/dist/vue.esm-browser.js';

import ErrorComponent from './components/Error.mjs';
import LoadingComponent from './components/Loading.mjs';

function createAsyncComponent(module) {
  return defineAsyncComponent({
    // The factory function
    loader: () => import(module),
    // Component to show while loading
    loadingComponent: LoadingComponent,
    // Component to show when load fails
    errorComponent: ErrorComponent,
    // Delay before showing loading component in ms
    // Default = 200ms, so we don't see lots of spinners on fast websites.
    delay: 100,
    // Timeout to show error in ms (default: Infinity).
    timeout: 2000
  });
}

export default {
  name: 'App',
  components: {
    GreetingDutch: createAsyncComponent('./GreetingDutch.mjs'),
    GreetingEnglish: createAsyncComponent('./GreetingEnglish.mjs'),
    GreetingSpanish: createAsyncComponent('./GreetingSpanish.mjs'),
    GreetingUnknown: createAsyncComponent('./does-not-exists')
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
    <div style="color: lightgray">
      <em>Show this example with a Network Latency.</em>
    </div>

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
    <label>
      <input v-model="language" type="radio" value="unknown" />
      Unknown
    </label>

    <div style="background: bisque">
      <component :is="greetingLanguage"></component>
    </div>
  `
};
