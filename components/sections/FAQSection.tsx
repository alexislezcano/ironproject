'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { FAQItem } from '@/types'
import { mockFAQs } from '@/lib/mockData'
import ScrollReveal from '@/components/ui/ScrollReveal'

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid var(--ip-border)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer transition-opacity hover:opacity-70"
        aria-expanded={open}
      >
        <span
          className="text-sm font-medium pr-8"
          style={{ color: 'var(--ip-text)' }}
        >
          {item.question}
        </span>
        <span
          className={`shrink-0 text-lg leading-none transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          style={{ color: 'var(--ip-text-muted)' }}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p
          className="pb-5 text-sm leading-relaxed"
          style={{ color: 'var(--ip-text-sec)' }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  )
}

interface FAQSectionProps {
  items?:   FAQItem[]
  showAll?: boolean
}

export default function FAQSection({
  items   = mockFAQs.slice(0, 5),
  showAll = false,
}: FAQSectionProps) {
  return (
    <section
      style={{
        backgroundColor: 'var(--ip-bg)',
        borderTop:       '1px solid var(--ip-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

          {/* Header column */}
          <ScrollReveal>
            <div className="py-14 lg:pr-16">
              <h2
                className="font-heading text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: 'var(--ip-text)' }}
              >
                Preguntas Frecuentes
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--ip-text-muted)' }}>
                Todo lo que necesitás saber antes de consultar.
              </p>
              {!showAll && (
                <Link
                  href="/faq"
                  className="text-sm transition-opacity hover:opacity-50"
                  style={{ color: 'var(--ip-text-muted)' }}
                >
                  Ver todas →
                </Link>
              )}
            </div>
          </ScrollReveal>

          {/* FAQ list */}
          <ScrollReveal delay={80} className="lg:col-span-2">
            <div
              className="py-14 lg:pl-16"
              style={{ borderLeft: '1px solid var(--ip-border)' }}
            >
              <div style={{ borderTop: '1px solid var(--ip-border)' }}>
                {items.map((item, i) => (
                  <FAQRow key={item.id} item={item} />
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
