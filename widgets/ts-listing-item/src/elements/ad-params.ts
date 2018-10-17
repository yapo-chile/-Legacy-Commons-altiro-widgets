import { html, LitElement, property } from '@polymer/lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { TemplateResult } from 'lit-html/lit-html';

export class AdParams extends LitElement {

  @property() public params: string;
  public objectParam: any = {};

  constructor() {
    super();
  }

  public connectedCallback(): void {
    this.objectParam = JSON.parse(this.params);
  }

  public renderParam(type: string, data: string): TemplateResult {
    let icon = '';
    const text = data.replace(/m2/g, 'm' + '<sup>2</sup>');
    switch (type) {
      case 'rooms': {
        icon = 'fal fa-bed';
        break;
      }
      case 'bathrooms': {
        icon = 'fal fa-bath';
        break;
      }

      case 'capacity': {
        icon = 'fal fa-users';
        break;
      }

      case 'surface': {
        icon = 'fal fa-expand';
        break;
      }
      case 'regdate': {
        icon = 'fal fa-calendar-alt';
        break;
      }
      case 'mileage': {
        icon = 'fal fa-tachometer';
        break;
      }
      case 'gearbox': {
        icon = 'fal fa-cogs';
        break;
      }
    }
    return html`
            <li class="listingItem-infoAdParam">
                <i class="${icon}"></i>
                <span>${unsafeHTML(text)}</span>
            </li>
        `;
  }

  public render(): TemplateResult {
    return html`
    <style>
      .listingItem-infoAdParams {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      .listingItem-infoAdParam {
          font-size: 10px;
          font-weight: 500;
          display: flex;
          margin-right: 5px;
      }

      .listingItem-infoAdParam i {
          font-size: 13px;
          align-self: center;
      }

      .listingItem-infoAdParam span {
          align-self: center;
          margin-left: 2px;
          display: inline-block;
      }

      .listingItem-infoAdParam span.__surface {
          margin-top: -2px;
      }

      .listingItem-infoAdParam:last-child {
          margin-right: 0;
      }


    </style>
     <link rel="stylesheet" type="text/css" href="https://static.yapo.cl/shared/fonts/fa-5.0.13/css/fontawesome-all.css">
    <ul class="listingItem-infoAdParams">
        ${Object.keys(this.objectParam).map((element) => {
      return this.objectParam[element] !== '' ? this.renderParam(element, this.objectParam[element]) : '';
    })}
    </ul>`;
  }
}

window.customElements.define('ad-params', AdParams);
