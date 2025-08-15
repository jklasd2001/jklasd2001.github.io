import type React from 'react'

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold text-gray-800 mb-6 print:text-2xl print:mb-4 border-b-2 border-gray-900 pb-2">
      {children}
    </h2>
  )
}
