import { storiesOf } from '@storybook/html';
import { withReadme, withDocs } from 'storybook-readme';
import '../widgets/information-box/dist/info-box.bundled.js';
import readme from '../widgets/information-box/README.MD';

storiesOf('InfoBox', module)
  .addDecorator(withReadme(readme))
  .add('Basic ', () =>
    `<info-box
            icon="https://static.yapo.cl/projects/altiro-payment-delivery/icons/avisopublicado.svg"
            title="¡Gracias por publicar!"
            content='Tu aviso <strong>"Vestido"</strong> será revisado y si está de acuerdo con las reglas de Yapo.cl, lo publicaremos en los próximos minutos.'>

    </info-box>`
  )
  .add('4 elements ', () =>
    `<info-box
            elements='[{"title":"Ventas más rápidas", "description":"Tus potenciales compradores se multiplican.", "color":"#ff6105", "icon":"https://static.yapo.cl/projects/altiro-payment-delivery/icons/wallet.svg"},{"title":"Sin moverte de tu casa", "description":"Vamos a retirar el producto donde tu prefieras.", "color":"#ff842c", "icon":"https://static.yapo.cl/projects/altiro-payment-delivery/icons/delivery.svg"}, {"title":"¡Envío gratis!", "description":"Los costos de envío los asumirá el comprador.", "color":"#ff9f00", "icon":"https://static.yapo.cl/projects/altiro-payment-delivery/icons/truck.svg"}, {"title":"Garantía de devolución", "description":"El dinero será retenido como garantía de pago.", "color":"#31589e", "icon":"https://static.yapo.cl/projects/altiro-payment-delivery/icons/handmoney.svg"}]'
            icon="https://static.yapo.cl/projects/altiro-payment-delivery/icons/title.svg"
            content="Tu aviso tendrá habilitado el servicio de Pago y Despacho no tiene cobros asociados ya que éste lo asumirá el comprador. Si alguien está interesado en tu producto te notificaremos por email o en tu perfil de Yapo.cl para que aceptes la compra.">

    </info-box>`
  )
  .add('3 elements ', () =>
    `<info-box
              elements='[{"title":"Ventas más rápidas", "description":"Tus potenciales compradores se multiplican.", "color":"#ff6105", "icon":"https://static.yapo.cl/projects/altiro-payment-delivery/icons/wallet.svg"},{"title":"Sin moverte de tu casa", "description":"Vamos a retirar el producto donde tu prefieras.", "color":"#ff842c", "icon":"https://static.yapo.cl/projects/altiro-payment-delivery/icons/delivery.svg"}, {"title":"¡Envío gratis!", "description":"Los costos de envío los asumirá el comprador.", "color":"#ff9f00", "icon":"https://static.yapo.cl/projects/altiro-payment-delivery/icons/truck.svg"}]'
              icon="https://static.yapo.cl/projects/altiro-payment-delivery/icons/title.svg"
              content="Tu aviso tendrá habilitado el servicio de Pago y Despacho no tiene cobros asociados ya que éste lo asumirá el comprador. Si alguien está interesado en tu producto te notificaremos por email o en tu perfil de Yapo.cl para que aceptes la compra.">
  
      </info-box>`
  )
  .add('2 elements ', () =>
    `<info-box
              elements='[{"title":"Ventas más rápidas", "description":"Tus potenciales compradores se multiplican.", "color":"#ff6105", "icon":"https://static.yapo.cl/projects/altiro-payment-delivery/icons/wallet.svg"},{"title":"Sin moverte de tu casa", "description":"Vamos a retirar el producto donde tu prefieras.", "color":"#ff842c", "icon":"https://static.yapo.cl/projects/altiro-payment-delivery/icons/delivery.svg"}]'
              icon="https://static.yapo.cl/projects/altiro-payment-delivery/icons/title.svg"
              content="Tu aviso tendrá habilitado el servicio de Pago y Despacho no tiene cobros asociados ya que éste lo asumirá el comprador. Si alguien está interesado en tu producto te notificaremos por email o en tu perfil de Yapo.cl para que aceptes la compra.">
  
      </info-box>`
  )
  .add('1 element', () =>
    `<info-box
              elements='[{"title":"Ventas más rápidas", "description":"Tus potenciales compradores se multiplican.", "color":"#ff6105", "icon":"https://static.yapo.cl/projects/altiro-payment-delivery/icons/wallet.svg"}]'
              icon="https://static.yapo.cl/projects/altiro-payment-delivery/icons/title.svg"
              content="Tu aviso tendrá habilitado el servicio de Pago y Despacho no tiene cobros asociados ya que éste lo asumirá el comprador. Si alguien está interesado en tu producto te notificaremos por email o en tu perfil de Yapo.cl para que aceptes la compra.">
  
      </info-box>`
  );
