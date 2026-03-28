import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'
import { mockProjects } from '@/lib/mockData'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface ProjectsSectionProps {
  projects?: Project[]
}

export default function ProjectsSection({ projects = mockProjects }: ProjectsSectionProps) {
  return (
    <section
      style={{
        backgroundColor: 'var(--ip-bg)',
        borderTop:       '1px solid var(--ip-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <ScrollReveal>
          <div
            className="flex items-baseline justify-between py-10"
            style={{ borderBottom: '1px solid var(--ip-border)' }}
          >
            <h2
              className="font-heading text-3xl sm:text-4xl font-bold"
              style={{ color: 'var(--ip-text)' }}
            >
              Proyectos Realizados
            </h2>
            <Link
              href="/proyectos"
              className="text-sm transition-opacity duration-150 hover:opacity-50"
              style={{ color: 'var(--ip-text-muted)' }}
            >
              Ver todos →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 80}>
              <Link
                href={`/proyectos/${project.slug}`}
                className="group block"
                style={{ borderRight: i < 2 ? '1px solid var(--ip-border)' : 'none' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden img-zoom" style={{ aspectRatio: '4/3' }}>
                  {project.images[0] ? (
                    <Image
                      src={project.images[0].url}
                      alt={project.images[0].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full" style={{ backgroundColor: 'var(--ip-surface)' }} />
                  )}
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div
                      className="text-xs uppercase tracking-widest"
                      style={{ color: 'var(--ip-text-muted)' }}
                    >
                      {project.category}
                      {project.isB2B && <span className="ml-2">· B2B</span>}
                    </div>
                    <span
                      className="text-sm transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: 'var(--ip-text-muted)' }}
                    >
                      →
                    </span>
                  </div>
                  <h3
                    className="font-heading-sm text-base font-bold mb-2 group-hover:opacity-60 transition-opacity"
                    style={{ color: 'var(--ip-text)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm line-clamp-2" style={{ color: 'var(--ip-text-muted)' }}>
                    {project.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
