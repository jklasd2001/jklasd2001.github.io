import type { locales } from 'src/i18n/config'

import type messages from './messages/ko.json'

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof locales)[number]
    Messages: typeof messages
  }
}

declare global {
  interface Window {
    Kakao: {
      VERSION: string
      isInitialized: () => boolean
      cleanup: () => void
      init: (appkey: string) => void
      Share: {
        sendDefault: (options: {
          objectType: 'feed'
          content: {
            title: string
            description: string
            imageUrl: string
            link: {
              mobileWebUrl: string
              webUrl: string
            }
          }
          buttons: Array<{
            title: string
            link: {
              mobileWebUrl: string
              webUrl: string
            }
          }>
        }) => void
      }
    }
  }
}
