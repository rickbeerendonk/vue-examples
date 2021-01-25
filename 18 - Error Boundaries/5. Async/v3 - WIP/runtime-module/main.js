/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import DividerComponent from './DividerComponent.js';
import ErrorBoundary from './ErrorBoundary.js';

const app = Vue.createApp({
  components: { DividerComponent, ErrorBoundary },
  template: `
    <div>
      <h1>Error Boundaries</h1>
      <error-boundary>
        <divider-component />
      </error-boundary>
    </div>
  `
});
app.mount('#app');
