/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'Bottom',
  inject: ['color'],
  template: '<h1 :style="{color: color.value}">Bottom</h1>'
};
