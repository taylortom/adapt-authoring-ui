// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(['require', 'backbone', 'core/origin'], function(require, Backbone, Origin) {
  var SessionModel = Backbone.Model.extend({
    url: "api/auth/check",
    defaults: {
      id: '',
      tenantId: '',
      email: '',
      isAuthenticated: false,
      permissions: [],
      otherLoginLinks: []
    },
    
    login: function (email, password, shouldPersist) {
      $.post('api/auth/local', { email, password })
        .done(jqXHR => {
          this.set({
            id: jqXHR.id,
            email: jqXHR.email,
            isAuthenticated: true
          });
          Origin.trigger('login:changed');
          Origin.trigger('schemas:loadData', Origin.router.navigateToHome);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          Origin.trigger('login:failed', (jqXHR.responseJSON && jqXHR.responseJSON.errorCode) || 1);
        });
    },

    logout: function () {
      $.post('api/logout', _.bind(function() {
        // revert to the defaults
        this.set(this.defaults);
        Origin.trigger('login:changed');
        Origin.router.navigateToLogin();
      }, this));
    },
  });

  return SessionModel;
});
