import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { mockProducts } from '@/lib/mockData'
import ProductGrid from '@/components/sections/ProductGrid'
import { getWhatsAppURL } from '@/lib/whatsapp'

export const revalidate = 3600

export const metadata: Metadata = buildMetadata({
  title: 'Para Negocios — Precios Mayoristas',
  description: 'Precios mayoristas para locales, event planners y empresas. Fabricamos en volumen con calidad artesanal garantizada.',
  path: '/para-negocios',
})

export default function ParaNegociosPage() {
  const waURL = getWhatsAppURL({ type: 'wholesale' })
  const b2bProducts = mockProducts.filter((p) => p.flags.isWholesaleAvailable)

  return (
    <div className="min-h-screen bg-ip-bg">
      {/* Hero */}
      <div className="bg-ip-surface border-b border-ip-border py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted mb-6">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">Para Negocios</span>
          </nav>
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-ip-accent/30 rounded-full bg-ip-accent/5">
            <span className="w-1.5 h-1.5 bg-ip-accent rounded-full" />
            <span className="text-xs text-ip-accent font-medium tracking-wider uppercase">B2B / Mayorista</span>
          </div>
          <h1 className="text-4xl font-bold text-ip-text mb-4">
            Equipamos negocios con precio mayorista
          </h1>
          <p className="text-ip-text-sec max-w-2xl leading-relaxed">
            Trabajamos con locales de ropa, salones de eventos, fotógrafos, gastronómica y cualquier negocio que necesite mobiliario industrial. Precio especial a partir de pocas unidades.
          </p>
        </div>
      </div>

      {/* For who */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-ip-text mb-8">¿Para quién es?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            { title: 'Locales de indumentaria', desc: 'Exhibidores, percheros y estanterías con identidad industrial.' },
            { title: 'Salones de eventos', desc: 'Arcos, fondos, mesas y estructuras para decoración de eventos.' },
            { title: 'Estudios de fotografía', desc: 'Fondos metálicos, racks y accesorios para sets profesionales.' },
            { title: 'Gastronómica y cafés', desc: 'Estanterías, bases para barra, exhibidores y mesas de trabajo.' },
            { title: 'Event planners', desc: 'Stock de piezas decorativas para alquilar en eventos.' },
            { title: 'Decoradoras y arquitectas', desc: 'Piezas a medida para proyectos de interiorismo y decoración.' },
          ].map((item) => (
            <div key={item.title} className="p-5 bg-ip-surface rounded-xl border border-ip-border hover:border-ip-accent/30 transition-colors">
              <h3 className="text-sm font-semibold text-ip-text mb-2">{item.title}</h3>
              <p className="text-sm text-ip-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-ip-surface rounded-2xl border border-ip-border p-8 mb-12">
          <h2 className="text-xl font-bold text-ip-text mb-6">Beneficios mayoristas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Precio especial a partir de 3-5 unidades según producto',
              'Fabricación en serie con acabado consistente en todas las piezas',
              'Facturación a empresas y autónomos disponible',
              'Entrega coordinada en fecha pactada',
              'Asesoramiento en diseño incluido sin costo',
              'Posibilidad de desarrollar línea propia de productos',
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 w-4 h-4 bg-ip-accent/10 text-ip-accent rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-ip-text-sec">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        {b2bProducts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-ip-text mb-6">
              Productos con precio mayorista disponible
            </h2>
            <div className="mb-12">
              <ProductGrid products={b2bProducts} />
            </div>
          </>
        )}

        {/* CTA */}
        <div className="text-center">
          <a
            href={waURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-ip-wa hover:bg-ip-wa-hover text-ip-wa-text font-semibold px-8 py-4 rounded-xl transition-colors text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar cotización mayorista
          </a>
          <p className="mt-3 text-xs text-ip-text-muted">
            Respondemos cotizaciones en menos de 48hs hábiles.
          </p>
        </div>
      </div>
    </div>
  )
}
