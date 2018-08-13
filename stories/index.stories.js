/* eslint-disable no-console, react/button-has-type */

import { document } from 'global';
import { storiesOf } from '@storybook/polymer';

storiesOf('Demo', module)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('Carousel', () => 
    `<suggested-ads-carousel 
        ad-id="1000"
        src="http://localhost:8081/api/v1/mock"
        title="Articulos Relacionados"
        ></suggested-ads-carousel>
        <suggested-ads-carousel 
        ad-id="1000"
        class="blue"
        src="http://localhost:8081/api/v1/mock"
        title="Articulos Sugeridos"
        currency="en-US"
    ></suggested-ads-carousel>`)
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  });
