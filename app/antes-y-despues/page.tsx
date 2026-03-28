import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getWhatsAppURL } from '@/lib/whatsapp'

export const metadata: Metadata = buildMetadata({
  title: 'Antes y Después',
  description: 'Transformaciones reales con muebles de hierro Iron Project. Mirá cómo cambian los espacios.',
  path: '/antes-y-despues',
})

export default function AntesYDespuesPage() {
  const waURL = getWhatsAppURL({ type: 'general' })

  return (
    <div className="min-h-screen bg-ip-bg">
      <div className="bg-ip-surface border-b border-ip-border py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted mb-6">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">Antes y Después</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-ip-text mb-3">Antes y Después</h1>
          <p className="text-ip-text-sec max-w-2xl">
            Mirá cómo transformamos espacios con nuestras estructuras de hierro.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-ip-surface rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-ip-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-ip-text mb-3">Próximamente</h2>
          <p className="text-ip-text-sec mb-6 max-w-md mx-auto">
            Estamos preparando una galería de transformaciones reales. Mientras tanto, podés ver nuestros proyectos terminados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/proyectos"
              className="inline-flex items-center justify-center gap-2 bg-ip-cta-bg hover:bg-ip-cta-bg-hover text-ip-cta-text font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Ver proyectos realizados
            </Link>
            <a
              href={waURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ip-wa hover:bg-ip-wa-hover text-ip-wa-text font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
