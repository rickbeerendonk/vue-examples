/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'ContainerComponent',
  data() {
    return {
      source: 'Container',
      other: 'Other'
    };
  },
  template: `
    <div style="background-color: lightgray; padding: 10px">
      Normal:
      <div style="background-color: white; padding: 10px">
        <slot name="first" />
      </div>

      Scoped:
      <div style="background-color: white; padding: 10px">
        <slot name="second" :source="source" :other="other" />
      </div>
    </div>
  `
};
