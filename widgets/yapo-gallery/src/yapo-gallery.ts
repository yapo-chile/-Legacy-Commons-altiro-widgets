import { Seed, Property, html, TemplateResult } from '@nutmeg/seed';
import { GalleryAd } from './GalleryAd';
import { YapoGalleryBox } from './yapo-gallery-box';

export class YapoGallery extends Seed {
  @Property() public subcategory: String | undefined;
  data: GalleryAd[];
  constructor() {
    super();
    this.data = [
      {
      "id": 51813715,
      "title": "Patente de Botillería Santiago Centro",
      "image": "https://www.yapo.cl/img/empleos-224.png",
      "link": "https://www.yapo.cl/region_metropolitana/negocios_maquinaria_construccion/patente_de_botilleria_santiago_centro_51813715.htm?ca=15_s",
      "price": "$ 10.990.000"
      },
      {
      "id": 54070776,
      "title": "Sillón de cuero Natuzzi. 3 Cuerpos",
      "image": "https://img.yapo.cl/images/93/9341101030.jpg",
      "link": "https://www.yapo.cl/region_metropolitana/muebles/sillon_de_cuero_natuzzi__3_cuerpos_54070776.htm?ca=15_s",
      "price": "$ 290.000"
      },
      {
      "id": 52821719,
      "title": "Volkswagen gol 2012",
      "image": "https://img.yapo.cl/images/48/4841438079.jpg",
      "link": "https://www.yapo.cl/region_metropolitana/autos/volkswagen_gol_2012_52821719.htm?ca=15_s",
      "price": "$ 4.300.000"
      },
      {
      "id": 49134079,
      "title": "Residencial estudiante 1 cupo pieza",
      "image": "https://img.yapo.cl/images/94/9410194605.jpg",
      "link": "https://www.yapo.cl/region_metropolitana/arrendar/residencial_estudiante_1_cupo_pieza_49134079.htm?ca=15_s",
      "price": "$ 170.000"
      },
      {
      "id": 53549317,
      "title": "Departamento 3 dormitorios metro Mirador",
      "image": "https://img.yapo.cl/images/74/7432224199.jpg",
      "link": "https://www.yapo.cl/region_metropolitana/comprar/departamento_3_dormitorios_metro_mirador_53549317.htm?ca=15_s",
      "price": "$ 63.000.000"
      }
      ];
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

      .gallery-container__box + .gallery-container__box {
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
        ${this.renderBoxes(this.data)}
      </div>
    `;
  }

  private renderBoxes(data: GalleryAd[]){
      const galleryBox = new YapoGalleryBox();
      return data.map(ad=>(galleryBox.render(ad)));
  }
}

window.customElements.define('yapo-gallery', YapoGallery);
