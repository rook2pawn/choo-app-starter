const Nanocomponent = require("nanocomponent");
const html = require("choo/html");
const css = require("sheetify");
const nanostate = require("nanostate");

/*
const fs = require("fs");
const snippet = fs.readFileSync(__filename, "utf8");
const format = require("../../format");
*/

css("./component.css");

class Component extends Nanocomponent {
  constructor() {
    super();
    this._loadedResolve;
    this.loaded = new Promise((resolve, reject) => {
      this._loadedResolve = resolve;
    });
  }

  createElement({ state, emit }) {
    return html`
      <div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/sequential">Sequential Demo</a></li>
          <li><a href="/randomPage">Random Page</a></li>
        </ul>
      </div>
    `;
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
