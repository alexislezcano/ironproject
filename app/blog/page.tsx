import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 3600

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description: 'Artículos sobre decoración industrial, hierro, tendencias de diseño y consejos para cuidar tu mobiliario.',
  path: '/blog',
})

const PLACEHOLDER_POSTS = [
  {
    slug: 'como-cuidar-muebles-hierro',
    title: 'Cómo cuidar y mantener tus muebles de hierro',
    excerpt: 'Guía práctica para que tus estructuras de hierro duren décadas sin perder su estética industrial.',
    tags: ['cuidado', 'mantenimiento', 'hierro'],
    publishedAt: '2024-03-01',
  },
  {
    slug: 'tendencias-decoracion-industrial-2024',
    title: 'Tendencias en decoración industrial para 2024',
    excerpt: 'El estilo industrial sigue fuerte. Mirá qué combinaciones de materiales dominan este año.',
    tags: ['tendencias', 'decoración', 'industrial'],
    publishedAt: '2024-02-15',
  },
  {
    slug: 'hierro-negro-vs-hierro-oxidado',
    title: 'Hierro negro vs hierro oxidado: ¿cuál elegir?',
    excerpt: 'Cada acabado tiene su personalidad. Te ayudamos a elegir el que mejor va con tu espacio.',
    tags: ['hierro', 'acabados', 'diseño'],
    publishedAt: '2024-01-28',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-ip-bg">
      <div className="bg-ip-surface border-b border-ip-border py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted mb-6">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">Blog</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-ip-text mb-3">Blog</h1>
          <p className="text-ip-text-sec">
            Decoración industrial, consejos de mantenimiento y tendencias de diseño.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDER_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-ip-surface border border-ip-border rounded-xl overflow-hidden hover:border-ip-accent/40 transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-ip-surface-2 to-ip-surface flex items-center justify-center">
                <span className="text-4xl font-bold text-ip-accent/20">IP</span>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-ip-text-muted border border-ip-border px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-sm font-semibold text-ip-text hover:text-ip-accent transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-xs text-ip-text-muted line-clamp-3 mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-ip-text-muted">
                    {new Date(post.publishedAt).toLocaleDateString('es-AR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs text-ip-accent hover:text-ip-accent-hover transition-colors"
                  >
                    Leer →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
