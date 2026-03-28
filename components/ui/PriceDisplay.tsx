import type { ProductPricing } from '@/types'

interface PriceDisplayProps {
  pricing: ProductPricing
  showCustom?: boolean
  showWholesale?: boolean
  size?: 'sm' | 'md' | 'lg'
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export default function PriceDisplay({
  pricing,
  showCustom = false,
  showWholesale = false,
  size = 'md',
}: PriceDisplayProps) {
  const priceSize = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
  }[size]

  const labelSize = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
  }[size]

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-2">
        <span className={`${labelSize} text-ip-text-muted`}>Desde</span>
        <span className={`${priceSize} font-bold text-ip-text`}>
          {formatPrice(pricing.basePrice)}
        </span>
      </div>

      {showCustom && pricing.customPrice > 0 && (
        <div className="flex items-baseline gap-2">
          <span className={`${labelSize} text-ip-text-muted`}>A medida:</span>
          <span className={`${size === 'lg' ? 'text-lg' : 'text-sm'} text-ip-accent`}>
            desde {formatPrice(pricing.customPrice)}
          </span>
        </div>
      )}

      {showWholesale && pricing.wholesalePrice > 0 && (
        <div className="flex items-baseline gap-2">
          <span className={`${labelSize} text-ip-text-muted`}>
            Mayorista (x{pricing.wholesaleMinQty}+):
          </span>
          <span className={`${size === 'lg' ? 'text-lg' : 'text-sm'} text-ip-text-sec`}>
            {formatPrice(pricing.wholesalePrice)} c/u
          </span>
        </div>
      )}
    </div>
  )
}
