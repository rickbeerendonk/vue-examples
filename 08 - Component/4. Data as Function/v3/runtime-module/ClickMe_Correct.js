/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'ClickMe_Correct',
  data() {
    return {
      count: 0
    };
  },
  template:
    '<a @click.prevent="count++">This link has been clicked {{ count }} times.</a>'
};
