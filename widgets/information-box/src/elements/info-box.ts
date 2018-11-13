import {html, LitElement, property} from '@polymer/lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import {TemplateResult} from 'lit-html/lit-html';

class InfoBox extends LitElement {

  @property() public title: string;
  @property() public content: string;
  @property() public icon: string;
  @property() public elements: string;

  constructor() {
    super();
  }
  public render(): TemplateResult {

    return html`
    <style>
    
      p {
        margin: 0;
      } 
      .info-box {
        display: flex;
        width: 100%;
        flex-flow: column nowrap;
      }
      .info-box__icon {
        margin: 0 0 11px 0;
      }
      .info-box__title {
        font-family: Helvetica;
        font-size: 24px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #333333;
        margin: 0 0 15px 0;
      }
      .info-box__content {
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #666666;
      }
      
      .info-box__elements {
        margin-top: 20px;
      }
      
      @media (max-width: 700px) {
        .info-box__icon {
            margin: 0 0 15px 0;
        }
      }
      
    </style>
    <section class="info-box">
      ${this.icon && html
      `<img class="info-box__icon" src="${this.icon}" alt="icon">`
      }
      ${this.title && html`
      <h1 class="info-box__title">${this.title}</h1>`
      }
      <p class="info-box__content">${unsafeHTML(this.content)}</p>
      ${this.elements && html
      `<div class="info-box__elements">
         <info-box-item elements="${this.elements}"></info-box-item>
      </div>`
      }
    </section>
    `;
  }
}

window.customElements.define('info-box', InfoBox);
