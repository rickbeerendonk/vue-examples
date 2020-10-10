import Greeting from './Greeting';

// Name
export default {
  title: 'Components/Greeting/01 - JS Basic',
  component: Greeting
};

// Story "Without Name"
export const WithoutName = () => ({
  components: { Greeting },
  template: '<Greeting />'
});

// Story "With Name"
export const WithName = () => ({
  components: { Greeting },
  template: '<Greeting name="Vue 😄" />'
});
