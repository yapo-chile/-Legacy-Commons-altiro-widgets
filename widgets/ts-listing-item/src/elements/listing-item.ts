import {html, LitElement, property} from '@polymer/lit-element';
import {TemplateResult} from 'lit-html/lit-html';

class ListingItem extends LitElement {

  @property({attribute: 'is-thumb'}) public isThumb: string;
  @property() public url: string = 'https://m.yapo.cl/img/m_prod_default.png';
  @property() public price: string;
  @property({attribute: 'ad-id'}) public adId: string;
  @property() public label: string;
  @property() public location: string;
  @property({attribute: 'price-lowered'}) public priceLowered: string;
  @property({attribute: 'ad-params'}) public adParams: string = '{}';
  @property() public date: string;
  @property({attribute: 'is-pro'}) public isPro: string;
  @property({attribute: 'is-favorite'}) public isFavorite: string;
  @property() public region: string;
  @property() public commune: string;
  @property() public category: string;
  @property({attribute: 'category-name'}) public categoryName: string;

  constructor() {
    super();
  }

  public connectedCallback(): void {
    if (this.isThumb === '1') {
      this.url = this.url.replace('thumb', 'image');
    }
    this.price = this.price.replace(',00', '');
    // this._lazyLoading();
  }

  public render(): TemplateResult {

    const imageUrl = this.url;
    return html`
    <style>
      .listingItem-box {
        background-color: var(--listing-item-background-color, #FFFFFF);
        border-bottom: 2px solid #F8F8F8;
        border-top: 2px solid #F8F8F8;
        border-radius: 5px;
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
              background-size: cover;
              background-position: center center;
            }
      
            .listingItem-image::after {
              background: -moz-linear-gradient(270deg, rgba(153,218,255,0) 0%, rgba(0,0,0,1) 100%);
              background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(153,218,255,0)), color-stop(100%, rgba(0,0,0,1)));
              background: -webkit-linear-gradient(270deg, rgba(153,218,255,0) 0%, rgba(0,0,0,1) 100%);
              background: -o-linear-gradient(270deg, rgba(153,218,255,0) 0%, rgba(0,0,0,1) 100%);
              background: -ms-linear-gradient(270deg, rgba(153,218,255,0) 0%, rgba(0,0,0,1) 100%);
              background: linear-gradient(180deg, rgba(153,218,255,0) 0%, rgba(0,0,0,1) 100%);
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#99DAFF', endColorstr='#000000',GradientType=0 );
              bottom: 0;
              left: 0;
              content: '';
              height: 70px;
              opacity: 0.1;
              position: absolute;
              width: 100%;
            }
      
            .listingItem-image img {
              height: 100%;
              object-fit: cover;
              object-position: %;
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
              font-weight: 500;
              height: 31px;
              line-height: 15px;
              margin: 0;
              overflow: hidden;
            }
      
            .listingItem-infoPrice {
              font-size: 18px;
              font-weight: bold;
            }
      
            .listingItem-infoPrice .fa-arrow-to-bottom {
              color: #52c300;
              margin-right: 5px;
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
              color: #666666;
              font-size: 10px;
              font-weight: normal;
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
      <link rel="stylesheet" type="text/css" href="https://static.yapo.cl/shared/fonts/fa-5.0.13/css/fontawesome-all.css">
      <section id="ad-${this.adId}" class="listingItem-box">
        <div class="listingItem-image __mainColumn" style="background-image: url('${this.url}');">
          ${this.label && html`<span class="listingItem-imageLabel">${this.label}</span>`}
          &nbsp;
        </div>
        <div class="listingItem-info __mainColumn">
          <h2 class="listingItem-infoTitle __infoRow" data-uno=${this.title}>
            ${this.location && html`<i class="fal fa-map-marker-alt"></i>`}
            ${this.title && html`<span>${this.title}</span>`}
          </h2>
          <div class="listingItem-infoPrice __infoRow">
          ${this.priceLowered === '1' ? html`<i class="fal fa-arrow-to-bottom"></i>` : ``}
            ${this.price}
          </div>
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
            ${this.isFavorite && html`<i class="fal fa-heart"></i>`}
          </div>
          <div class="listingItem-infoLastBottom __hidden">
            <i class="fal fa-question-circle"></i>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('listing-item', ListingItem);
