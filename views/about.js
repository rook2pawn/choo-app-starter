const html = require("nanohtml");
const Links = require("../components/links");

function aboutView(state, emit) {
  const links = new Links();
  return html`<body>
    <div>
      <h4>Choo App Starter - About</h4>
      <p>This is the about page</p>
      ${links.render({ state, emit })}
    </div>
  </body>`;
}

module.exports = exports = aboutView;
