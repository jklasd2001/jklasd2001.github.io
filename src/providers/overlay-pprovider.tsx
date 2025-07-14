'use client'

import { OverlayProvider as _OverlayProvider } from 'overlay-kit'

const OverlayProvider = ({ children }: { children: React.ReactNode }) => {
  return <_OverlayProvider>{children}</_OverlayProvider>
}

export default OverlayProvider
