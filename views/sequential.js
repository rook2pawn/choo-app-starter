const html = require("nanohtml");
const Links = require("../components/links");

function view(state, emit) {
  console.log(state);
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
      </div>
    </div>
  </body>`;
}

module.exports = exports = view;
