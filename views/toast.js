const html = require("nanohtml");
const Links = require("../components/links");
const Toaster = require("../components/toaster");
const Toast = require("../components/toastContainer");

function view(state, emit) {
  const links = new Links();
  const toaster = new Toaster();
  const toast = new Toast();
  return html`<body>
    ${toast.render({ state, emit })}
    <div class="container">
      <div class="nav">${links.render({ state, emit })}</div>
      <div class="main">${toaster.render({ state, emit })}</div>
    </div>
  </body>`;
}

module.exports = exports = view;
