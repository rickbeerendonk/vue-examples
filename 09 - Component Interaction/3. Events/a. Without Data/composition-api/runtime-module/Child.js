/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* eslint vue/require-prop-types: "off" */

export default {
  name: 'Child',
  emits: ['updated'],
  setup(props, context) {
    const buttonClicked = () => {
      context.emit('updated');
    };
    return { buttonClicked };
  },
  template: '<button @click="buttonClicked">Click</button>'
};
