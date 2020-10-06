// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(['require', 'core/origin', 'core/utils'], function(require, Origin, Utils) {
  // Read in the configuration values/constants
  Utils.fetch('/api/config', ({ message: error }, data) => {
    if(error) {
      return console.error(error);
    }
    Origin.constants = data;
    Origin.trigger('constants:loaded', data);
  });
});
