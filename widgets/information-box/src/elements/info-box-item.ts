import { html, LitElement, property } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html/lit-html';

export class InfoBoxItem extends LitElement {

  @property() public elements: string = '[]';
  public objectElements: any[] = [];

  constructor() {
    super();
  }

  public connectedCallback(): void {
    this.objectElements = JSON.parse(this.elements);
  }

  public render(): TemplateResult {
    return html`
    <style>
      
      * {
        box-sizing: border-box;
      }
      h2 {
      margin: 0;
      }
      p {
        margin: 0;
      }
      .info-box-item {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
      }
      
      .info-box-item__element {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        width: 160px;
        padding: 33px 5px;
      }
      .info-box-item__title {
        font-family: Helvetica;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #424242;
      }
      
      .info-box-item__description {
        font-family: HelveticaNeue;
        font-size: 12px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.1px;
        text-align: center;
        color: #5e5e5e;
      }
      
      .info-box-item__icon {
         width: 52px;
         height: 50px;
         margin-bottom: 15px;
      }
      
      .info-box-item__separator {
        width: 120px;
        height: 1px;
        margin: 5px 0;
      }
      
      @media (max-width: 700px) {
        .info-box-item {
            justify-content: space-evenly;
        }
        .info-box-item__element {
            max-width: 140px;
        }
      }
    </style>
    <section class="info-box-item">
       ${this.objectElements.map((element) => {
          return html
            `<div class="info-box-item__element">
              <img src="${element.icon}" alt="icon" class="info-box-item__icon">
              <h2 class="info-box-item__title">${element.title}</h2>
              <div class="info-box-item__separator" style="background-color: ${element.color};"></div>
              
              <p class="info-box-item__description">${element.description}</p>
            </div>`;
        })} 
    </section>`;
  }
}

window.customElements.define('info-box-item', InfoBoxItem);
