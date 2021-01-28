/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

export default {
  name: 'Switch',
  inject: ['switchColor'],
  template: '<button @click="switchColor" type="button">Switch color</button>'
};
