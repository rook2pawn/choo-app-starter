const html = require("nanohtml");
const Links = require("../components/links");

function mainView(state, emit) {
  const links = new Links();
  return html`<body>
    <div>
      <h4>Choo App Starter - Home</h4>
      ${links.render({ state, emit })}
    </div>
  </body>`;
}
module.exports = exports = mainView;
