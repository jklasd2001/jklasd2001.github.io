import { getRequestConfig } from 'next-intl/server'

import { getUserLocale } from 'src/services/locale'
import { type Locale, defaultLocale, locales } from './config'

export default getRequestConfig(async () => {
  // This typically corresponds to the `[locale]` segment
  let locale = await getUserLocale()

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale
  }

  return {
    locale: locale as Locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
