import { html, TemplateResult } from '@nutmeg/seed';
import { GalleryAd } from './GalleryAd';

export class YapoGalleryBox {   
    public render(ad:GalleryAd):TemplateResult{
        return html`
        <div class="gallery-container__box"
             style="background-image:url('${ad.image}')"
             >
          <a href="${ad.link}" class="gallery-container__link-wrapper">      
            <span class="gallery-container__content">
              <span class="gallery-container__price outline">${ad.price}</span>
              <span class="gallery-container__description outline">${ad.title}</span>
            </span>
          </a>
        </div>
        `;
    }
}