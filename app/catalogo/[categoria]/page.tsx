import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { mockProducts, mockCategories } from '@/lib/mockData'
import ProductGrid from '@/components/sections/ProductGrid'
import type { ProductCategory } from '@/types'

export const revalidate = 3600

const VALID_CATEGORIES: ProductCategory[] = ['hogar', 'eventos', 'comercial']

const categoryMeta: Record<ProductCategory, { title: string; description: string }> = {
  hogar: {
    title: 'Hogar',
    description: 'Mesas, escritorios, estantes y muebles con estilo industrial para tu hogar. Fabricación artesanal a medida.',
  },
  eventos: {
    title: 'Eventos',
    description: 'Arcos, fondos y estructuras decorativas de hierro para bodas, fiestas y eventos especiales.',
  },
  comercial: {
    title: 'Comercial',
    description: 'Exhibidores, estanterías y mobiliario industrial para locales y negocios. Precio mayorista disponible.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>
}): Promise<Metadata> {
  const { categoria } = await params
  if (!VALID_CATEGORIES.includes(categoria as ProductCategory)) {
    return {}
  }
  const meta = categoryMeta[categoria as ProductCategory]
  return buildMetadata({
    title: `Categoría: ${meta.title}`,
    description: meta.description,
    path: `/catalogo/${categoria}`,
  })
}

export function generateStaticParams() {
  return VALID_CATEGORIES.map((cat) => ({ categoria: cat }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>
}) {
  const { categoria } = await params

  if (!VALID_CATEGORIES.includes(categoria as ProductCategory)) {
    notFound()
  }

  const category = mockCategories.find((c) => c.slug === categoria)
  const products = mockProducts.filter(
    (p) => p.category === categoria && p.flags.isActive
  )

  const meta = categoryMeta[categoria as ProductCategory]

  return (
    <div className="min-h-screen bg-ip-bg">
      {/* Header */}
      <div className="bg-ip-surface border-b border-ip-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted mb-4">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/catalogo" className="hover:text-ip-text-sec">Catálogo</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec capitalize">{categoria}</span>
          </nav>
          <h1 className="text-3xl font-bold text-ip-text mb-2">{meta.title}</h1>
          <p className="text-ip-text-sec mb-4 max-w-2xl">{meta.description}</p>
          <p className="text-sm text-ip-text-muted">
            {products.length} producto{products.length !== 1 ? 's' : ''}
          </p>

          {/* Subcategory quick filters */}
          {category?.subcategories && category.subcategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {category.subcategories.map((sub) => (
                <Link
                  key={sub.value}
                  href={`/catalogo?categoria=${categoria}&subcategoria=${sub.value}`}
                  className="px-3 py-1 border border-ip-border hover:border-ip-accent text-sm text-ip-text-sec hover:text-ip-accent rounded-lg transition-colors"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
