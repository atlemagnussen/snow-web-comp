import { html, render } from "lit-html";

class Comp extends HTMLElement {
    constructor() {
        super();

        //this.root = this.attachShadow({mode: "open"});
        this.template = html`
            <p>Test comp ${this.getAttributeDefault("val", "def")}</p>
        `;
    }
    connectedCallback() {
        console.log("connected")
        render(this.template, this);
    }
    static get observedAttributes() {
        return ['val'];
    }
    attributeChangedCallback(name, oldValue, newValue) {

    }
    get val() {
        return this.getAttribute("val");
    }
      
    set val(newValue) {
        this.setAttribute("val", newValue);
    }

    getAttributeDefault(name, def) {
        return this.hasAttribute(name) ? this.getAttribute(name) : def;
    }
}

customElements.define("comp-test", Comp);