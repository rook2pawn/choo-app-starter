const choo = require("choo");
const devtools = require("choo-devtools");
const { mainView, aboutView } = require("../views");
const css = require("sheetify");

css("./app.css");

module.exports = () => {
  const app = choo();
  app.use(devtools());
  app.use((state) => {
    state.logger = false;
  });
  app.route("/", mainView);
  app.route("/about", aboutView);
  app.use((state, emitter) => {});
  app.mount("body");
};
