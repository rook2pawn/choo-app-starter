const html = require("nanohtml");
const Links = require("../components/links");

function view(state, emit) {
  const links = new Links();
  return html`<body>
    <div class="container">
      <div class="nav">${links.render({ state, emit })}</div>
      <div class="main">
        <h4>Choo App Starter - Home</h4>
      </div>
    </div>
  </body>`;
}
module.exports = exports = view;
