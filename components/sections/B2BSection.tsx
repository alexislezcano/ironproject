import Link from 'next/link'
import { getWhatsAppURL } from '@/lib/whatsapp'
import ScrollReveal from '@/components/ui/ScrollReveal'

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

const benefits = [
  'Precios especiales a partir de 3-5 unidades',
  'Fabricación en serie con acabado consistente',
  'Facturación a empresas disponible',
  'Asesoramiento en diseño incluido',
  'Entrega coordinada en fecha',
]

const stats = [
  { number: '+50',  label: 'Locales equipados' },
  { number: '+100', label: 'Event planners' },
  { number: '3–5',  label: 'Unidades mínimas' },
  { number: '48hs', label: 'Respuesta cotización' },
]

export default function B2BSection() {
  const waURL = getWhatsAppURL({ type: 'wholesale' })

  return (
    <section
      style={{
        backgroundColor: 'var(--ip-bg)',
        borderTop:       '1px solid var(--ip-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Content */}
          <ScrollReveal>
            <div className="py-14 pr-0 lg:pr-16">
              <p
                className="text-xs uppercase tracking-[0.18em] mb-6"
                style={{ color: 'var(--ip-text-muted)' }}
              >
                Para Negocios
              </p>

              <h2
                className="font-heading text-3xl sm:text-4xl font-bold mb-6 leading-tight"
                style={{ color: 'var(--ip-text)' }}
              >
                Equipamos locales, salones y emprendimientos
              </h2>

              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--ip-text-sec)' }}>
                Trabajamos con locales de indumentaria, event planners, fotógrafos y empresas que
                necesitan mobiliario industrial en volumen. Precio mayorista, calidad premium.
              </p>

              <ul className="space-y-2.5 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--ip-text-muted)' }} />
                    <span className="text-sm" style={{ color: 'var(--ip-text-sec)' }}>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3.5 transition-opacity hover:opacity-80"
                  style={{ backgroundColor: 'var(--ip-wa)', color: 'var(--ip-wa-text)' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={WA_PATH} />
                  </svg>
                  Consultar precios mayoristas
                </a>
                <Link
                  href="/para-negocios"
                  className="inline-flex items-center justify-center gap-1 text-sm font-medium px-6 py-3.5 transition-opacity hover:opacity-70"
                  style={{ border: '1px solid var(--ip-border)', color: 'var(--ip-text)' }}
                >
                  Más información →
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats grid */}
          <ScrollReveal delay={100}>
            <div
              className="grid grid-cols-2 py-14 lg:pl-16"
              style={{ borderLeft: '1px solid var(--ip-border)' }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="py-8 pr-8"
                  style={{
                    borderRight:  i % 2 === 0 ? '1px solid var(--ip-border)' : 'none',
                    borderBottom: i < 2       ? '1px solid var(--ip-border)' : 'none',
                    paddingLeft:  i % 2 === 1 ? '2rem' : '0',
                  }}
                >
                  <div
                    className="font-heading text-4xl font-bold mb-1"
                    style={{ color: 'var(--ip-text)' }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--ip-text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
