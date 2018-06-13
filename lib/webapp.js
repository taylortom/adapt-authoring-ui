const {Module} = require('adapt-authoring-core');
const path = require('path');

/**
* The main entry-point for the Adapt authoring tool web-app/front-end
*/
class WebApp extends Module {
  preload(app, resolve, reject) {
    if(!app.server) {
      console.warn(`${this.name}: Cannot initialise, server isn't running`);
      resolve();
    }
    this.initialiseRenderer(app.server);
    this.initialiseRouter(app.server);

    resolve();
  }

  initialiseRenderer(server) {
    var express = server.expressApp;
    express.set('views', path.resolve('../views'));
    express.set('view engine', 'hbs');
  }

  initialiseRouter(server) {
    /**
    * Instance of the root (/) Express router
    * @type {Express~Router}
    */
    this.router = server.createRouter('/');
    this.router.get('/', this.handleHomeRoute);
  }

  handleHomeRoute(req, res, next) {
    res.render('index', {});
    next();
  }
}

module.exports = WebApp;
