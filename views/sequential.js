const html = require("nanohtml");
const Links = require("../components/links");

const fs = require("fs");
const snippet = fs.readFileSync(__filename, "utf8");
const format = require("../format");

function view(state, emit) {
  const step = state.query.step ? parseInt(state.query.step) : 1;
  const links = new Links();
  return html`<body>
    <div class="container">
      <div class="nav">${links.render({ state, emit })}</div>
      <div class="main">
        <h2>Choo App Starter - Sequential Routing Demonstration</h2>
        <h4>Step number: ${step}</h4>
        ${step > 1 ? html`<a href="/sequential?step=${step - 1}">Prev</a>` : ""}
        <a href="/sequential?step=${step + 1}">Next</a>
        ${format(snippet)}
      </div>
    </div>
  </body>`;
}

module.exports = exports = view;
