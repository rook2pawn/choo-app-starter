const Nanocomponent = require("nanocomponent");
const html = require("choo/html");
const css = require("sheetify");
const nanostate = require("nanostate");
const fs = require("fs");
const snippet = fs.readFileSync(__filename, "utf8");
const format = require("../../format");

css("./component.css");

class Component extends Nanocomponent {
  constructor() {
    super();
    this._loadedResolve;
    this.loaded = new Promise((resolve, reject) => {
      this._loadedResolve = resolve;
    });
  }
  generateUrl() {
    const url = new Array(8)
      .fill(0)
      .map(() => String.fromCharCode(~~(Math.random() * 26) + 97))
      .join("");
    return url;
  }

  createElement({ state, emit }) {
    const url = this.generateUrl();
    return html`<div>
      <div class="">
        <h2>Random url generator</h2>
        <a href="/${url}">/${url}</a>
        <input
          type="button"
          value="Generate new link"
          onclick=${() => {
            this.rerender();
          }}
        />
      </div>
      ${format(snippet)}
    </div> `;
  }

  load(el) {
    this.el = el;
    this._loadedResolve();
  }

  update() {
    return false;
  }
}

module.exports = exports = Component;
