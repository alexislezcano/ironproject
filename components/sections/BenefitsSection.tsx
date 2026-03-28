import ScrollReveal from '@/components/ui/ScrollReveal'

const benefits = [
  {
    stat:        '5–7',
    unit:        'días',
    title:       'Fabricación rápida',
    description: 'Tu pedido listo en menos de una semana. Para pedidos grandes, coordinamos el plazo con vos.',
  },
  {
    stat:        '100%',
    unit:        'a medida',
    title:       'Personalización total',
    description: 'Cada pieza se fabrica según tus medidas exactas. Personalizamos tamaño, color y acabado.',
  },
  {
    stat:        'Todo',
    unit:        'el país',
    title:       'Envíos nacionales',
    description: 'Entregamos en CABA, GBA y todo el interior. Embalaje seguro para que llegue perfecto.',
  },
  {
    stat:        'Sin',
    unit:        'intermediarios',
    title:       'Fabricación propia',
    description: 'Producimos todo en nuestro taller. Sin intermediarios, sin sorpresas. Calidad garantizada.',
  },
]

export default function BenefitsSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--ip-bg)',
        borderTop:       '1px solid var(--ip-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <ScrollReveal>
          <div className="py-10" style={{ borderBottom: '1px solid var(--ip-border)' }}>
            <h2
              className="font-heading text-3xl sm:text-4xl font-bold"
              style={{ color: 'var(--ip-text)' }}
            >
              ¿Por qué elegirnos?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 80}>
              <div
                className="py-10 pr-8"
                style={{
                  borderRight: i < benefits.length - 1 ? '1px solid var(--ip-border)' : 'none',
                  paddingLeft: i > 0 ? '2rem' : '0',
                }}
              >
                {/* Large stat */}
                <div className="mb-6">
                  <span
                    className="font-heading text-4xl sm:text-5xl font-bold leading-none"
                    style={{ color: 'var(--ip-text)' }}
                  >
                    {benefit.stat}
                  </span>
                  <span
                    className="block text-xs uppercase tracking-widest mt-1"
                    style={{ color: 'var(--ip-text-muted)' }}
                  >
                    {benefit.unit}
                  </span>
                </div>

                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: 'var(--ip-text)' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--ip-text-muted)' }}
                >
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
