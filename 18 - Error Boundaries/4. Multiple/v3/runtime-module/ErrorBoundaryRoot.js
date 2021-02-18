/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  errorCaptured(err, instance, info) {
    // Side effect:
    // Opportunity to send data to our servers...
    console.error('Log error to server: \n', err, instance, info);

    // Stop the error from propagating.
    return false;
  },
  template: '<slot />'
};
