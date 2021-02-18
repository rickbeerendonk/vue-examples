/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue_3/dist/vue.esm-browser.js';

import DividerComponent from './DividerComponent.js';
import ErrorBoundaryArea from './ErrorBoundaryArea.js';
import ErrorBoundaryRoot from './ErrorBoundaryRoot.js';

const app = Vue.createApp({
  components: { DividerComponent, ErrorBoundaryArea, ErrorBoundaryRoot },
  template: `
    <ErrorBoundaryRoot>
      <p style="color: gray">See console for side-effect</p>
      <h1>Error Boundaries</h1>
      <ErrorBoundaryArea>
        <DividerComponent />
      </ErrorBoundaryArea>
    </ErrorBoundaryRoot>
  `
});
app.mount('#app');
