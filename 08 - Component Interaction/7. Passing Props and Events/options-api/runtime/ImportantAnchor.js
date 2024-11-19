/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'ImportantAnchor',
  // Disable attribute inheritence: https://v3.vuejs.org/api/options-misc.html#inheritattrs
  // Vue 3 doesn't need v-on="$listeners" anymore: https://v3.vuejs.org/guide/migration/listeners-removed.html
  inheritAttrs: false,
  template: '<a v-bind="$attrs">!!! <slot></slot> !!!</a>'
};
