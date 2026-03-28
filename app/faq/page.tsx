import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { mockFAQs } from '@/lib/mockData'
import FAQSection from '@/components/sections/FAQSection'

export const metadata: Metadata = buildMetadata({
  title: 'Preguntas Frecuentes',
  description: 'Respondemos las dudas más comunes sobre fabricación, precios, envíos, personalización y mayoristas.',
  path: '/faq',
})

const categoryLabels: Record<string, string> = {
  precios: 'Precios',
  envios: 'Envíos',
  personalizacion: 'Personalización',
  fabricacion: 'Fabricación',
  mayoristas: 'Mayoristas',
}

export default function FAQPage() {
  const faqsByCategory = mockFAQs.reduce<Record<string, typeof mockFAQs>>(
    (acc, faq) => {
      if (!acc[faq.category]) acc[faq.category] = []
      acc[faq.category].push(faq)
      return acc
    },
    {}
  )

  return (
    <div className="min-h-screen bg-ip-bg">
      <div className="bg-ip-surface border-b border-ip-border py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted mb-6">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">FAQ</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-ip-text mb-3">
            Preguntas Frecuentes
          </h1>
          <p className="text-ip-text-sec">
            Todo lo que necesitás saber antes de consultar.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {Object.entries(faqsByCategory).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h2 className="text-sm font-semibold text-ip-accent uppercase tracking-wider mb-4">
              {categoryLabels[category] ?? category}
            </h2>
            <FAQSection items={items} showAll />
          </div>
        ))}

        <div className="mt-12 p-6 bg-ip-surface rounded-xl border border-ip-border text-center">
          <h3 className="text-base font-semibold text-ip-text mb-2">
            ¿No encontraste lo que buscabas?
          </h3>
          <p className="text-sm text-ip-text-muted mb-4">
            Escribinos directamente y respondemos en menos de 1 hora.
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER ?? '5491100000000'}?text=${encodeURIComponent('Hola Iron Project! 👋 Tengo una consulta que no encontré en el FAQ.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ip-wa hover:bg-ip-wa-hover text-ip-wa-text text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
