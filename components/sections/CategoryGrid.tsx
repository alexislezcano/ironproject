import Link from 'next/link'
import Image from 'next/image'
import type { Category } from '@/types'
import { mockCategories } from '@/lib/mockData'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface CategoryGridProps {
  categories?: Category[]
}

export default function CategoryGrid({ categories = mockCategories }: CategoryGridProps) {
  return (
    <section
      style={{
        backgroundColor: 'var(--ip-bg)',
        borderTop: '1px solid var(--ip-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-baseline justify-between py-10">
            <h2
              className="font-heading text-3xl sm:text-4xl font-bold"
              style={{ color: 'var(--ip-text)' }}
            >
              Categorías
            </h2>
            <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--ip-text-muted)' }}>
              {categories.length} colecciones
            </span>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: '1px solid var(--ip-border)' }}
        >
          {categories.map((category, i) => (
            <ScrollReveal key={category.id} delay={i * 80}>
              <Link
                href={`/catalogo/${category.slug}`}
                className="group block"
                style={{ borderRight: i < categories.length - 1 ? '1px solid var(--ip-border)' : 'none' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden img-zoom" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={category.image.url}
                    alt={category.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Text */}
                <div className="px-6 py-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className="font-heading-sm text-base font-bold"
                      style={{ color: 'var(--ip-text)' }}
                    >
                      {category.name}
                    </h3>
                    <span
                      className="text-sm transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: 'var(--ip-text-muted)' }}
                    >
                      →
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--ip-text-muted)' }}
                  >
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.subcategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub.value}
                        className="text-xs px-2 py-0.5"
                        style={{
                          color:           'var(--ip-text-muted)',
                          border:          '1px solid var(--ip-border)',
                        }}
                      >
                        {sub.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
