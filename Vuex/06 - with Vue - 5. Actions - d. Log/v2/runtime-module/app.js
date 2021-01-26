/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  mapActions,
  mapState
} from '../../../node_modules/vuex_3/dist/vuex.esm.browser.js';

import { CHANGE, INCREMENT } from './store.js';

export default {
  name: 'App',
  computed: mapState(['name', 'year']),
  methods: mapActions([CHANGE, INCREMENT]),
  template: `
    <div>
      <h1>Hello {{ name }}!</h1>
      <input :value='name' @input="e => change(e.target.value)" />

      <h1>{{ year }}</h1>
      <button @click="() => increment()">Increase</button>
      <button @click="() => increment(5)">Increase with 5</button>
    </div>
  `
};
