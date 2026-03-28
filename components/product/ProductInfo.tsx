'use client'

import { useState } from 'react'
import type { Product } from '@/types'
import PriceDisplay from '@/components/ui/PriceDisplay'
import VariantSelector, { type VariantSelections } from './VariantSelector'
import { getWhatsAppURL } from '@/lib/whatsapp'

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [variantSelections, setVariantSelections] = useState<VariantSelections>({
    size: product.variants.sizes[0] ?? null,
    color: product.variants.colors[0] ?? null,
    material: product.variants.materials[0] ?? null,
  })

  const variantDescription = [
    variantSelections.size?.label,
    variantSelections.color?.label,
    variantSelections.material?.label,
  ]
    .filter(Boolean)
    .join(' / ')

  const waURL = getWhatsAppURL({
    type: 'product',
    productName: product.name,
    variant: variantDescription,
  })

  const waCustomURL = getWhatsAppURL({ type: 'custom' })
  const waWholesaleURL = getWhatsAppURL({ type: 'wholesale', productName: product.name })

  return (
    <div className="space-y-6">
      {/* Category breadcrumb */}
      <div className="text-xs text-ip-text-muted uppercase tracking-wider">{product.category} / {product.subcategory}</div>

      {/* Name */}
      <h1 className="text-3xl font-bold text-ip-text">{product.name}</h1>

      {/* Short description */}
      <p className="text-ip-text-sec leading-relaxed">{product.shortDescription}</p>

      {/* Pricing */}
      <div className="p-4 bg-ip-surface rounded-xl border border-ip-border">
        <PriceDisplay
          pricing={product.pricing}
          showCustom={product.flags.isCustomizable}
          showWholesale={product.flags.isWholesaleAvailable}
          size="lg"
        />
      </div>

      {/* Variants */}
      <VariantSelector variants={product.variants} onVariantChange={setVariantSelections} />

      {/* Specs quick summary */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-ip-surface rounded-lg border border-ip-border">
          <div className="text-xs text-ip-text-muted mb-1">Fabricación</div>
          <div className="text-sm text-ip-text">{product.specs.leadTime}</div>
        </div>
        <div className="p-3 bg-ip-surface rounded-lg border border-ip-border">
          <div className="text-xs text-ip-text-muted mb-1">Envío</div>
          <div className="text-sm text-ip-text">
            {product.specs.shippingAvailable ? 'Todo el país' : 'Solo retiro'}
          </div>
        </div>
        {product.specs.dimensions && (
          <div className="p-3 bg-ip-surface rounded-lg border border-ip-border">
            <div className="text-xs text-ip-text-muted mb-1">Medida estándar</div>
            <div className="text-sm text-ip-text">{product.specs.dimensions}</div>
          </div>
        )}
        {product.specs.weight && (
          <div className="p-3 bg-ip-surface rounded-lg border border-ip-border">
            <div className="text-xs text-ip-text-muted mb-1">Peso aprox.</div>
            <div className="text-sm text-ip-text">{product.specs.weight}</div>
          </div>
        )}
      </div>

      {/* CTAs */}
      <div className="space-y-3">
        <a
          href={waURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-ip-wa hover:bg-ip-wa-hover text-ip-wa-text font-semibold py-4 rounded-xl transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Consultar precio y disponibilidad
        </a>

        {product.flags.isCustomizable && (
          <a
            href={waCustomURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-ip-accent text-ip-accent hover:bg-ip-accent hover:text-ip-bg font-medium py-3 rounded-xl transition-colors text-sm"
          >
            Pedir a medida personalizada
          </a>
        )}

        {product.flags.isWholesaleAvailable && (
          <a
            href={waWholesaleURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-ip-border hover:border-ip-border-hover text-ip-text-sec hover:text-ip-text font-medium py-3 rounded-xl transition-colors text-sm"
          >
            Consultar precio mayorista
          </a>
        )}
      </div>

      <p className="text-xs text-ip-text-muted text-center">
        SKU: {product.sku} · Los precios son orientativos, el final se confirma por WhatsApp.
      </p>
    </div>
  )
}
