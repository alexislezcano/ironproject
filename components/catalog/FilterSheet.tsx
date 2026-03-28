'use client'

import { useState } from 'react'
import FilterSidebar from './FilterSidebar'
import type { FilterState } from '@/types'

interface FilterSheetProps {
  currentFilters: Partial<FilterState>
}

export default function FilterSheet({ currentFilters }: FilterSheetProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile filter button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 border border-ip-border hover:border-ip-accent text-ip-text-sec hover:text-ip-text px-4 py-2 rounded-lg transition-colors text-sm"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filtros
      </button>

      {/* Sheet overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-ip-bg/70"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative ml-auto w-80 h-full bg-ip-surface border-l border-ip-border overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-semibold text-ip-text">Filtros</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-ip-text-sec hover:text-ip-text transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <FilterSidebar currentFilters={currentFilters} />
          </div>
        </div>
      )}
    </>
  )
}
