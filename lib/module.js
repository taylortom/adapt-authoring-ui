const { Module } = require('adapt-authoring-core');
const path = require('path');
/**
* The main entry-point for the Adapt authoring tool web-app/front-end
*/
class WebApp extends Module {
  /**
  * Initialises the router
  * @param {Module} app App instance
  * @param {Function} resolve Function to call on fulfilment
  * @param {Function} reject Function to call on rejection
  */
  preload(app, resolve, reject) {
    app.getModule('server').createRouter('/').get('/', this.handleIndex);
    resolve();
  }
  /**
  * Renders the index page
  * @param {ClientRequest} req The client request object
  * @param {ServerResponse} res The server response object
  * @param {function} next The next middleware function in the stack
  */
  handleIndex(req, res, next) {
    res.render(path.join(__dirname, '../views/index'));
  }
}

module.exports = WebApp;
