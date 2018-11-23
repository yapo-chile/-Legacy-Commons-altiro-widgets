import {html, LitElement, property} from '@polymer/lit-element';
import {TemplateResult} from 'lit-html/lit-html';

class SplashScreen extends LitElement {

  @property() public url: string = 'https://info.yapo.cl/?landingpage=yapo-pago-y-despacho';
  @property() public imageUrl: string = 'https://static.yapo.cl/projects/altiro-payment-delivery/pd-guru.png';
  @property() public closeImage: string = 'https://static.yapo.cl/projects/altiro-payment-delivery/cerrar.png';
  @property() public backgroundImg: string = 'https://static.yapo.cl/projects/altiro-payment-delivery/fondo-pd.png';
  @property() private display: string = 'flex';
  @property() private buttonOpen: string = 'Abrir';
  @property() private buttonClose: string = 'Cerrar';

  constructor() {
    super();
  }

  public render(): TemplateResult {

    return html`
    <style>
    :host(body) { 
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      z-index: 9999999;
      overflow-y: hidden;
    }
    *{box-sizing: content-box }
     .splashScreen {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: column nowrap;
     }
     .splashScreen-image-container {
        max-width: 100%;
        height: calc(100vh - 134px);
        width: 100%;
        overflow: hidden;
        margin: 0 0 20px 0;
     }
     .splashScreen-image {
        max-width: 100%;
        height: calc(100vh - 134px);
        width: 100%;
        object-fit: scale-down;
        align-self: center;
     }
     .splashScreen-rectangle {
        position: sticky;
        bottom: 0;
        width: 100%;
        max-height: 134px !important;
        height: 134px;
        background-color: #ff6600;
        margin: 0 !important;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
      }
     .splashScreen-button-open {
        width: 42%;
        height: 42px;
        border:none;
        border-radius: 8px;
        background-color: #ffffff;
        color: #ff6600;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-family: Helvetica;
        font-size: 16px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        padding:0;
        margin: 0 auto 0 auto;
     }
     .splashScreen-button-close {
        height: 19px;
        font-family: Helvetica;
        font-size: 16px;
        font-weight: 100;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        padding:0;
        border:none;
        background: none;
        color: #ffffff;
   }
   .splash-screen-close-image {
       margin: 20px 20px 24px 0;
       width: 15px;
       height: 15px;
       object-fit: contain;
       align-self: flex-end;
   }
  
    </style>
      <div class="splashScreen" style="display:${this.display}; background-image: url(${this.backgroundImg});">
       <img class="splash-screen-close-image yapo-tag" src="${this.closeImage}" 
        @click="${() => this.closeModal()}" 
        data-yapo-tag-clickname="splash_screen&#58;&#58;&#58;&#58;&#58;&#58;close_on_top"
	    data-yapo-tag-type="A"/
	   >
        <div class="splashScreen-image-container">
          <img class="splashScreen-image" src="${this.imageUrl}" />     
        </div>
        <div class="splashScreen-rectangle">
          <button class="splashScreen-button-open"  @click="${() => this.goToURL()}">${this.buttonOpen}</button>
          <button class="splashScreen-button-close" @click="${() => this.closeModal()}">${this.buttonClose}</button>
        </div>
      </div>
    `;
  }

  private closeModal() {
    this.display = 'none';
  }

  private goToURL() {
    location.href = this.url;
  }

}

window.customElements.define('splash-screen', SplashScreen);
