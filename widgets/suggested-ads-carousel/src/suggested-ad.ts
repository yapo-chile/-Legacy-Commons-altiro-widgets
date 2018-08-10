import { html, TemplateResult } from '@nutmeg/seed';
import { Ad } from './types';

export class SuggestedAd {
  private currency: string = '';
  constructor (currency: string) {
    this.currency = currency;
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

  public render(ad: Ad): TemplateResult {
    return html`
      <div class="suggested-ad" on-ready="${console.log('carousel inject')}" on-click="${() => this.redirect(ad.url)}">
        <div class="suggested-ad__image"><img src="${(ad.images) ? ad.images.small : ''}" /></div>
        <div class="suggested-ad__price">
          <span>${this.formatPrice(ad.price, ad.currency)}</span>
        </div>
        <div class="suggested-ad__title" title="${ad.title}">
          <span>${ad.title}</span>
        </div>
      </div>
    `;
  }
}
