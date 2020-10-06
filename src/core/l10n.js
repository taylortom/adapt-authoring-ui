// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(['require', 'jquery', 'polyglot', 'core/origin', 'core/utils'], function(require, $, Polyglot, Origin, Utils) {
  var polyglot;
  // set up global l10n object
  Origin.l10n = {
    t: function(string, data) {
      if(!polyglot || !polyglot.t) {
        return string;
      }
      return polyglot.t.apply(polyglot, arguments);
    },
    has: function() {
      if(!polyglot || !polyglot.has) {
        return false;
      }
      return polyglot.has.apply(polyglot, arguments);
    }
  };
  /**
  * Initialise from language file
  */
  var locale = localStorage.getItem('lang') || 'en';
  Utils.fetch('/api/lang/' + locale, ({ message: error }, data) => {
    if(error) {
      return  console.error(error);
    }
    polyglot = new Polyglot({
      locale: locale,
      phrases: data,
      warn: function(message) {
        if(Origin.debug) console.warn('l10n:', message);
      }
    });
    Origin.trigger('l10n:loaded');
  });
});
