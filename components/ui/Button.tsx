import { type ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'whatsapp' | 'ghost' | 'outline'
type ButtonSize    = 'sm' | 'md' | 'lg' | 'full'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  ButtonVariant
  size?:     ButtonSize
  href?:     string
  external?: boolean
  children:  React.ReactNode
}

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

const variantStyle: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--ip-cta-bg)',
    color:           'var(--ip-cta-text)',
    fontWeight:      600,
  },
  secondary: {
    backgroundColor: 'var(--ip-surface)',
    color:           'var(--ip-text)',
    border:          '1px solid var(--ip-border)',
  },
  whatsapp: {
    backgroundColor: 'var(--ip-wa)',
    color:           'var(--ip-wa-text)',
    fontWeight:      600,
  },
  ghost: {
    backgroundColor: 'transparent',
    color:           'var(--ip-text-muted)',
  },
  outline: {
    backgroundColor: 'transparent',
    color:           'var(--ip-accent)',
    border:          '1px solid var(--ip-accent)',
  },
}

const sizeClasses: Record<ButtonSize, string> = {
  sm:   'px-3 py-1.5 text-xs  rounded-lg',
  md:   'px-5 py-2.5 text-sm  rounded-xl',
  lg:   'px-7 py-3.5 text-sm  rounded-xl',
  full: 'w-full px-5 py-3 text-sm rounded-xl justify-center',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, external, children, className = '', style, ...props }, ref) => {
    const classes = `inline-flex items-center gap-2 cursor-pointer btn-press transition-colors duration-150 ${sizeClasses[size]} ${className}`
    const combinedStyle = { ...variantStyle[variant], ...style }

    const waIcon = variant === 'whatsapp' ? (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d={WA_PATH} />
      </svg>
    ) : null

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={combinedStyle}>
            {waIcon}{children}
          </a>
        )
      }
      return (
        <Link href={href} className={classes} style={combinedStyle}>
          {waIcon}{children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} style={combinedStyle} {...props}>
        {waIcon}{children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
