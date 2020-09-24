import { h } from '../../../../node_modules/vue-next/dist/vue.esm-browser.js';

export function lazy(importFunc) {
  return {
    async setup() {
      return {
        component: (await importFunc()).default
      };
    },
    render() {
      return h(this.component);
    }
  };
}
