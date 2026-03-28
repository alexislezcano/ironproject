import Link from 'next/link'
import type { Product } from '@/types'
import ProductCard from '@/components/product/ProductCard'
import { mockProducts } from '@/lib/mockData'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface FeaturedProductsProps {
  products?: Product[]
}

export default function FeaturedProducts({
  products = mockProducts.filter((p) => p.flags.isFeatured),
}: FeaturedProductsProps) {
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
              Productos Destacados
            </h2>
            <Link
              href="/catalogo"
              className="text-sm transition-opacity duration-150 hover:opacity-50"
              style={{ color: 'var(--ip-text-muted)' }}
            >
              Ver todo →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 py-10">
          {products.slice(0, 8).map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 50}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        <div
          className="pb-6 pt-2 sm:hidden"
          style={{ borderTop: '1px solid var(--ip-border)' }}
        >
          <Link
            href="/catalogo"
            className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ backgroundColor: 'var(--ip-cta-bg)', color: 'var(--ip-cta-text)' }}
          >
            Ver todo el catálogo
          </Link>
        </div>

      </div>
    </section>
  )
}
