import { storiesOf } from '@storybook/html';
import { withReadme, withDocs } from 'storybook-readme';
import '../widgets/ts-listing-item/dist/listing-item.bundled.js';
import readme from '../widgets/ts-listing-item/README.MD';

storiesOf('ListingItem', module)
  .addDecorator(withReadme(readme))
  .add('with Image', () => 
    `<listing-item
      ad-id="23232232"
      title="BRISAS DEL CAVANCHA BRAVA &#8230;"
      url="https://img.yapo.cl/images/36/3690389246.jpg"
      price="31.000,00"
      date="10 Diciembre 10:40"
      is-pro="Profesional"
      region="Región Metropolitana"
      commune="Santiago"
      category="Autos"
      currency="UF"
      label="Urgente"
      location="234234,234234"
      is-thumb="false"
    >
    </listing-item>`
  );
