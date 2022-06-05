const html = require("nanohtml");
const Links = require("../components/links");
const RandomPage = require("../components/randomPage");

function view(state, emit) {
  const links = new Links();
  const randomPage = new RandomPage();
  return html`<body>
    <div class="container">
      <div class="nav">${links.render({ state, emit })}</div>
      <div class="main">${randomPage.render({ state, emit })}</div>
    </div>
  </body>`;
}

module.exports = exports = view;
