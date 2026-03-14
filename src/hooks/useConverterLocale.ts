import { useI18n } from '@/contexts/I18nContext'
import { getConverterLocale } from '@/locales/converters'
import type { Converter } from '@/types'

// ─── useConverterLocale ───────────────────────────────────────────────────────
// ให้ description และ longDescription ที่แปลแล้วตาม locale ปัจจุบัน
// ถ้าไม่มี translation → fallback กลับค่าจาก converters.config.ts (EN)
export function useConverterLocale(converter: Converter | undefined) {
  const { locale } = useI18n()

  if (!converter) return { description: '', longDescription: '' }

  const translated = getConverterLocale(converter.id, locale)

  return {
    description: translated?.description ?? converter.description,
    longDescription: translated?.longDescription ?? converter.longDescription,
  }
}
