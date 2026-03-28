'use client'

import { useState } from 'react'
import type { Product, ProductVariantSize, ProductVariantColor, ProductVariantMaterial } from '@/types'

interface VariantSelectorProps {
  variants: Product['variants']
  onVariantChange?: (selections: VariantSelections) => void
}

export interface VariantSelections {
  size: ProductVariantSize | null
  color: ProductVariantColor | null
  material: ProductVariantMaterial | null
}

export default function VariantSelector({ variants, onVariantChange }: VariantSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<ProductVariantSize | null>(
    variants.sizes[0] ?? null
  )
  const [selectedColor, setSelectedColor] = useState<ProductVariantColor | null>(
    variants.colors[0] ?? null
  )
  const [selectedMaterial, setSelectedMaterial] = useState<ProductVariantMaterial | null>(
    variants.materials[0] ?? null
  )

  function handleChange(
    size: ProductVariantSize | null,
    color: ProductVariantColor | null,
    material: ProductVariantMaterial | null
  ) {
    onVariantChange?.({ size, color, material })
  }

  return (
    <div className="space-y-5">
      {/* Sizes */}
      {variants.sizes.length > 0 && (
        <div>
          <label className="block text-xs text-ip-text-sec mb-2 font-medium uppercase tracking-wider">
            Medida
            {selectedSize && (
              <span className="ml-2 normal-case text-ip-text">{selectedSize.label}</span>
            )}
          </label>
          <div className="flex flex-wrap gap-2">
            {variants.sizes.map((size) => (
              <button
                key={size.value}
                onClick={() => {
                  setSelectedSize(size)
                  handleChange(size, selectedColor, selectedMaterial)
                }}
                className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                  selectedSize?.value === size.value
                    ? 'border-ip-accent bg-ip-accent/10 text-ip-accent'
                    : 'border-ip-border text-ip-text-sec hover:border-ip-border-hover'
                }`}
              >
                {size.label}
                {size.priceModifier > 0 && (
                  <span className="ml-1 text-ip-text-muted">
                    +{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(size.priceModifier)}
                  </span>
                )}
              </button>
            ))}
          </div>
          {variants.customSizeAvailable && (
            <p className="mt-2 text-xs text-ip-text-muted">
              ¿Necesitás otra medida?{' '}
              <a href="#" className="text-ip-accent hover:underline">
                Consultá por medida personalizada
              </a>
            </p>
          )}
        </div>
      )}

      {/* Colors */}
      {variants.colors.length > 0 && (
        <div>
          <label className="block text-xs text-ip-text-sec mb-2 font-medium uppercase tracking-wider">
            Color
            {selectedColor && (
              <span className="ml-2 normal-case text-ip-text">{selectedColor.label}</span>
            )}
          </label>
          <div className="flex flex-wrap gap-2">
            {variants.colors.map((color) => (
              <button
                key={color.value}
                onClick={() => {
                  setSelectedColor(color)
                  handleChange(selectedSize, color, selectedMaterial)
                }}
                title={color.label}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                  selectedColor?.value === color.value
                    ? 'border-ip-accent bg-ip-accent/10 text-ip-accent'
                    : 'border-ip-border text-ip-text-sec hover:border-ip-border-hover'
                }`}
              >
                {color.hex && (
                  <span
                    className="w-3 h-3 rounded-full border border-ip-border-hover"
                    style={{ backgroundColor: color.hex }}
                  />
                )}
                {color.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Materials */}
      {variants.materials.length > 0 && (
        <div>
          <label className="block text-xs text-ip-text-sec mb-2 font-medium uppercase tracking-wider">
            Material
            {selectedMaterial && (
              <span className="ml-2 normal-case text-ip-text">{selectedMaterial.label}</span>
            )}
          </label>
          <div className="flex flex-wrap gap-2">
            {variants.materials.map((material) => (
              <button
                key={material.value}
                onClick={() => {
                  setSelectedMaterial(material)
                  handleChange(selectedSize, selectedColor, material)
                }}
                className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                  selectedMaterial?.value === material.value
                    ? 'border-ip-accent bg-ip-accent/10 text-ip-accent'
                    : 'border-ip-border text-ip-text-sec hover:border-ip-border-hover'
                }`}
              >
                {material.label}
                {material.priceModifier > 0 && (
                  <span className="ml-1 text-ip-text-muted">
                    +{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(material.priceModifier)}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
