/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

export default {
  name: 'ContainerComponent',
  template: `<div style="background-color: lightgray; padding: 10px">
      The only item:
      <div style="background-color: white; padding: 10px">
        <slot>Default Slot Value</slot>
      </div>
    </div>`
};
