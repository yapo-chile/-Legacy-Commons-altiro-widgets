import {html, LitElement, property} from '@polymer/lit-element';
import {TemplateResult} from 'lit-html/lit-html';

class SplashScreen extends LitElement {

  @property() public url: string = 'https://info.yapo.cl/?landingpage=yapo-pago-y-despacho';
  @property() public imageUrl: string = 'https://static.yapo.cl/mails/img/splash-top.jpg';
  @property() private display: string = 'flex';

  constructor() {
    super();
  } 

  public render(): TemplateResult {

    return html`
    <style>
    :host { 
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: auto;
      z-index: 9999999; 
    }
    *{box-sizing: content-box }
     .splashScreen {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: column nowrap;    

     }
     .splashScreen-image {
        width: 100%;
     }
     .splashScreen-rectangle {
        width: 100%;
        height: 134px;
        background-color: #ff6600;
        margin: 0 !important;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        aling-items: stretch;
        align-self: flex-end;
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
  
    </style>
      <div class="splashScreen" style="display:${this.display};">    
        <img class="splashScreen-image" src="${this.imageUrl}">     
        <div class="splashScreen-rectangle">
          <button class="splashScreen-button-open" type="submit" @click="${() => this.goToLanding()}">Abrir</button>
          <button class="splashScreen-button-close" type="submit" @click="${() => this.closeModal()}">Cancelar</button>
        </div>
      </div>
    `;
  }

  private closeModal() {
    this.display = 'none';
  }

  private goToLanding() {
    location.href = this.url;
  }
  
}

window.customElements.define('splash-screen', SplashScreen);
