import Link from 'next/link'
import Image from 'next/image'

interface RelatedProduct {
  slug: string
  name: string
  image?: { url: string; alt: string }
  pricing: { basePrice: number; currency: string }
}

interface RelatedProductsProps {
  products: RelatedProduct[]
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products || products.length === 0) return null

  return (
    <section className="py-12 border-t border-ip-border">
      <h2 className="text-xl font-bold text-ip-text mb-6">También te puede interesar</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <Link
            key={product.slug}
            href={`/catalogo/${product.slug}`}
            className="group bg-ip-surface border border-ip-border rounded-xl overflow-hidden hover:border-ip-accent/40 transition-all"
          >
            <div className="relative h-36 bg-ip-surface-2">
              {product.image ? (
                <Image
                  src={product.image.url}
                  alt={product.image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-ip-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="text-xs font-medium text-ip-text group-hover:text-ip-accent transition-colors line-clamp-2 mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-ip-text-muted">
                Desde{' '}
                {new Intl.NumberFormat('es-AR', {
                  style: 'currency',
                  currency: 'ARS',
                  minimumFractionDigits: 0,
                }).format(product.pricing.basePrice)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
