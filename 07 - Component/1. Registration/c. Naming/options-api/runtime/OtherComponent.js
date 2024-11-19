/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'OtherComponent',
  template: `
    <div style="background-color: lightgray">
      <h1>Other</h1>
      <ol>
        <li>PascalCase: <GreetingComponent></GreetingComponent></li>
        <li>kebab-case: <greeting-component></greeting-component></li>
      </ol>
    </div>
  `
};
