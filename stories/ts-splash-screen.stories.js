import { storiesOf } from '@storybook/html';
import { withReadme, withDocs } from 'storybook-readme';
import '../widgets/ts-splash-screen/dist/splash-screen.bundled.js';
import readme from '../widgets/ts-splash-screen/README.MD';

storiesOf('SplashScreen', module)
  .addDecorator(withReadme(readme))
  .add('with Image', () => 
    `<splash-screen
        url="https://info.yapo.cl/?landingpage=yapo-pago-y-despacho"
    >
    </splash-screen>`
  );
