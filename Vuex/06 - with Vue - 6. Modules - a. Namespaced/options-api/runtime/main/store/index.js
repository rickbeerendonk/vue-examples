/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vuex from 'vuex';

import moduleName from '../../name/module/index.js';
import moduleValue from '../../value/module/index.js';

export default new Vuex.Store({
  modules: {
    name: moduleName,
    value: moduleValue
  }
});
