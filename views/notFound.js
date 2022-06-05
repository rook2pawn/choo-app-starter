const html = require("nanohtml");
const Links = require("../components/links");

function view(state, emit) {
  console.log("state:", state);
  const links = new Links();
  return html`<body>
    <div class="container">
      <div class="nav">${links.render({ state, emit })}</div>
      <div class="main">
        <h2>Not Found!</h2>
        <p>Sorry, but your request to ${state.href} is not found</p>
      </div>
    </div>
  </body>`;
}

module.exports = exports = view;
