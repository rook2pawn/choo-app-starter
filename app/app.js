const choo = require("choo");
const devtools = require("choo-devtools");
const { mainView, aboutView } = require("../views");
const css = require("sheetify");
const sequentialView = require("../views/sequential");
const notFoundView = require("../views/notFound");
const randomPage = require("../views/randomPage");

css("./app.css");
css("../web/css/atom-one-dark.css");

module.exports = () => {
  const app = choo();
  app.use(devtools());
  app.use((state) => {
    state.logger = false;
  });
  app.route("/", mainView);
  app.route("/about", aboutView);
  app.route("/sequential", sequentialView);
  app.route("/randomPage", randomPage);
  app.route("*", notFoundView);
  app.use((state, emitter) => {});
  app.mount("body");
};
