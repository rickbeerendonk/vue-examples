/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'Bottom',
  inject: ['color'],
  // Injected values that are ref's will be auto-unwrapped in
  // the future: .value isn't no longer needed then.
  template: '<h1 :style="{color: color.value}">Bottom</h1>'
};
