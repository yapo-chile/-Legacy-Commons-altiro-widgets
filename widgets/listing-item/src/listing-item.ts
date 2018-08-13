import { Seed, Property, html, TemplateResult } from '@nutmeg/seed';
import { AdParams } from './ad-params';

export class ListingItem extends Seed {
  @Property() public adId: number = 0;
  @Property() public adParams: string = '';
  @Property() public category: string = '';
  @Property() public categoryName: string = '';
  @Property() public commune: string = '';
  @Property() public currency: string = '';
  @Property() public date: string = '';
  @Property() public image: string = '';
  @Property() public isPro: string = '';
  @Property() public price: string = '';
  @Property() public region: string = '';
  @Property() public subCategory: string = '';
  @Property() public title: string = '';
  @Property() public url: string = '';
  @Property() public label: string = '';
  @Property() public location: string = '';
  @Property() public isThumb: string = '';
  @Property() public isFavorite: string = '';

  constructor() {
    super();
  }

  /** The component instance has been inserted into the DOM. */
  public connectedCallback() {
    super.connectedCallback();

    if (this.isThumb == '1') {
      this.url = this.url.replace('thumb', 'image');
    }

    this.price = this.price.replace(',00', '');
  }

  /** The component instance has been removed from the DOM. */
  public disconnectedCallback() {
    super.disconnectedCallback();
  }

  /** Watch for changes to these attributes. */
  public static get observedAttributes(): string[] {
    return super.observedAttributes;
  }

  /** Rerender when the observed attributes change. */
  public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  /** Styling for the component. */
  public get styles(): TemplateResult {
    return html`
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
          height: 34px;
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
      ${AdParams.styles()}
    `;
  }

  private renderElement(param:string, typeEl:string, classN:string, text?: string): TemplateResult {
    let el = document.createElement('' + typeEl + '');

    if (param && param != '') {
      el.className = '' + classN + '';
      if (text) {
        el.innerHTML = '' + text + '';
      }
    }

    return html`${el}`;
  }

  private renderTitle(): TemplateResult {
    let span = document.createElement('SPAN');

    span.innerHTML = this.title;

    return html`${span}`;
  }

  /** HTML Template for the component. */
  public get template(): TemplateResult {
    return html`
      <link rel="stylesheet" type="text/css" href="https://static.yapo.cl/shared/fonts/fa-5.0.13/css/fontawesome-all.css">
      <div id="ad-${this.adId}" class="listingItem-box">
        <div class="listingItem-image __mainColumn">
          ${this.renderElement(this.label, 'SPAN', 'listingItem-imageLabel', this.label)}
          
          <img src="${this.url}" alt="${this.title}"/>
        </div>

        <div class="listingItem-info __mainColumn">
          <h2 class="listingItem-infoTitle __infoRow" data-uno=${this.title}>
            ${this.renderElement(this.location, 'I', 'fal fa-map-marker-alt')}
            ${this.renderTitle()}
          </h2>
          <div class="listingItem-infoPrice __infoRow">${this.price}</div>
          <ul class="listingItem-infoAdParams __infoRow">
            <!-- @ToDo: refactor for dinamycs params if new parameters are added -->
            ${AdParams.template(this.adParams)}
          </ul>
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
            ${this.renderElement(this.isFavorite, 'I', 'fal fal fa-heart')}
          </div>
          <div class="listingItem-infoLastBottom __hidden">
            <i class="fal fa-question-circle"></i>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('listing-item', ListingItem);
