const { AbstractModule } = require('adapt-authoring-core');
const path = require('path');
/**
 * The main entry-point for the Adapt authoring tool web-app/front-end
 * @extends {AbstractModule}
 */
class UIModule extends AbstractModule {
  constructor(...args) {
    super(...args);
    this.init()
      .then(() => this.setReady())
      .catch(e => this.setFailed(e));
  }
  /**
   * Initialises the module
   */
  async init() {
    const server = await this.app.waitForModule('server');
    server.root
      .addMiddleware(server.static(path.join(__dirname, '..', 'public')))
      .addRoute({ route: '/', handlers: { get: this.serveIndex } });

    this.setReady();
  }
  serveIndex(req, res, next) {
    res.render(path.join(__dirname, '../views/index'));
  }
}

module.exports = UIModule;
