// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require) {
  return {
    fetch: (endpoint, cb) => {
      $.get(endpoint)
        .done(data => cb(data))
        .fail(jqXhr => cb(jqXhr.responseJSON));
    }
  };
});
