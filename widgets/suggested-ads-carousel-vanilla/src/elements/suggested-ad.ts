import { html, render } from 'lit-html/lib/lit-extended';
import { TemplateResult } from 'lit-html';
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
        <div class="suggested-ad" on-ready="${console.log('carousel inject')}" on-click=${() => this.redirect(this.ad.url)}>
          <div class="suggested-ad__image"><img src="${(this.ad.images) ? this.ad.images.full : ''}" /></div>
          <div class="suggested-ad__price">
            <span>${this.formatPrice(this.ad.price, this.ad.currency)}</span>
          </div>
          <div class="suggested-ad__title" title="${this.ad.title}">
            <p>${this.ad.title}</p>
          </div>
        </div>
      `;
    }
    return html``;
  }

  get cssStyle(): TemplateResult {
    return html`
      <style>
        .suggested-ad {
        cursor: pointer;
      }
      .suggested-ad__image {
        width: 100%;
        height: 120px;
      }

      .suggested-ad__image img {
        object-fit: cover;
        border-radius: 3px;
        height: 120px;
        width: 100%;
      }

      .suggested-ad__title {
        margin-top: 0;
        max-height: 32px;
        overflow: hidden;
        width: 100%;
      }

      .suggested-ad__price {
        width: 100%;
        margin-top: 7px;
      }

      .suggested-ad__price span {
        color: #111111;
        font-size: 16px;
        font-weight: normal;
      }

      .suggested-ad__title p {
        color: #666666;
        font-size: 12px;
        line-height: 1.17;
        margin: 3px 0 0 0;
        white-space: normal;
      }

      @media (min-width: 400px) {
        .suggested-ad__image {
          width: 100%;
          height: 140px;
        }

        .suggested-ad__image img {
          height: 140px;
        }
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
