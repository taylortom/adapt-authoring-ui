const {Module} = require('adapt-authoring-core');
const path = require('path');

/**
* The main entry-point for the Adapt authoring tool web-app/front-end
*/
class WebApp extends Module {
  preload(app, resolve, reject) {
    app.getModule('server').createRouter('/').get('/', this.handleIndex);
    resolve();
  }

  handleIndex(req, res, next) {
    res.render(path.join(__dirname, '../views/index'));
  }
}

module.exports = WebApp;
