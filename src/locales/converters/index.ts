import type { ConverterLocaleMap } from './types'
import en from './en'
import th from './th'
import zh from './zh'
import ja from './ja'
import type { Locale } from '@/contexts/I18nContext'

// ─── All converter locales ────────────────────────────────────────────────────
// เพิ่มภาษาใหม่ที่นี่ที่เดียว
const CONVERTER_LOCALES: Record<Locale, ConverterLocaleMap> = { en, th, zh, ja }

// ─── Hook-free lookup ─────────────────────────────────────────────────────────
// ใช้ใน component ที่ต้องการ description/longDescription ตาม locale ปัจจุบัน
export function getConverterLocale(
  converterId: string,
  locale: Locale
): ConverterLocaleMap[string] | undefined {
  return CONVERTER_LOCALES[locale]?.[converterId]
    ?? CONVERTER_LOCALES['en']?.[converterId]  // fallback to English
}

export type { ConverterLocaleMap }
export { en, th, zh, ja }
export default CONVERTER_LOCALES
