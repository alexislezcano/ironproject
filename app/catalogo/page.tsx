import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { mockProducts } from '@/lib/mockData'
import ProductGrid from '@/components/sections/ProductGrid'
import FilterSidebar from '@/components/catalog/FilterSidebar'
import FilterSheet from '@/components/catalog/FilterSheet'
import type { FilterState, Product } from '@/types'

export const revalidate = 3600

export const metadata: Metadata = buildMetadata({
  title: 'Catálogo',
  description: 'Explorá todo nuestro catálogo de muebles y estructuras de hierro. Filtrá por categoría, precio y más.',
  path: '/catalogo',
})

interface CatalogoPageProps {
  searchParams: Promise<{
    categoria?: string
    subcategoria?: string
    amedida?: string
    mayorista?: string
    ordenar?: string
  }>
}

function applyFilters(products: Product[], filters: Partial<FilterState>): Product[] {
  let result = [...products]

  if (filters.categoria) {
    result = result.filter((p) => p.category === filters.categoria)
  }
  if (filters.subcategoria) {
    result = result.filter((p) => p.subcategory === filters.subcategoria)
  }
  if (filters.amedida) {
    result = result.filter((p) => p.flags.isCustomizable)
  }
  if (filters.mayorista) {
    result = result.filter((p) => p.flags.isWholesaleAvailable)
  }

  switch (filters.ordenar) {
    case 'precio_asc':
      result.sort((a, b) => a.pricing.basePrice - b.pricing.basePrice)
      break
    case 'precio_desc':
      result.sort((a, b) => b.pricing.basePrice - a.pricing.basePrice)
      break
    case 'nuevo':
      result.sort((a, b) => (b.flags.isNew ? 1 : 0) - (a.flags.isNew ? 1 : 0))
      break
    default:
      result.sort((a, b) => (b.flags.isFeatured ? 1 : 0) - (a.flags.isFeatured ? 1 : 0))
  }

  return result
}

export default async function CatalogoPage({ searchParams }: CatalogoPageProps) {
  const params = await searchParams

  const filters: Partial<FilterState> = {
    categoria: (params.categoria as FilterState['categoria']) ?? null,
    subcategoria: params.subcategoria ?? null,
    amedida: params.amedida === 'true',
    mayorista: params.mayorista === 'true',
    ordenar: (params.ordenar as FilterState['ordenar']) ?? 'destacados',
  }

  const products = applyFilters(mockProducts, filters)

  return (
    <div className="min-h-screen bg-ip-bg">
      {/* Header */}
      <div className="bg-ip-surface border-b border-ip-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-ip-text-muted mb-4">
            <Link href="/" className="hover:text-ip-text-sec">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-ip-text-sec">Catálogo</span>
          </nav>
          <h1 className="text-3xl font-bold text-ip-text mb-2">Catálogo Completo</h1>
          <p className="text-ip-text-sec">
            {products.length} producto{products.length !== 1 ? 's' : ''} disponible{products.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-8">
          {/* Sidebar (desktop) */}
          <div className="hidden lg:block">
            <Suspense fallback={null}>
              <FilterSidebar currentFilters={filters} />
            </Suspense>
          </div>

          {/* Products */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter button */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <p className="text-sm text-ip-text-sec">{products.length} productos</p>
              <Suspense fallback={null}>
                <FilterSheet currentFilters={filters} />
              </Suspense>
            </div>

            <Suspense fallback={<div className="text-ip-text-muted">Cargando productos...</div>}>
              <ProductGrid products={products} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
