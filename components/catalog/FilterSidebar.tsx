'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import type { FilterState } from '@/types'

const categories = [
  { label: 'Todos', value: '' },
  { label: 'Hogar', value: 'hogar' },
  { label: 'Eventos', value: 'eventos' },
  { label: 'Comercial', value: 'comercial' },
]

const subcategories = [
  { label: 'Mesas', value: 'mesas' },
  { label: 'Escritorios', value: 'escritorios' },
  { label: 'Estantes', value: 'estantes' },
  { label: 'Percheros', value: 'percheros' },
  { label: 'Exhibidores', value: 'exhibidores' },
  { label: 'Estanterías', value: 'estanterias' },
  { label: 'Fondos', value: 'fondos' },
  { label: 'Arcos', value: 'arcos' },
  { label: 'Estructuras', value: 'estructuras' },
]

const sortOptions = [
  { label: 'Destacados', value: 'destacados' },
  { label: 'Precio: menor a mayor', value: 'precio_asc' },
  { label: 'Precio: mayor a menor', value: 'precio_desc' },
  { label: 'Más nuevos', value: 'nuevo' },
]

interface FilterSidebarProps {
  currentFilters: Partial<FilterState>
}

export default function FilterSidebar({ currentFilters }: FilterSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function updateFilter(key: string, value: string | boolean) {
    const params = new URLSearchParams(searchParams.toString())
    if (value === '' || value === false) {
      params.delete(key)
    } else {
      params.set(key, String(value))
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  function clearFilters() {
    router.push(pathname)
  }

  const hasActiveFilters = searchParams.toString().length > 0

  return (
    <aside className="w-64 flex-shrink-0 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-ip-text uppercase tracking-wider">Filtros</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-ip-accent hover:text-ip-accent-hover transition-colors"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Ordenar */}
      <div>
        <h3 className="text-xs text-ip-text-muted uppercase tracking-wider mb-3">Ordenar por</h3>
        <div className="space-y-1">
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateFilter('ordenar', opt.value)}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                (currentFilters.ordenar ?? 'destacados') === opt.value
                  ? 'bg-ip-accent/10 text-ip-accent'
                  : 'text-ip-text-sec hover:bg-ip-surface-2 hover:text-ip-text'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categoría */}
      <div className="border-t border-ip-border pt-5">
        <h3 className="text-xs text-ip-text-muted uppercase tracking-wider mb-3">Categoría</h3>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => updateFilter('categoria', cat.value)}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                (currentFilters.categoria ?? '') === cat.value
                  ? 'bg-ip-accent/10 text-ip-accent'
                  : 'text-ip-text-sec hover:bg-ip-surface-2 hover:text-ip-text'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategoría */}
      <div className="border-t border-ip-border pt-5">
        <h3 className="text-xs text-ip-text-muted uppercase tracking-wider mb-3">Tipo</h3>
        <div className="space-y-1">
          {subcategories.map((sub) => (
            <button
              key={sub.value}
              onClick={() => updateFilter('subcategoria', currentFilters.subcategoria === sub.value ? '' : sub.value)}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                currentFilters.subcategoria === sub.value
                  ? 'bg-ip-accent/10 text-ip-accent'
                  : 'text-ip-text-sec hover:bg-ip-surface-2 hover:text-ip-text'
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flags */}
      <div className="border-t border-ip-border pt-5">
        <h3 className="text-xs text-ip-text-muted uppercase tracking-wider mb-3">Opciones</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={currentFilters.amedida === true}
              onChange={(e) => updateFilter('amedida', e.target.checked)}
              className="w-4 h-4 accent-ip-accent"
            />
            <span className="text-sm text-ip-text-sec group-hover:text-ip-text transition-colors">
              A medida disponible
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={currentFilters.mayorista === true}
              onChange={(e) => updateFilter('mayorista', e.target.checked)}
              className="w-4 h-4 accent-ip-accent"
            />
            <span className="text-sm text-ip-text-sec group-hover:text-ip-text transition-colors">
              Precio mayorista disponible
            </span>
          </label>
        </div>
      </div>
    </aside>
  )
}
