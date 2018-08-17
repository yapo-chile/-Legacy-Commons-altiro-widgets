class AdParams extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.initShadowDom()
  }

  render () {
    return `
    ${this.template}
    ${this.style}`
  }

  initShadowDom () {
    let shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = this.render()
  }

  get adParams () {
    const adParams = this.getAttribute('params')
    let parsedParams
    try {
      parsedParams = JSON.parse(adParams)
      return parsedParams
    } catch (e) {
      console.error('Invalid Ad Parameters', e)
      return {}
    }
  }

  renderParam (type, data) {
    let icon = ''
    let text = data.replace(/m2/g, 'm' + '<sup>2</sup>')

    switch (type) {
      case 'rooms': {
        icon = 'fal fa-bed'
        break
      }
      case 'bathrooms': {
        icon = 'fal fa-bath'
        break
      }

      case 'capacity': {
        icon = 'fal fa-users'
        break
      }

      case 'surface': {
        icon = 'fal fa-expand'
        break
      }
    }

    return `
            <li class="listingItem-infoAdParam">
                <i class="${icon}"></i>
                <span>${text}</span>
            </li>
        `
  }

  get template () {
    const params = this.adParams
    let template = ``
    if (params) {
      Object.keys(params).forEach(element => {
        if (params[element] !== '') {
          template += this.renderParam(element, params[element])
        }
      })
    }
    return `<ul class="listingItem-infoAdParams">${template}</ul>`
  }

  get style () {
    return `
            <style>
                .listingItem-infoAdParams {
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-start;
                  list-style-type: none;
                  margin: 0;
                  padding: 0;
                }
                .listingItem-infoAdParam {
                    font-size: 10px;
                    font-weight: 500; 
                    display: flex;                    
                    margin-right: 5px;
                }

                .listingItem-infoAdParam i {
                    font-size: 13px;
                    align-self: center;
                }

                .listingItem-infoAdParam span {
                    align-self: center;
                    margin-left: 2px;
                    display: inline-block;
                }

                .listingItem-infoAdParam span.__surface {
                    margin-top: -2px;
                }

                .listingItem-infoAdParam:last-child {
                    margin-right: 0;
                }
            </style>
            <link rel="stylesheet" type="text/css" href="https://static.yapo.cl/shared/fonts/fa-5.0.13/css/fontawesome-all.css">
        `
  }
}

customElements.define('ad-params', AdParams)
