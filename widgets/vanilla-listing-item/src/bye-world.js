class ByeWorld extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `<h3>Un Sucio componente hijo</h3>`;
  }
}

customElements.define('bye-world', ByeWorld);
