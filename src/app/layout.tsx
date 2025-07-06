import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from 'sonner'

import { ThemeProvider } from 'src/providers/theme-provider'

import './globals.css'

const pretendard = localFont({
  src: '../../public/fonts/pretendard-variable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'JKLASD2001',
  description: 'JKLASD2001',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${pretendard.className} antialiased`}>
        <NextIntlClientProvider>
          <NuqsAdapter>
            <ThemeProvider>{children}</ThemeProvider>

            <Toaster />
          </NuqsAdapter>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
