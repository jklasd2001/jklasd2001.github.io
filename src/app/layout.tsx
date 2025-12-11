import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from 'sonner'

import OverlayProvider from 'src/providers/overlay-provider'
import { ThemeProvider } from 'src/providers/theme-provider'

import './globals.css'

import KakaoScript from 'src/providers/kakao-script'

const sometimesTimes = localFont({
  src: '../../public/fonts/sometimes-times.woff2',
  display: 'swap',
  variable: '--font-sometimes-times',
})

const suit = localFont({
  src: '../../public/fonts/suit-variable.woff2',
  display: 'swap',
  variable: '--font-suit',
})

const pretendard = localFont({
  src: '../../public/fonts/pretendard-variable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zerowater.site'),
  title: 'Young Su & Hyun A',
  description: 'Young Su & Hyun A',
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
    date: false,
    url: false,
  },
  openGraph: {
    title: 'Young Su & Hyun A',
    description: 'Young Su & Hyun A',
    images: '/images/intro.webp',
    url: 'https://zerowater.site/wedding-invitation',
    siteName: 'Young Su & Hyun A',
    locale: 'ko_KR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body
        className={`${sometimesTimes.variable} ${suit.variable} ${pretendard.variable} antialiased`}
      >
        <KakaoScript />

        <NextIntlClientProvider>
          <NuqsAdapter>
            <ThemeProvider>
              <OverlayProvider>{children}</OverlayProvider>
            </ThemeProvider>

            <Toaster />
          </NuqsAdapter>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
