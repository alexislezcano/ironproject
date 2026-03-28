import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getWhatsAppURL } from '@/lib/whatsapp'

export const metadata: Metadata = buildMetadata({
  title: 'Nosotros',
  description: 'Conocé la historia de Iron Project. Fabricamos muebles y estructuras de hierro artesanales con más de 5 años de experiencia.',
  path: '/nosotros',
})

export default function NosotrosPage() {
  const waURL = getWhatsAppURL({ type: 'general' })

  return (
    <div className="min-h-screen bg-ip-bg">
      <div className="bg-ip-surface border-b border-ip-border py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted mb-6">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">Nosotros</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-ip-text mb-3">Nosotros</h1>
          <p className="text-ip-text-sec">El equipo detrás de cada estructura.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Story */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-ip-accent/30 rounded-full bg-ip-accent/5">
            <span className="w-1.5 h-1.5 bg-ip-accent rounded-full" />
            <span className="text-xs text-ip-accent font-medium tracking-wider uppercase">Nuestra historia</span>
          </div>
          <h2 className="text-2xl font-bold text-ip-text mb-6">
            Nacimos del gusto por el trabajo bien hecho
          </h2>
          <div className="prose prose-sm max-w-none space-y-4">
            <p className="text-ip-text-sec leading-relaxed">
              Iron Project nació de la convicción de que los muebles pueden ser más que funcionales: pueden tener carácter, personalidad y durar décadas. Empezamos fabricando para amigos y familia, y rápidamente nos dimos cuenta de que había una demanda real por muebles industriales de calidad, fabricados localmente y a medida.
            </p>
            <p className="text-ip-text-sec leading-relaxed">
              Hoy tenemos nuestro propio taller donde cada pieza pasa por nuestras manos. No tercerizamos la producción, no compramos en serie. Cortamos, soldamos, lijamos y terminamos cada estructura con la misma dedicación que la primera.
            </p>
            <p className="text-ip-text-sec leading-relaxed">
              Con más de 200 proyectos realizados, seguimos apostando por la fabricación artesanal y el contacto directo con el cliente. Cada consulta que recibimos la respondemos nosotros mismos, sin intermediarios.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-ip-text mb-8">Nuestros valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Artesanal', desc: 'Cada pieza es única, fabricada a mano con atención al detalle. Nunca en serie.' },
              { title: 'Honestidad', desc: 'Precios claros, plazos reales. Si no podemos hacer algo, lo decimos.' },
              { title: 'Durabilidad', desc: 'Fabricamos para que dure décadas, no temporadas. Material de calidad siempre.' },
              { title: 'Accesibilidad', desc: 'Precios justos para que el diseño industrial esté al alcance de todos.' },
            ].map((value) => (
              <div key={value.title} className="p-6 bg-ip-surface rounded-xl border border-ip-border">
                <h3 className="text-base font-semibold text-ip-accent mb-2">{value.title}</h3>
                <p className="text-sm text-ip-text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '+200', label: 'Proyectos' },
            { value: '+5', label: 'Años de experiencia' },
            { value: '100%', label: 'Fabricación propia' },
            { value: '5-7', label: 'Días de fabricación' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-ip-surface rounded-xl border border-ip-border">
              <div className="text-3xl font-bold text-ip-accent mb-1">{stat.value}</div>
              <div className="text-xs text-ip-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-ip-text mb-3">¿Querés trabajar con nosotros?</h2>
          <p className="text-ip-text-sec mb-6">Escribinos y contanos tu proyecto.</p>
          <a
            href={waURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ip-wa hover:bg-ip-wa-hover text-ip-wa-text font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribinos
          </a>
        </div>
      </div>
    </div>
  )
}
