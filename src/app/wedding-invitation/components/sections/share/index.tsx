'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ShareButtons = dynamic(() => import('./share-buttons'), {
  ssr: false,
})

const ShareSection = () => {
  return (
    <section className="px-6 py-8 bg-white">
      <Suspense
        fallback={
          <div className="space-y-3">
            <div className="w-full bg-gray-100 py-4 px-6 rounded-lg animate-pulse h-14" />
            <div className="w-full bg-gray-100 py-4 px-6 rounded-lg animate-pulse h-14" />
          </div>
        }
      >
        <ShareButtons />
      </Suspense>
    </section>
  )
}

export default ShareSection
