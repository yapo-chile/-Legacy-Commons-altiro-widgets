import { Seed, Property, html, TemplateResult } from '@nutmeg/seed';
import { GalleryAd } from './GalleryAd';
import { YapoGalleryBox } from './yapo-gallery-box';
import { GalleryService } from './GalleryService';

export class YapoGallery extends Seed {
  @Property() public subcategory: String | undefined;
  @Property() public data: GalleryAd[] = [];
  constructor() {
    super();
  }

  /** The component instance has been inserted into the DOM. */
  public connectedCallback() {
    super.connectedCallback();
    const galleryService = new GalleryService();
    galleryService.requestData()
      .then((response) => {
        this.data = response;
        this.template;
      });
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
  }

  /** Styling for the component. */
  public get styles(): TemplateResult {
    return html`
      <style>
        .gallery-container {
          flex-wrap: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          font-size: 16px;
          font-family: arial, sans;
          width: 100%;
          display: inline-flex;
          height: 10em;
          justify-content: flex-start;
          flex-direction: row;
          align-items: center;
        }
      
        .gallery-container::-webkit-scrollbar {
          display: none;
        }
      
        .gallery-container__box+.gallery-container__box {
          margin-left: 0.5em;
        }
      
        .gallery-container__box {
          width: 10em;
          height: 10em;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      
        .gallery-container__link-wrapper {
          width: 10em;
          height: 10em;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
        }
      
        .gallery-container__content {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          flex-direction: row;
          align-items: center;
          color: white;
          font-weight: bold;
          background: #21507c;
          background: rgba(33, 80, 124, 0.5);
        }
      
        .gallery-container__price {
          width: 100%;
          text-align: right;
          padding: 0.1em;
        }
      
        .gallery-container__description {
          width: 100%;
          padding: 0.1em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          background: #21507c;
        }
      
        .outline {
          color: #fff;
          text-shadow: #000 0px 0px 1px;
          -webkit-font-smoothing: antialiased;
        }
      </style>
      </style>
    `;
  }

  /** HTML Template for the component. */
  public get template(): TemplateResult {
    return html`
      <div class="gallery-container">
        ${this.data ? this.renderBoxes(this.data) : ''}
      </div>
    `;
  }

  private renderBoxes(data: GalleryAd[]) {
    const galleryBox = new YapoGalleryBox();
    return data.map(ad => (galleryBox.render(ad)));
  }
}

window.customElements.define('yapo-gallery', YapoGallery);
