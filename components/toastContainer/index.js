const Nanocomponent = require("nanocomponent");
const html = require("choo/html");
const css = require("sheetify");
const nanostate = require("nanostate");

css("./component.css");

class Component extends Nanocomponent {
  constructor() {
    super();
    this._loadedResolve;
    this.loaded = new Promise((resolve, reject) => {
      this._loadedResolve = resolve;
    });
    this.toasts = [];
  }

  onToast({ message, level }) {
    this.toasts.push({ message, level });
    this.rerender();
    setTimeout(() => {
      this.toasts.shift();
      this.rerender();
    }, 5000);
  }
  createElement({ state, emit }) {
    state.onToast = this.onToast.bind(this);
    return html`<div class="toastContainer">
      ${this.toasts.map(({ message, level }, idx) => {
        return html`<div
          class="toast ${level.toLowerCase()}"
          id="toastId_${idx}"
        >
          ${message}
        </div>`;
      })}
    </div>`;
  }

  load(el) {
    this.el = el;
    this._loadedResolve();
  }

  update(state) {
    return false;
  }
}

module.exports = exports = Component;
