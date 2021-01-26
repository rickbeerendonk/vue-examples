/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../../node_modules/vue_2/dist/vue.esm.browser.js';
import Vuex from '../../../../../../node_modules/vuex_3/dist/vuex.esm.browser.js';

Vue.use(Vuex);

import moduleName from '../../name/module/index.js';
import moduleValue from '../../value/module/index.js';

export default new Vuex.Store({
  modules: {
    name: moduleName,
    value: moduleValue
  }
});
