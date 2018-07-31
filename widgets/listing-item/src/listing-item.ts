import { Seed, Property, html, TemplateResult } from '@nutmeg/seed';
import { AdParams } from './ad-params';
import { IAdParams } from './IAdParams'

export class ListingItem extends Seed {
  @Property() public adId: number = 0;
  @Property() public adParams: string = '';
  @Property() public category: string = '';
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

  private adParamsComponent: AdParams = new AdParams(this.adParams);

  constructor() {
    super();
  }

  /** The component instance has been inserted into the DOM. */
  public connectedCallback() {
    this.adParamsComponent = new AdParams(this.adParams);
    super.connectedCallback();
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
          border-bottom: 2px solid #CCC;
          border-top: 2px solid #CCC;
          border-radius: 5px;
          margin: 0;
          padding: 0;
          width: 100%;
        }
        :host:first-child {
          border-top: 0px;
        }

        :host:last-child {
          border-bottom: 0px;
        }

        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
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
          color: grey;
        }

        .listingItem-infoBottomType {
          color: #4376b0;
          font-size: 9px;
          text-transform: uppercase;
        }

        .listingItem-infoIcons {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px 5px;
        }

        .listingItem-infoLastBottom {
          color: #4376b0;
        }
      </style>
      ${this.adParamsComponent.styles()}
    `;
  }

  /** HTML Template for the component. */
  public get template(): TemplateResult {
    return html`
      <link rel="stylesheet" type="text/css" href="https://static.yapo.cl/shared/fonts/fa-5.0.13/css/fontawesome-all.css">
      
      <div id="ad-${this.adId}" class="listingItem-box">
        <div class="listingItem-image __mainColumn">
          <span class="listingItem-imageLabel">${this.label}</span>
          <img src="${this.url}" alt="${this.title}"/>
        </div>

        <div class="listingItem-info __mainColumn">
          <h2 class="listingItem-infoTitle __infoRow">
            <i class="fal fa-map-marker-alt"></i>
            <span> ${this.title} </span>
          </h2>
          <div class="listingItem-infoPrice __infoRow">${this.currency} ${this.price}</div>
          <ul class="listingItem-infoAdParams __infoRow">
            ${this.adParamsComponent.template()}
          </ul>
          <div class="listingItem-infoBottom __infoRow">
            <div class="listingItem-infoBottomDate">${this.date}</div>
            <div class="listingItem-infoBottomType">${this.isPro}</div>
          </div>
        </div>

        <div class="listingItem-infoLocation __mainColumn __hidden">
          <div class="listingItem-infoLocationRegion __infoRow">${this.region}</div>
          <div class="listingItem-infoLocationCommune __infoRow">${this.commune}</div>
          <div class="listingItem-infoLocationCategory __infoRow">${this.category}</div>
        </div>

        <div class="listingItem-infoIcons __mainColumn">
          <div class="listingItem-infoLastTop">
            <i class="fal fa-heart"></i>
          </div>
          <div class="listingItem-infoLastBottom">
            <i class="fal fa-question-circle"></i>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('listing-item', ListingItem);
