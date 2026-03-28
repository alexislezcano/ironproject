type BadgeVariant = 'nuevo' | 'destacado' | 'amedida' | 'mayorista' | 'b2b'

interface BadgeProps {
  variant: BadgeVariant
  className?: string
}

const variantConfig: Record<BadgeVariant, { label: string; classes: string }> = {
  nuevo: {
    label: 'Nuevo',
    classes: 'bg-ip-wa/10 text-ip-wa border border-ip-wa/30',
  },
  destacado: {
    label: 'Destacado',
    classes: 'bg-ip-accent/10 text-ip-accent border border-ip-accent/30',
  },
  amedida: {
    label: 'A Medida',
    classes: 'bg-[#6EA8D4]/10 text-[#6EA8D4] border border-[#6EA8D4]/30',
  },
  mayorista: {
    label: 'Mayorista',
    classes: 'bg-[#A86ED4]/10 text-[#A86ED4] border border-[#A86ED4]/30',
  },
  b2b: {
    label: 'B2B',
    classes: 'bg-ip-surface text-ip-text-muted border border-ip-border',
  },
}

export default function Badge({ variant, className = '' }: BadgeProps) {
  const config = variantConfig[variant]
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${config.classes} ${className}`}>
      {config.label}
    </span>
  )
}
