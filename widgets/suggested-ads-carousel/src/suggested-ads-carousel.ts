import { Seed, Property, html, TemplateResult } from '@nutmeg/seed';
import { SuggestedAd } from './suggested-ad';
import { SuggestedService } from './SuggestedService';
import { Ad } from './types';

export class SuggestedAdsCarousel extends Seed {
  @Property() public adId: string = '';
  @Property() public src: string = '';
  @Property() public title: string = '';
  @Property() public currency: string = 'es-CL';

  @Property() public ads: Array<Ad> = [];
  private suggestedService: SuggestedService;

  constructor() {
    super();
    if (this.src === '') {
      throw new Error('Cannot created SuggestedAdsCarousel instance: The api source cannot be empty');
    }
    if (typeof this.src === 'undefined' || this.src === null) {
      throw new Error('Cannot created SuggestedAdsCarousel instance: The api source must be defined');
    }
    this.suggestedService = new SuggestedService(this.src);
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
    if (name === 'ad-id' || name === 'src') {
      this.getSuggestedAds(newValue);
    }
    console.log('changed', name);
  }

  public getSuggestedAds(adId: string): void {
    this.suggestedService.getSuggestedAds(adId)
      .then((response) => {
        this.ads = response.ads;
      });
  }

  /** Styling for the component. */
  public get styles(): TemplateResult {
    return html`
      <style lang="postcss">
        :host {
          background-color: var(--background-color, #FFFFFF);
        }

        * {
          font-family: var(--font-family, 'Helvetica', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
          font-size: 16px;
        }
        .suggested-ads {
          padding: 3px;
        }

        * ::-webkit-scrollbar {
          display: none;
        }

        .suggested-ads__carousel {
            color: #000000;
            display: inline-flex;
            max-width: 800px;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 1px;
            width: 100%;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
        }

        .suggested-ads__title {
          font-size: 17px;
          font-weight: bold;
          margin: 5px 0;
        }

        .suggested-ads__ad {
          min-width: 100px;
          max-width: 100px;
          margin-right: 5px;
        }
        /* AD SCOPE */
        .suggested-ad {
          cursor: pointer;
        }

        .suggested-ad__image {
          width: 100%;
          height: 100px;
        }

        .suggested-ad__image img {
          object-fit: cover;
          border-radius: 5px;
          height: 100px;
          width: 100%;
        }

        .suggested-ad__title {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-top: 0px;
          width: 100%;
        }

        .suggested-ad__title span {
          font-size: 12px;
          color: #666666;
        }
        .suggested-ad__price {
          width: 100%;
          margin-top: 3px;
        }

        .suggested-ad__price span {
          font-size: 13px;
          font-weight: bold;
        }
      </style>
    `;
  }

  /** HTML Template for the component. */
  public get template(): TemplateResult {
    const suggestedAdTemplate = new SuggestedAd(this.currency);
    if (this.ads.length > 0) {
      return html`
        <div class="suggested-ads">
          <p class="suggested-ads__title">${this.title}</p>
          <div class="suggested-ads__carousel">
          ${this.ads ? this.ads.map((ad: Ad) => 
              html`
              <div class="suggested-ads__ad">
                ${suggestedAdTemplate.render(ad)}
              </div>`) : ''}
          </div>
        </div>
      `;
    };
    return html``;
  }
}

window.customElements.define('suggested-ads-carousel', SuggestedAdsCarousel);
