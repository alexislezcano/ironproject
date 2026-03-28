const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '5491100000000'

export type WhatsAppMessageType = 'product' | 'custom' | 'wholesale' | 'general' | 'rescue'

export interface WhatsAppContext {
  type: WhatsAppMessageType
  productName?: string
  category?: string
  variant?: string
  qty?: number
}

export function getWhatsAppURL(ctx: WhatsAppContext): string {
  const messages: Record<WhatsAppMessageType, string> = {
    product: `Hola Iron Project! 👋 Me interesa el producto *${ctx.productName ?? 'que vi en su catálogo'}*${ctx.variant ? ` en ${ctx.variant}` : ''}. ¿Podría darme más información y precio final?`,
    custom: `Hola Iron Project! 👋 Me gustaría consultar sobre un diseño *a medida*. ¿Podemos hablar?`,
    wholesale: `Hola Iron Project! 👋 Soy de un negocio y quiero consultar sobre *precios mayoristas* para ${ctx.productName ?? 'varios productos'}. ¿Tienen disponibilidad?`,
    general: `Hola Iron Project! 👋 Me interesa conocer sus productos y precios. ¿Pueden ayudarme?`,
    rescue: `Hola Iron Project! 👋 Estaba viendo su catálogo y no encontré exactamente lo que busco. ¿Pueden asesorarme?`,
  }

  const message = messages[ctx.type]
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
