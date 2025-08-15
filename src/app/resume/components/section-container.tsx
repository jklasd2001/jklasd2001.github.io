import type React from 'react'

export function SectionContainer({ children }: { children: React.ReactNode }) {
  return <section className="mb-8 print:mb-6">{children}</section>
}
