import { html, render, TemplateResult } from 'lit-html';
import { Ad } from './types';
import { SuggestedService } from './SuggestedService';

/* tslint:disable:max-line-length no-trailing-whitespace */

class SuggestedAdsCarousel extends HTMLElement {
    private suggestedService: SuggestedService;

    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.suggestedService = new SuggestedService(this.src);
    }

    public connectedCallback() {
    }

    static get observedAttributes(): Array<string> {
      return ['ad-id', 'ads', 'title'];
    }

    attributeChangedCallback(attr: string, oldValue: any, newValue: any) {
      if (attr === 'ad-id') {
        this.getSuggestedAds(newValue);
      } else {
        this.refresh();
      }
    }

    public render() : TemplateResult {
      return html`${this.template}
              ${this.cssStyle}
              `;
    }

    get adId() : string {
      return this.getAttribute('ad-id');
    }

    get src() : string {
      return this.getAttribute('src');
    }

    get title() : string {
      return this.getAttribute('title');
    }

    get currency() : string {
      return this.getAttribute('currency');
    }

    set ads(ads: Array<Ad>) {
      this.setAttribute('ads', JSON.stringify(ads));
    }

    get ads() : Array<Ad>{
      const strAds = this.getAttribute('ads');
      try {
        return JSON.parse(strAds);
      } catch {
        return [];
      }
      
    }

    public refresh() {
      render(this.render(), this.shadowRoot);
    }

    public getSuggestedAds(adId: string): void {
      this.suggestedService.getSuggestedAds(adId)
        .then((response) => {
          this.ads = response.ads;
        });
    }

    get template(): TemplateResult {
      if (this.ads && this.ads.length > 0) {
        return html`
          <div class="suggested-ads">
            <p class="suggested-ads__title">${this.title}</p>
            <div class="suggested-ads__carousel">
            ${this.ads ? this.ads.map((ad: Ad) => 
                html`
                <div class="suggested-ads__ad">
                  <suggested-ad currency="${this.currency}" ad="${JSON.stringify(ad)}"></suggested-ad>
                </div>`) : ''}
            </div>
          </div>
        `;
      };
      return html``;
    }

    get cssStyle(): TemplateResult {
      return html`
      <style lang="postcss">
        :host {
          background-color: var(--background-color, #FFFFFF);
        }
        * {
          font-family: var(--font-family, 'Helvetica', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
          font-size: 16px;
        }
        * ::-webkit-scrollbar {
          display: none;
        }
        .suggested-ads__carousel {
            color: #000000;
            display: inline-flex;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 1px;
            width: 100%;
            -webkit-overflow-scrolling: touch;
        }

        .suggested-ads__title {
          color: #111111;
          font-size: 16px;
          font-weight: normal;
          margin-bottom: 12px;
          margin-top: 0;
        }

        .suggested-ads__ad {
          min-width: 120px;
          max-width: 120px;
          margin-right: 8px;
        }

        @media (min-width: 400px) {
          .suggested-ads__ad {
            min-width: 140px;
            max-width: 140px;
          }
        }  
      </style>
    `;
    }
}

window.customElements.define('suggested-ads-carousel', SuggestedAdsCarousel);
