import {LitElement, html, property} from '@polymer/lit-element';
import {TemplateResult} from 'lit-html/lit-html';
import css from './listing-item.css';

class ListingItem extends LitElement {

  @property() isThumb: string;
  @property() url: string = 'https://m.yapo.cl/img/m_prod_default.png';
  @property() price: string;
  @property() adId: string;
  @property() label: string;
  @property() location: string;
  @property() priceLowered: string;
  @property() adParams: string = '{}';
  @property() date: string;
  @property() isPro: string;
  @property() isFavorite: string;
  @property() region: string;
  @property() commune: string;
  @property() category: string;

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

  private _lazyLoading():void {
    //TODO: this should be a new component like "<lazy-image />"
    document.addEventListener("DOMContentLoaded", function() {
      // @ts-ignore
      let webcomponents = document.querySelectorAll("listing-item");
      let active = false;
      webcomponents.forEach((webcomponent) => {
        let lazyImages = [].slice.call(webcomponent.shadowRoot.querySelectorAll("img.lazy"));
        if ("IntersectionObserver" in window) {
          let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                let lazyImage = entry.target;
                // @ts-ignore
                lazyImage.src = lazyImage.dataset.src;
                // @ts-ignore
                // lazyImage.srcset = lazyImage.dataset.srcset;
                // @ts-ignore
                lazyImage.classList.remove("lazy");
                lazyImageObserver.unobserve(lazyImage);
              }
            });
          });
          // @ts-ignore
          lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
          });
        } else {
          // Possibly fall back to a more compatible method here
          const lazyLoad = function() {
            if (active === false) {
              active = true;

              setTimeout(function() {
                lazyImages.forEach(function(lazyImage: any) {
                  if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");

                    lazyImages = lazyImages.filter(function(image: any) {
                      return image !== lazyImage;
                    });

                    if (lazyImages.length === 0) {
                      document.removeEventListener("scroll", lazyLoad);
                      window.removeEventListener("resize", lazyLoad);
                      window.removeEventListener("orientationchange", lazyLoad);
                    }
                  }
                });

                active = false;
              }, 200);
            }
          };

          document.addEventListener("scroll", lazyLoad);
          window.addEventListener("resize", lazyLoad);
          window.addEventListener("orientationchange", lazyLoad);
        }
      });
    });
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
          <div class="listingItem-infoLocationCategory __locationRow">${this.category}</div>
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
}

window.customElements.define('listing-item', ListingItem);
