/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

export default {
  name: 'Bottom',
  inject: ['color'],
  template: '<h1 v-bind:style="{color: color.value}">Bottom</h1>'
};
