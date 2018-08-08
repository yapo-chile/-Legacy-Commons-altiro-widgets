import { html, TemplateResult } from '@nutmeg/seed';
import { Ad } from './Ad';

export class SuggestedAd {
  public redirect(adId: String) {
    window.location.assign('/vi/' + adId);
  }

  public render(ad: Ad): TemplateResult {
    return html`
      <div class="suggested-ad" on-click="${() => this.redirect(ad.adId)}">
        <div class="suggested-ad__image"><img src="${ad.image}" /></div>
        <div class="suggested-ad__title" title="${ad.title}">
          <span>${ad.title}</span>
        </div>
        <div class="suggested-ad__price">
          <span>${ad.price}</span>
        </div>
      </div>
    `;
  }
}
