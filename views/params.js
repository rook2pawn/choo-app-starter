const html = require("nanohtml");
const Links = require("../components/links");
const Params = require("../components/params");

function view(state, emit) {
  const links = new Links();
  const params = new Params();
  return html`<body>
    <div class="container">
      <div class="nav">${links.render({ state, emit })}</div>
      <div class="main">${params.render({ state, emit })}</div>
    </div>
  </body>`;
}

module.exports = exports = view;
