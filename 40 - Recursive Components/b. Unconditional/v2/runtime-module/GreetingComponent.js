/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  // name required for recursive components
  name: 'GreetingComponent',
  template: `
    <div>
      <h1>Hello World!</h1>
      <greeting-component />
    </div>
  `
};
