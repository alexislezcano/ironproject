import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getWhatsAppURL } from '@/lib/whatsapp'

export const metadata: Metadata = buildMetadata({
  title: 'A Medida',
  description: 'Fabricamos muebles y estructuras de hierro según tus medidas exactas. Personalizamos tamaño, color y acabado.',
  path: '/a-medida',
})

const steps = [
  {
    number: '01',
    title: 'Contanos tu idea',
    description: 'Mandanos un mensaje con tu idea, medidas o referencia. Podés adjuntar fotos o bocetos.',
  },
  {
    number: '02',
    title: 'Recibís un presupuesto',
    description: 'En menos de 24 horas te enviamos un presupuesto detallado sin compromiso.',
  },
  {
    number: '03',
    title: 'Confirmás el pedido',
    description: 'Si el presupuesto te convence, confirmás con una seña y arrancamos la fabricación.',
  },
  {
    number: '04',
    title: 'Entrega en tiempo y forma',
    description: 'En 5-10 días hábiles tu pieza está lista. Te avisamos cuando esté para coordinar el envío.',
  },
]

export default function AMedidaPage() {
  const waURL = getWhatsAppURL({ type: 'custom' })

  return (
    <div className="min-h-screen bg-ip-bg">
      {/* Hero */}
      <div className="bg-ip-surface border-b border-ip-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-xs text-ip-text-muted mb-6 text-left">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">A Medida</span>
          </nav>
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-ip-accent/30 rounded-full bg-ip-accent/5">
            <span className="w-1.5 h-1.5 bg-ip-accent rounded-full" />
            <span className="text-xs text-ip-accent font-medium tracking-wider uppercase">Personalización total</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-ip-text mb-6">
            Cada espacio tiene su medida exacta
          </h1>
          <p className="text-lg text-ip-text-sec max-w-2xl mx-auto leading-relaxed">
            No fabricamos en serie. Cada pieza se diseña y construye según tus medidas, el espacio donde va a ir y el estilo que buscás.
          </p>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-ip-text mb-10 text-center">¿Cómo funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="relative p-6 bg-ip-surface rounded-xl border border-ip-border">
              <div className="text-4xl font-bold text-ip-accent/20 mb-3">{step.number}</div>
              <h3 className="text-base font-semibold text-ip-text mb-2">{step.title}</h3>
              <p className="text-sm text-ip-text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* What we customize */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Medidas exactas', desc: 'Cualquier dimensión que necesites. Medimos tu espacio y fabricamos exacto.', icon: '📐' },
            { title: 'Color y acabado', desc: 'Negro mate, negro satinado, óxido o cualquier color. Con o sin laca protectora.', icon: '🎨' },
            { title: 'Material combinado', desc: 'Hierro solo, con madera maciza, con vidrio templado o con chapa perforada.', icon: '🔩' },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-ip-surface rounded-xl border border-ip-border">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-base font-semibold text-ip-text mb-2">{item.title}</h3>
              <p className="text-sm text-ip-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-ip-text mb-4">¿Ya tenés una idea?</h2>
          <p className="text-ip-text-sec mb-8 max-w-lg mx-auto">
            Mandanos un mensaje con tus medidas o referencia y en menos de 24 horas te enviamos un presupuesto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ip-wa hover:bg-ip-wa-hover text-ip-wa-text font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar diseño a medida
            </a>
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 border border-ip-border hover:border-ip-accent text-ip-text-sec hover:text-ip-text font-medium px-8 py-4 rounded-xl transition-colors"
            >
              Ver catálogo base
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
