import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { mockProducts } from '@/lib/mockData'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import RelatedProducts from '@/components/product/RelatedProducts'
import type { ProductCategory } from '@/types'

export const revalidate = 3600

const VALID_CATEGORIES: ProductCategory[] = ['hogar', 'eventos', 'comercial']

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = mockProducts.find((p) => p.slug === slug)
  if (!product) return {}
  return buildMetadata({
    title: product.seoTitle || product.name,
    description: product.seoDescription || product.shortDescription,
    path: `/catalogo/${product.category}/${product.slug}`,
  })
}

export function generateStaticParams() {
  return mockProducts.map((p) => ({
    categoria: p.category,
    slug: p.slug,
  }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>
}) {
  const { categoria, slug } = await params

  if (!VALID_CATEGORIES.includes(categoria as ProductCategory)) {
    notFound()
  }

  const product = mockProducts.find((p) => p.slug === slug && p.category === categoria)

  if (!product) {
    notFound()
  }

  const relatedProducts = mockProducts
    .filter((p) => product.relatedProducts.includes(p.id))
    .map((p) => ({
      slug: `${p.category}/${p.slug}`,
      name: p.name,
      image: p.images[0],
      pricing: p.pricing,
    }))

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      price: product.pricing.basePrice,
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <div className="min-h-screen bg-ip-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-ip-surface border-b border-ip-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/catalogo" className="hover:text-ip-text-sec">Catálogo</Link>
            <span className="mx-2">/</span>
            <Link href={`/catalogo/${categoria}`} className="hover:text-ip-text-sec capitalize">{categoria}</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Info */}
          <ProductInfo product={product} />
        </div>

        {/* Specs */}
        {product.specs.materials.length > 0 && (
          <div className="mt-16 border-t border-ip-border pt-10">
            <h2 className="text-xl font-bold text-ip-text mb-6">Especificaciones</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-ip-surface rounded-xl border border-ip-border">
                <div className="text-xs text-ip-text-muted mb-1">Materiales</div>
                <div className="text-sm text-ip-text">{product.specs.materials.join(', ')}</div>
              </div>
              {product.specs.dimensions && (
                <div className="p-4 bg-ip-surface rounded-xl border border-ip-border">
                  <div className="text-xs text-ip-text-muted mb-1">Dimensiones</div>
                  <div className="text-sm text-ip-text">{product.specs.dimensions}</div>
                </div>
              )}
              {product.specs.weight && (
                <div className="p-4 bg-ip-surface rounded-xl border border-ip-border">
                  <div className="text-xs text-ip-text-muted mb-1">Peso</div>
                  <div className="text-sm text-ip-text">{product.specs.weight}</div>
                </div>
              )}
              <div className="p-4 bg-ip-surface rounded-xl border border-ip-border">
                <div className="text-xs text-ip-text-muted mb-1">Fabricación</div>
                <div className="text-sm text-ip-text">{product.specs.leadTime}</div>
              </div>
            </div>
          </div>
        )}

        {/* Related */}
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
      </div>
    </div>
  )
}
