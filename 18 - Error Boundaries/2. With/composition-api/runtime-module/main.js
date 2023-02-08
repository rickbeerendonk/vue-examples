/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue/dist/vue.esm-browser.js';

import DividerComponent from './DividerComponent.js';
import ErrorBoundary from './ErrorBoundary.js';

const app = Vue.createApp({
  components: { DividerComponent, ErrorBoundary },
  template: `
    <h1>Error Boundaries</h1>
    <ErrorBoundary>
      <DividerComponent />
    </ErrorBoundary>
  `
});
app.mount('#app');
