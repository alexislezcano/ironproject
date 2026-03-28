import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getWhatsAppURL } from '@/lib/whatsapp'

export const metadata: Metadata = buildMetadata({
  title: 'Contacto',
  description: 'Contactanos por WhatsApp para consultas sobre precios, medidas y disponibilidad. Respondemos en menos de 1 hora.',
  path: '/contacto',
})

export default function ContactoPage() {
  const contactOptions = [
    {
      type: 'product' as const,
      title: 'Consultar un producto',
      description: 'Tengo un producto en mente y quiero saber precio y disponibilidad.',
      cta: 'Consultar producto',
    },
    {
      type: 'custom' as const,
      title: 'Pedir a medida',
      description: 'Quiero un diseño personalizado con mis medidas exactas.',
      cta: 'Consultar diseño a medida',
    },
    {
      type: 'wholesale' as const,
      title: 'Precio mayorista',
      description: 'Soy de un negocio y necesito precio para múltiples unidades.',
      cta: 'Consultar mayorista',
    },
    {
      type: 'general' as const,
      title: 'Consulta general',
      description: 'Tengo dudas generales o quiero conocer lo que fabrican.',
      cta: 'Enviar mensaje',
    },
  ]

  return (
    <div className="min-h-screen bg-ip-bg">
      <div className="bg-ip-surface border-b border-ip-border py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted mb-6">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">Contacto</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-ip-text mb-3">Contacto</h1>
          <p className="text-ip-text-sec">
            La forma más rápida de contactarnos es por WhatsApp. Respondemos en menos de 1 hora en horario comercial.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactOptions.map((option) => {
            const waURL = getWhatsAppURL({ type: option.type })
            return (
              <a
                key={option.type}
                href={waURL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-ip-surface border border-ip-border rounded-xl hover:border-ip-wa/50 transition-all group"
              >
                <div className="w-10 h-10 bg-ip-wa/10 text-ip-wa rounded-xl flex items-center justify-center mb-4 group-hover:bg-ip-wa/20 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-ip-text mb-1">{option.title}</h3>
                <p className="text-xs text-ip-text-muted mb-3">{option.description}</p>
                <span className="text-xs text-ip-wa group-hover:underline">{option.cta} →</span>
              </a>
            )
          })}
        </div>

        {/* Info */}
        <div className="bg-ip-surface rounded-xl border border-ip-border p-6">
          <h2 className="text-sm font-semibold text-ip-text mb-4">Información de contacto</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-ip-text-sec">
              <svg className="w-4 h-4 text-ip-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lunes a Viernes de 9:00 a 18:00
            </div>
            <div className="flex items-center gap-3 text-sm text-ip-text-sec">
              <svg className="w-4 h-4 text-ip-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              Tiempo de respuesta: menos de 1 hora
            </div>
            <div className="flex items-center gap-3 text-sm text-ip-text-sec">
              <svg className="w-4 h-4 text-ip-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Argentina (enviamos a todo el país)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
