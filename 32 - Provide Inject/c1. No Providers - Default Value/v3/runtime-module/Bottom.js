/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'Bottom',
  inject: {
    color: { default: 'blue' }
  },
  template: '<h1 v-bind:style="{color: color}">Bottom</h1>'
};
