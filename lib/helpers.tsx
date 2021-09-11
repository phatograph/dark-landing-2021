import get from 'lodash/get'
import entries from 'lodash/entries'
import nth from 'lodash/nth'

// @ts-ignore
import ja from '@locales/ja.yml'

// @ts-ignore
import en from '@locales/en.yml'

const locales = {
  ja,
  en,
}

export const _t = (currentLocale: string) => {
  return (key: string, args = {}) => {
    try {
      const _key = `${currentLocale}.${key}`

      let text = get(locales, _key, _key)
      const argsEntries = entries(args)

      if (argsEntries.length) {
        text = argsEntries.reduce((result, current) => {
          const pattern = new RegExp(`%{${nth(current, 0)}}`, 'g')

          return result.replace(pattern, nth(current, 1) || '')
        }, text)
      }

      return text
    } catch (e) {
      console.log(e)
    }
  }
}

export const COOKIE_SESSION_CLIENT = 'shoport-session-client'
