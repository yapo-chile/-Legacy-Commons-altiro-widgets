import { html, TemplateResult, render } from 'lit-html';
import { Ad } from './types';

export class SuggestedAd extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({mode: 'open'});
  }

  get currency() {
    const currency = this.getAttribute('currency');
    return (typeof currency !== 'undefined' && currency !== 'undefined') ? currency: 'es-CL';
  }

  get ad() {
    return JSON.parse(this.getAttribute('ad'));
  }

  public redirect(link?: string) {
    if (typeof link !== 'undefined') {
      window.location.assign(link);
    }
  }
  private respondToVisibility(element: HTMLElement, callback: Function): void {
    var options = {
      root: document.documentElement
    }
  
    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        callback(entry.intersectionRatio > 0);
      });
    }, options);
  
    observer.observe(element);
  }

  private formatPrice(number?: number, currency?: string) : string {
    /*
     * if is float set two decimals
     */
    if (typeof number === 'undefined' || number === null) {
      return '';
    }
    return currency + number.toLocaleString(this.currency);
  }

  static get observedAttributes(): Array<string> {
    return ['ad', 'currency'];
  }

  attributeChangedCallback(attr: string, oldValue: any, newValue: any) {
    this.refresh();
  }

  get template(): TemplateResult {
    if (this.ad) {
      return html`
        <div class="suggested-ad" on-ready="${console.log('carousel inject')}" on-click="${() => this.redirect(this.ad.url)}">
          <div class="suggested-ad__image"><img src="${(this.ad.images) ? this.ad.images.full : ''}" /></div>
          <div class="suggested-ad__price">
            <span>${this.formatPrice(this.ad.price, this.ad.currency)}</span>
          </div>
          <div class="suggested-ad__title" title="${this.ad.title}">
            <span>${this.ad.title}</span>
          </div>
        </div>
      `;
    }
    return html``;
  }

  get cssStyle(): TemplateResult {
    return html`
      <style>
        /* AD SCOPE */
        .suggested-ad {
          cursor: pointer;
        }
        .suggested-ad__image {
          width: 100%;
          height: 140px;
        }
        .suggested-ad__image img {
          object-fit: cover;
          border-radius: 3px;
          height: 140px;
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
          color: #111111;
          font-size: 16px;
          font-weight: bold;
        }
      </style>
    `;
  }

  public render() {
    return html`
      ${this.template}
      ${this.cssStyle}
    `;
  }

  public refresh() {
    render(this.render(), this.shadowRoot);
  }
}

window.customElements.define('suggested-ad', SuggestedAd);
