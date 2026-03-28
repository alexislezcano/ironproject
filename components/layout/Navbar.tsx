'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getWhatsAppURL } from '@/lib/whatsapp'
import ThemeToggle from '@/components/ui/ThemeToggle'

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

const categories = [
  { label: 'Hogar',     href: '/catalogo/hogar' },
  { label: 'Eventos',   href: '/catalogo/eventos' },
  { label: 'Comercial', href: '/catalogo/comercial' },
]

const navLinks = [
  { label: 'Catálogo',      href: '/catalogo',      dropdown: true },
  { label: 'Proyectos',     href: '/proyectos' },
  { label: 'A Medida',      href: '/a-medida' },
  { label: 'Para Negocios', href: '/para-negocios' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const waURL = getWhatsAppURL({ type: 'general' })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'var(--ip-bg)',
        borderBottom: scrolled ? '1px solid var(--ip-border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* ── Logo ── */}
          <Link href="/" className="shrink-0" aria-label="Iron Project">
            <Image
              src="/logos/logonegrodesktop.png"
              alt="Iron Project"
              width={140}
              height={40}
              className="logo-light-desktop h-8 w-auto"
              priority
            />
            <Image
              src="/logos/logonegromobile.png"
              alt="Iron Project"
              width={32}
              height={32}
              className="logo-light-mobile h-8 w-auto"
              priority
            />
            <Image
              src="/logos/logoblancodesktop.png"
              alt="Iron Project"
              width={140}
              height={40}
              className="logo-dark-desktop h-8 w-auto"
              priority
            />
            <Image
              src="/logos/logoblancomobile.png"
              alt="Iron Project"
              width={32}
              height={32}
              className="logo-dark-mobile h-8 w-auto"
              priority
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="nav-link flex items-center gap-1 text-sm"
                  >
                    {link.label}
                    <svg
                      className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Dropdown — pt-2 bridges the gap so mouse doesn't leave the group */}
                  <div className="absolute top-full left-0 w-44 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-150 pointer-events-none group-hover:pointer-events-auto">
                    <div
                      className="py-2"
                      style={{
                        backgroundColor: 'var(--ip-bg)',
                        border:          '1px solid var(--ip-border)',
                      }}
                    >
                      {categories.map((cat) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          className="nav-link block px-4 py-2 text-sm"
                        >
                          {cat.label}
                        </Link>
                      ))}
                      <div className="mx-4 my-1.5 h-px" style={{ backgroundColor: 'var(--ip-border)' }} />
                      <Link
                        href="/catalogo"
                        className="block px-4 py-2 text-sm font-medium transition-opacity duration-150 hover:opacity-60"
                        style={{ color: 'var(--ip-text)' }}
                      >
                        Todo el catálogo →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href={waURL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 transition-opacity duration-150 hover:opacity-75"
              style={{ backgroundColor: 'var(--ip-wa)', color: 'var(--ip-wa-text)' }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d={WA_PATH} />
              </svg>
              <span className="hidden lg:inline text-xs">WhatsApp</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center transition-opacity duration-150 hover:opacity-60 cursor-pointer"
              style={{ color: 'var(--ip-text)' }}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div
          className="md:hidden animate-slide-down"
          style={{ backgroundColor: 'var(--ip-bg)', borderTop: '1px solid var(--ip-border)' }}
        >
          <div className="px-6 py-4 space-y-1">
            <Link
              href="/catalogo"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium border-b transition-opacity hover:opacity-60"
              style={{ color: 'var(--ip-text)', borderColor: 'var(--ip-border)' }}
            >
              Catálogo
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 pl-3 text-sm transition-opacity hover:opacity-60"
                style={{ color: 'var(--ip-text-muted)' }}
              >
                {cat.label}
              </Link>
            ))}
            {[
              { label: 'Proyectos',     href: '/proyectos' },
              { label: 'A Medida',      href: '/a-medida' },
              { label: 'Para Negocios', href: '/para-negocios' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium border-t transition-opacity hover:opacity-60"
                style={{ color: 'var(--ip-text)', borderColor: 'var(--ip-border)' }}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 pb-2">
              <a
                href={waURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-sm font-medium py-3 transition-opacity hover:opacity-80"
                style={{ backgroundColor: 'var(--ip-wa)', color: 'var(--ip-wa-text)' }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d={WA_PATH} />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
