import type { locales } from 'src/i18n/config'

import type messages from './messages/ko.json'

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof locales)[number]
    Messages: typeof messages
  }
}
