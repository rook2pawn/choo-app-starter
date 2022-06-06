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
    this.level = "INFO";
    this.message = "";
    this.levels = ["INFO", "WARN", "ERROR"];
    this.messages = {};
    this.messages.INFO = [
      "You have a new message.",
      "You were awarded 1 badge.",
    ];
    this.messages.WARN = [
      "The system will be shutting down in 15 minutes.",
      "Please make a backup copy or risk losing it!",
    ];
    this.messages.ERROR = [
      "Error: Network unreachable.",
      "Credentials are invalid. Try again",
    ];
  }

  createElement({ state, emit }) {
    return html`<div class="">
      <h2>System toasts</h2>
      <div>
        <label for="level">Choose a level:</label>
        <select
          id="level"
          onchange=${(e) => {
            const value = e.target.value;
            this.level = value;
            this.message = "";
            this.rerender();
          }}
        >
          <option disabled selected value>-- select an option --</option>
          ${this.levels.map(
            (level) =>
              html`<option
                ${this.level === level ? "selected" : ""}
                value="${level}"
              >
                ${level}
              </option>`
          )}
        </select>
        <h3>${this.level} Message choice:</h3>
        ${this.messages[this.level].map((message) => {
          return html`
            <input
              type="radio"
              name="message"
              value="${message}"
              ${message == this.message ? "checked" : ""}
              onchange=${() => {
                this.message = message;
                this.rerender();
              }}
            />
            <label>${message}</label>
          `;
        })}

        <div>
          <h3>Deliver the notication</h3>
          <input
            type="button"
            ${this.message === "" ? "disabled" : ""}
            value="Deliver the notification"
            onclick=${() => {
              emit("toast", { level: this.level, message: this.message });
            }}
          />
        </div>
      </div>
    </div>`;
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
