import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { mockProjects } from '@/lib/mockData'

export const revalidate = 3600

export const metadata: Metadata = buildMetadata({
  title: 'Proyectos Realizados',
  description: 'Galería de proyectos de Iron Project. Decoración de eventos, equipamiento de locales y muebles para hogares.',
  path: '/proyectos',
})

export default function ProyectosPage() {
  const projects = mockProjects

  return (
    <div className="min-h-screen bg-ip-bg">
      <div className="bg-ip-surface border-b border-ip-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted mb-4">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">Proyectos</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-ip-text mb-3">Proyectos Realizados</h1>
          <p className="text-ip-text-sec max-w-2xl">
            Algunos de los trabajos que más nos enorgullecen. Desde departamentos hasta salones de eventos y locales comerciales.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/proyectos/${project.slug}`}
              className="group bg-ip-surface border border-ip-border rounded-xl overflow-hidden hover:border-ip-accent/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                {project.images[0] && (
                  <Image
                    src={project.images[0].url}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ip-bg via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-xs text-ip-accent bg-ip-bg/80 px-2 py-1 rounded capitalize">
                    {project.category}
                  </span>
                  {project.isB2B && (
                    <span className="text-xs text-ip-text-sec bg-ip-bg/80 px-2 py-1 rounded">
                      B2B
                    </span>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-base font-semibold text-ip-text group-hover:text-ip-accent transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-ip-text-muted line-clamp-3">{project.description}</p>
                {project.clientName && (
                  <p className="mt-2 text-xs text-ip-text-muted">Cliente: {project.clientName}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20 text-ip-text-muted">
            <p>Próximamente publicaremos nuestros proyectos.</p>
          </div>
        )}
      </div>
    </div>
  )
}
