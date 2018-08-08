import { Seed, Property, html, TemplateResult } from '@nutmeg/seed';
import { SuggestedAd } from './suggested-ad';
import { SuggestedService } from './SuggestedService';
import { Ad } from './Ad';

export class SuggestedAdsCarousel extends Seed {
  @Property() public adId: string = '';
  public ads: Array<Ad> = [];

  constructor() {
    super();
  }

  /** The component instance has been inserted into the DOM. */
  public connectedCallback() {
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
    if (name === 'ad-id') {
      this.getSuggestedAds(newValue);
    }
  }

  /** Styling for the component. */
  public get styles(): TemplateResult {
    return html`
      <style>
        :host {
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: var(--background-color, #FFFFFF);
          padding: 15px 3px 15px 3px;
        }

        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }

        .suggested-ads-carousel {
          color: #000000;
          padding: 1px;
          display: inline-flex;
          width: 100%;
          max-width: 800px;
          overflow-x: auto;
          overflow-y: hidden;
          white-space: nowrap;
        }

        .suggested-ads-carousel--loading {
          
        }

        .suggested-ads-carousel__ad {
          min-width: 100px;
          max-width: 100px;
          
          padding: 2px;
          margin-right: 10px;
        }
        /* SUGGESTED AD SCOPE */
        .suggested-ad__image {
          width: 100%;
          height: 100px;
          background: black;
        }

        .suggested-ad__image img {
          object-fit: cover;
          height: 100px;
          width: 100%;
        }
        .suggested-ad__title {
          overflow: hidden;
          white-space: nowrap;
          font-weight: bold;
          text-overflow: ellipsis;
          margin-top: 6px;
          width: 100%;
        }
        .suggested-ad__price {
          width: 100%;
          margin-top: 3px;
        }
      </style>
    `;
  }

  /** HTML Template for the component. */
  public get template(): TemplateResult {
    const suggestedAdTemplate = new SuggestedAd();
    return html`
      <div class="suggested-ads-carousel suggested-ads-carousel--loading">
        ${this.ads ? this.ads.map((ad: Ad) => 
            html`
            <div class="suggested-ads-carousel__ad">
              ${suggestedAdTemplate.render(ad)}
            </div>`) : ''}
      </div>
    `;
  }

  public getSuggestedAds(adId: string): void {
    const suggestedService = new SuggestedService();
    suggestedService.getSuggestedAds(adId)
      .then((response) => {
        this.ads = response;
        this.render();
      });
  }
}

window.customElements.define('suggested-ads-carousel', SuggestedAdsCarousel);
