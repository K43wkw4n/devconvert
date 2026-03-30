import { createContext, useContext, useState, type ReactNode } from 'react'
import { APP_CONFIG } from '@/config/app.config'
import en, { type Translations } from '@/locales/en'
import th from '@/locales/th'
import zh from '@/locales/zh'
import ja from '@/locales/ja'

export type Locale = typeof APP_CONFIG.i18n.supportedLocales[number]

export const LOCALES: { key: Locale; label: string; flag: string; nativeName: string }[] = [
  { key: 'en', label: 'English',  flag: '🇬🇧', nativeName: 'English'  },
  { key: 'th', label: 'Thai',     flag: '🇹🇭', nativeName: 'ภาษาไทย' },
  { key: 'ja', label: 'Japanese', flag: '🇯🇵', nativeName: '日本語'   },
  { key: 'zh', label: 'Chinese',  flag: '🇨🇳', nativeName: '中文'     },
]

const TRANSLATIONS: Record<Locale, Translations> = { en, th, zh, ja }

interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: en,
})

// ─── Language Detection ───────────────────────────────────────────────────────
// Priority: localStorage → browser language → default (en)
// รองรับเฉพาะภาษาที่กำหนดใน browserLanguageMap ของ app.config.ts
// ภาษาอื่น ๆ ที่ไม่ได้กำหนด → ใช้ defaultLocale (en)
function detectLocale(): Locale {
  const { storageKey, defaultLocale, browserLanguageMap } = APP_CONFIG.i18n

  // 1. ตรวจ localStorage ก่อน (user เคยเลือกไว้แล้ว)
  const saved = localStorage.getItem(storageKey)
  if (saved && Object.keys(TRANSLATIONS).includes(saved)) {
    return saved as Locale
  }

  // 2. ตรวจ browser language
  // navigator.languages = ['th-TH', 'th', 'en-US', 'en'] เป็นต้น
  const browserLangs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const lang of browserLangs) {
    // เอาแค่ prefix เช่น 'th-TH' → 'th'
    const prefix = lang.split('-')[0].toLowerCase()
    const mapped = browserLanguageMap[prefix]
    if (mapped && Object.keys(TRANSLATIONS).includes(mapped)) {
      return mapped as Locale
    }
  }

  // 3. Fallback → defaultLocale (en)
  return defaultLocale
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem(APP_CONFIG.i18n.storageKey, l)
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: TRANSLATIONS[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
