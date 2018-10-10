import {html, LitElement, property} from '@polymer/lit-element';
import {TemplateResult} from 'lit-html/lit-html';
import css from './listing-item.css';

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
    this._lazyLoading();
  }

  public render(): TemplateResult {
    return html`
      ${css(this.url)}
      <link rel="stylesheet" type="text/css" href="https://static.yapo.cl/shared/fonts/fa-5.0.13/css/fontawesome-all.css">
      <section id="ad-${this.adId}" class="listingItem-box">
        <div class="listingItem-image __mainColumn">
          ${this.label && html`<span class="listingItem-imageLabel">${this.label}</span>`}
          <img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="${this.url}" alt="${this.title}"/>
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

  private _lazyLoading(): void {
    // TODO: this should be a new component like "<lazy-image />"
    document.addEventListener('DOMContentLoaded', () => {
      // @ts-ignore
      const webcomponents = document.querySelectorAll('listing-item');
      let active = false;
      webcomponents.forEach((webcomponent) => {
        let lazyImages = [].slice.call(webcomponent.shadowRoot.querySelectorAll('img.lazy'));
        if ('IntersectionObserver' in window) {
          const lazyImageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const lazyImage = entry.target;
                // @ts-ignore
                lazyImage.src = lazyImage.dataset.src;
                // @ts-ignore
                // lazyImage.srcset = lazyImage.dataset.srcset;
                // @ts-ignore
                lazyImage.classList.remove('lazy');
                lazyImageObserver.unobserve(lazyImage);
              }
            });
          });
          // @ts-ignore
          lazyImages.forEach((lazyImage) => {
            lazyImageObserver.observe(lazyImage);
          });
        } else {
          // Possibly fall back to a more compatible method here
          const lazyLoad = () => {
            if (active === false) {
              active = true;

              setTimeout(() => {
                lazyImages.forEach((lazyImage: any) => {
                  if ((lazyImage.getBoundingClientRect().top <= window.innerHeight &&
                    lazyImage.getBoundingClientRect().bottom >= 0) &&
                    getComputedStyle(lazyImage).display !== 'none') {
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');

                    lazyImages = lazyImages.filter((image: any) => {
                      return image !== lazyImage;
                    });

                    if (lazyImages.length === 0) {
                      document.removeEventListener('scroll', lazyLoad);
                      window.removeEventListener('resize', lazyLoad);
                      window.removeEventListener('orientationchange', lazyLoad);
                    }
                  }
                });

                active = false;
              }, 200);
            }
          };

          document.addEventListener('scroll', lazyLoad);
          window.addEventListener('resize', lazyLoad);
          window.addEventListener('orientationchange', lazyLoad);
        }
      });
    });
  }
}

window.customElements.define('listing-item', ListingItem);
