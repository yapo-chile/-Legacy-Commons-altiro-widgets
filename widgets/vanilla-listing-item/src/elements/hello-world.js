class HelloWorld extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.render()
  }

  render () {
    let shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = this.template
  }

  get template () {
    return `<div>
    <h1>ESTO ES UN COMPONENTE SABOR VAINILLA (AHORA CON MAS SHADOW)</h1>
    <bye-world></bye-world>
</div>`
  }

}

customElements.define('hello-world', HelloWorld)
