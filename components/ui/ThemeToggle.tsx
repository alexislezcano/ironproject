'use client'

import { useTheme } from '@/components/providers/ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer
                 border border-[var(--ip-border)] bg-[var(--ip-surface)]
                 hover:border-[var(--ip-border-hover)] hover:bg-[var(--ip-surface-2)]
                 transition-all duration-200 active:scale-90"
    >
      <span
        key={theme}
        style={{ animation: 'themeSpin 200ms ease-out both' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          /* Sun — switch to light */
          <svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            className="w-4 h-4 text-[var(--ip-text)]"
          >
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2"     x2="12" y2="6"     />
            <line x1="12" y1="18"    x2="12" y2="22"    />
            <line x1="4.93"  y1="4.93"  x2="7.76"  y2="7.76"  />
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
            <line x1="2"  y1="12" x2="6"  y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
            <line x1="4.93"  y1="19.07" x2="7.76"  y2="16.24" />
            <line x1="16.24" y1="7.76"  x2="19.07" y2="4.93"  />
          </svg>
        ) : (
          /* Moon — switch to dark */
          <svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            className="w-4 h-4 text-[var(--ip-text)]"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </span>
    </button>
  )
}
