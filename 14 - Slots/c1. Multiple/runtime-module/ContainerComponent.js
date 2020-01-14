/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// @vue/component
export default {
  name: 'ContainerComponent',
  template: `<div style="background-color: lightgray; padding: 10px">
    The default item:
    <div style="background-color: white; padding: 10px">
      <slot></slot>
      <slot name="default"></slot>
    </div>
    The 1st item:
    <div style="background-color: white; padding: 10px">
      <slot name="first"></slot>
    </div>
    The 2nd item:
    <div style="background-color: white; padding: 10px">
      <slot name="second"></slot>
    </div>
  </div>`
};