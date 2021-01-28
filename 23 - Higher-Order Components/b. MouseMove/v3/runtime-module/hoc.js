/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { h } from '../../../../node_modules/vue_3/dist/vue.esm-browser.js';

export default function (WrappedComponent) {
  return {
    name: 'withMouseMove',
    data() {
      return {
        mousePosition: {
          x: undefined,
          y: undefined
        }
      };
    },
    methods: {
      handleMouseMove(e) {
        this.mousePosition = { x: e.pageX, y: e.pageY };
      }
    },
    mounted() {
      document.addEventListener('mousemove', this.handleMouseMove);
    },
    // destroyed (Vue 2):
    unmounted() {
      document.removeEventListener('mousemove', this.handleMouseMove);
    },
    render() {
      return h(WrappedComponent, {
        ...this.$props,
        name:
          '(x:' + this.mousePosition.x + ', y: ' + this.mousePosition.y + ')'
      });
    }
  };
}
