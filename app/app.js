const choo = require("choo");
const devtools = require("choo-devtools");
const { mainView, aboutView } = require("../views");
const css = require("sheetify");
const sequentialView = require("../views/sequential");
const notFoundView = require("../views/notFound");
const randomPage = require("../views/randomPage");
const params = require("../views/params");
const toast = require("../views/toast");

css("./app.css"); // app-wide css
css("../web/css/atom-one-dark.css"); // for code highlighting

module.exports = () => {
  const app = choo();
  app.use(devtools());
  app.use((state) => {
    state.logger = false;
  });
  app.use((state, emitter) => {
    emitter.on("toast", ({ message, level }) => {
      state.onToast({ message, level });
    });
    /*
    state.toasts = [];
    emitter.on("toast", ({ message, level }) => {
      state.toasts.push({ message, level });
      emitter.emit("render");
      setTimeout(() => {
        state.toasts.shift();
        emitter.emit("render");
      }, 2000);
    });
    */
  });
  app.route("/", mainView);
  app.route("/about", aboutView);
  app.route("/sequential", sequentialView);
  app.route("/randomPage", randomPage);
  app.route("/params/:animal/:name", params);
  app.route("/toast", toast);
  app.route("*", notFoundView);
  app.mount("body");
};
