const Nanocomponent = require("nanocomponent");
const html = require("choo/html");
const css = require("sheetify");
const nanostate = require("nanostate");
const format = require("../../format");

css("./component.css");

class Component extends Nanocomponent {
  constructor() {
    super();
    this._loadedResolve;
    this.loaded = new Promise((resolve, reject) => {
      this._loadedResolve = resolve;
    });
    this.name = "";
    this.animal = "";
    this.animals = ["cat", "dog", "monkey", "hamster", "horse"];

    this.names = [
      "cupid",
      "gabby",
      "rayRay",
      "garfield",
      "spotty",
      "littleGabby",
      "husbandCat",
    ];
  }

  createElement({ state, emit }) {
    const url = `/params/${this.animal || state.params.animal}/${
      this.name || state.params.name
    }`;
    return html`<div class="">
      <h2>Params Demo</h2>
      <div>
        Current URL Params are :
        <h3>${JSON.stringify(state.params)}</h3>
      </div>
      <div>
        <label for="animals">Choose a animal:</label>
        <select
          id="animals"
          onchange=${(e) => {
            const value = e.target.value;
            this.animal = value;
            this.rerender();
          }}
        >
          <option disabled selected value>-- select an option --</option>
          ${this.animals.map((name) => {
            return html`<option
                ${name === this.animal ? "selected" : ""}
                value="${name}"
              >
                ${name}
              </option>
              "`;
          })}
        </select>
      </div>
      <div>
        <label for="name">Choose a name:</label>
        <select
          id="name"
          onchange=${(e) => {
            const value = e.target.value;
            this.name = value;
            this.rerender();
          }}
        >
          <option disabled selected value>-- select an option --</option>
          ${this.names.map((name) => {
            return html`<option
                ${name === this.name ? "selected" : ""}
                value="${name}"
              >
                ${name}
              </option>
              "`;
          })}
        </select>
      </div>
      ${this.animal && this.name
        ? html`<h2>Your URL:</h2>
            <a href="${url}">${url}</a>`
        : ""}

      <div>${format(`app.route("/params/:animal/:name", params);\n`)}</div>
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
