/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'Child',
  props: ['name'],
  emits: ['change'],
  setup(props, context) {
    const changed = e => {
      context.emit('change', e.target.value);
    };

    return { changed };
  },
  template: '<input :value="name" @keyup="changed" />'
};
