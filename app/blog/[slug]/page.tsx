import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getWhatsAppURL } from '@/lib/whatsapp'

export const revalidate = 3600

const PLACEHOLDER_POSTS: Record<string, {
  slug: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  publishedAt: string
}> = {
  'como-cuidar-muebles-hierro': {
    slug: 'como-cuidar-muebles-hierro',
    title: 'Cómo cuidar y mantener tus muebles de hierro',
    excerpt: 'Guía práctica para que tus estructuras de hierro duren décadas sin perder su estética industrial.',
    content: `Los muebles de hierro son conocidos por su durabilidad, pero como cualquier material requieren algunos cuidados básicos para mantenerse en óptimas condiciones.\n\n**Limpieza regular**\n\nLo más importante es evitar la humedad prolongada. Pasá un trapo seco o levemente húmedo y secá bien después. Nunca uses productos abrasivos que puedan rayar el acabado.\n\n**Protección contra el óxido**\n\nSi el mueble está en exterior o en lugares húmedos (como cocinas), te recomendamos aplicar una capa de cera de autos o aceite de linaza cada 6 meses. Esto crea una barrera protectora sin cambiar el aspecto.\n\n**Reparación de rayones**\n\nSi se produce un rayón profundo, hay que actuar rápido. Podés limpiar la zona y aplicar pintura en spray del mismo tono. Nosotros te podemos indicar exactamente qué pintura usar para tu pieza.`,
    tags: ['cuidado', 'mantenimiento', 'hierro'],
    publishedAt: '2024-03-01',
  },
  'tendencias-decoracion-industrial-2024': {
    slug: 'tendencias-decoracion-industrial-2024',
    title: 'Tendencias en decoración industrial para 2024',
    excerpt: 'El estilo industrial sigue fuerte. Mirá qué combinaciones de materiales dominan este año.',
    content: `El estilo industrial no es una moda pasajera, es una estética que se consolidó en los últimos años y sigue evolucionando.\n\n**Hierro + madera natural**\n\nLa combinación de hierro negro con madera sin teñir (o levemente barnizada) sigue siendo la número uno. La contrastes de texturas y la calidez de la madera sobre la frialdad del metal crea un equilibrio perfecto.\n\n**Negro mate como protagonista**\n\nEl negro mate se impone sobre el negro brillante. Da menos mantenimiento, esconde mejor las huellas y tiene una estética más sofisticada.\n\n**Piezas funcionales con diseño**\n\nEl estilo industrial 2024 privilegia piezas que sean verdaderamente útiles pero que al mismo tiempo tengan presencia visual. Nada de decoración vacía.`,
    tags: ['tendencias', 'decoración', 'industrial'],
    publishedAt: '2024-02-15',
  },
  'hierro-negro-vs-hierro-oxidado': {
    slug: 'hierro-negro-vs-hierro-oxidado',
    title: 'Hierro negro vs hierro oxidado: ¿cuál elegir?',
    excerpt: 'Cada acabado tiene su personalidad. Te ayudamos a elegir el que mejor va con tu espacio.',
    content: `Cuando nos piden un mueble a medida, una de las primeras preguntas es: ¿qué color o acabado querés? Las dos opciones más populares son el hierro negro y el hierro oxidado (o corten).\n\n**Hierro negro**\n\nEs el acabado más versátil. Va bien con cualquier estilo de decoración, desde el industrial más puro hasta ambientes contemporáneos o escandinavos. Dentro del negro tenemos variantes: mate (más moderno y que no refleja luz), satinado (un leve brillo que resalta las soldaduras) y brillante (más vintage, menos elegante hoy en día).\n\n**Hierro oxidado**\n\nDa calidez y personalidad. Es perfecto para espacios con madera, ladrillos a la vista o ambientes más rústicos. Tiene la ventaja de que pequeñas marcas o manchas son imperceptibles. El contrapunto es que requiere algo más de mantenimiento en ambientes muy húmedos.`,
    tags: ['hierro', 'acabados', 'diseño'],
    publishedAt: '2024-01-28',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = PLACEHOLDER_POSTS[slug]
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

export function generateStaticParams() {
  return Object.keys(PLACEHOLDER_POSTS).map((slug) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = PLACEHOLDER_POSTS[slug]

  if (!post) notFound()

  const waURL = getWhatsAppURL({ type: 'general' })

  return (
    <div className="min-h-screen bg-ip-bg">
      <div className="bg-ip-surface border-b border-ip-border py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted mb-6">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-ip-text-sec">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">{post.title}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs text-ip-text-muted border border-ip-border px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-ip-text mb-3">{post.title}</h1>
          <p className="text-sm text-ip-text-muted">
            {new Date(post.publishedAt).toLocaleDateString('es-AR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="prose prose-sm max-w-none">
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <h2 key={i} className="text-lg font-bold text-ip-text mt-8 mb-3">
                  {paragraph.replace(/\*\*/g, '')}
                </h2>
              )
            }
            return (
              <p key={i} className="text-ip-text-sec leading-relaxed mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-ip-surface rounded-xl border border-ip-border text-center">
          <h3 className="text-base font-semibold text-ip-text mb-2">
            ¿Te interesa un mueble de hierro?
          </h3>
          <p className="text-sm text-ip-text-muted mb-4">
            Consultanos y te hacemos un presupuesto a medida.
          </p>
          <a
            href={waURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ip-wa hover:bg-ip-wa-hover text-ip-wa-text text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar ahora
          </a>
        </div>

        <div className="mt-8">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-ip-accent hover:text-ip-accent-hover transition-colors">
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Volver al blog
          </Link>
        </div>
      </div>
    </div>
  )
}
