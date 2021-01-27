/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { h } from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

export default function (WrappedComponent) {
  return {
    name: 'withExtras',
    props: ['extraColor', ...WrappedComponent.props],
    render() {
      const { extraColor, ...passThroughProps } = this.$props;
      return h(
        'div',
        {
          style: `color: ${extraColor}`
        },
        [h(WrappedComponent, { ...passThroughProps })]
      );
    }
  };
}
