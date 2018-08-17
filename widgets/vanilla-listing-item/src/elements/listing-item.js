class ListingItem extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    if (this.isThumb === '1') {
      this.url = this.url.replace('thumb', 'image')
    }
    this.price = this.price.replace(',00', '')

    this.initShadowDom()
  }

  render () {
    return `${this.template}
    ${this.style}`
  }

  get adId () {
    return this.getAttribute('ad-id')
  }

  get adParams () {
    return this.getAttribute('ad-params')
  }

  get category () {
    return this.getAttribute('category')
  }

  get categoryName () {
    return this.getAttribute('category')
  }

  get commune () {
    return this.getAttribute('commune')
  }

  get currency () {
    return this.getAttribute('currency')
  }

  get date () {
    return this.getAttribute('date')
  }

  get image () {
    return this.getAttribute('image')
  }

  get isPro () {
    return this.getAttribute('is-pro')
  }

  get price () {
    return this.getAttribute('price')
  }

  set price (price) {
    this.setAttribute('price', price)
  }

  get region () {
    return this.getAttribute('region')
  }

  get subCategory () {
    return this.getAttribute('sub-category')
  }

  get title () {
    return this.getAttribute('title')
  }

  get url () {
    return this.getAttribute('url')
  }

  set url (url) {
    this.setAttribute('url', url)
  }

  get label () {
    return this.getAttribute('label')
  }

  get location () {
    return this.getAttribute('location')
  }

  get isThumb () {
    return this.getAttribute('is-thumb')
  }

  get isFavorite () {
    return this.getAttribute('is-favorite')
  }

  initShadowDom () {
    let shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = this.render()
  }

  get template () {
    return `
      <link rel="stylesheet" type="text/css" href="https://static.yapo.cl/shared/fonts/fa-5.0.13/css/fontawesome-all.css">
      <div id="ad-${this.adId}" class="listingItem-box">
        <div class="listingItem-image __mainColumn">          
          <span class="listingItem-imageLabel">${this.label}</span>
          <img src="${this.url}" alt="${this.title}"/>
        </div>

        <div class="listingItem-info __mainColumn">
          <h2 class="listingItem-infoTitle __infoRow" data-uno=${this.title}>
            ${this.location ? `<i class="fal fa-map-marker-alt"></i>` : ``} 
            ${this.title ? `<span>${this.title}</span>` : ``}           
          </h2>
          <div class="listingItem-infoPrice __infoRow">${this.price}</div>          
          <ad-params class="" params='${this.adParams}'></ad-params>          
          <div class="listingItem-infoBottom __infoRow">
            <div class="listingItem-infoBottomDate">${this.date}</div>
            <div class="listingItem-infoBottomType">${this.isPro}</div>
          </div>
        </div>

        <div class="listingItem-infoLocation">
          <div class="listingItem-infoLocationRegion __locationRow">${this.region}</div>
          <div class="listingItem-infoLocationCommune __locationRow">${this.commune}</div>
          <div class="listingItem-infoLocationCategory __locationRow">${this.categoryName}</div>
        </div>

        <div class="listingItem-infoIcons __mainColumn">
          <div class="listingItem-infoLastTop">            
            ${this.isFavorite ? `<i class="fal fa-heart"></i>` : ``}
          </div>
          <div class="listingItem-infoLastBottom __hidden">
            <i class="fal fa-question-circle"></i>
          </div>
        </div>
      </div>
    `
  }

  get style () {
    return `
    <style>
        :host {
          border-bottom: 2px solid #F8F8F8;
          border-top: 2px solid #F8F8F8;
          border-radius: 5px;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        * {
          font-family: Helvetica, Arial, sans-serif;
        }

        .listingItem-box {
          background-color: var(--listing-item-background-color, #FFFFFF);
          color: #000000;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          height: 140px;
          width: 100%;
        }

        .listingItem-box .__mainColumn{
          display: flex;
          flex-direction: column;
        }
        
        .listingItem-box .__hidden{
          display: none;
        }

        .listingItem-image {
          min-width: 122px;
          max-width: 122px;
          position: relative;
        }

        .listingItem-image img {
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }

        .listingItem-imageLabel {
          background-color: #5f259f;
          border-radius: 5px;
          color: #FFFFFF;
          font-size: 10px;
          left: 5%;
          padding: 5px;
          position: absolute;
          top: 5%;
        }

        .listingItem-info {
          flex-grow: 1;
          justify-content: space-between;
          padding: 10px;
          padding-top: 19px;
          padding-right: 0;
          max-width: 85%;
        }

        .listingItem-infoTitle {
          font-size: 14px;
          font-weight: 100;
          height: 32px;
          line-height: normal;
          margin: 0;
          overflow: hidden;
        }

        .listingItem-infoPrice {
          font-size: 18px;
          font-weight: bold;
        }

        .listingItem-infoAdParams {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .listingItem-infoBottom {
          font-size: 10px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .listingItem-infoBottomDate {
          align-self: flex-end;
          color: grey;
          margin-right: 10px;
        }

        .listingItem-infoBottomType {
          align-self: flex-end;
          color: #4376b0;
          font-size: 9px;
          text-transform: uppercase;
          justify-content: center;
        }

        .listingItem-infoIcons {
          font-size: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px 3px;
          min-width: 20px;
          max-width: 20px;
        }

        .listingItem-infoLocation {
          flex-grow: 1;
          font-size: 13px;
          font-weight: 100;
          display: none;
          flex-direction: column;
          padding-left: 30px;
          justify-content: center;
          width: 35%;
        }

        .listingItem-infoLocation .__locationRow {
          margin-bottom: 10px;
        }

        .listingItem-infoLocation .__locationRow:last-child {
          margin-bottom: 0;
        }

        .listingItem-infoLastBottom {
          color: #4376b0;
        }

        @media (min-width: 700px) {
          .listingItem-info {
            min-width: 45%;
            max-width: 45%;
          }

          .listingItem-infoBottom {
            justify-content: flex-start;
          }
          
          .listingItem-infoLocation {
            display: flex;
          }
        }
      </style>    
    `
  }
}

customElements.define('listing-item', ListingItem)
