import type { ReactNode } from 'react'

export default function WeddingInvitationLayout({
  children,
}: {
  children: ReactNode
}) {
  return <div className="max-w-[520px] mx-auto">{children}</div>
}
