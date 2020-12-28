import "./comp.js";

import { html, render } from "lit-html";

class App extends HTMLElement {
    constructor() {
        super();

        //this.root = this.attachShadow({mode: "open"});
        this.template = html`
            <style>
                :host { display: block }
            </style>
            <comp-test val="5"></comp-test>
        `;
    }
    connectedCallback() {
        console.log("connected")
        render(this.template, this);
    }
}

customElements.define("my-app", App);