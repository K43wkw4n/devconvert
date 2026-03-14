// ─── Types ────────────────────────────────────────────────────────────────────

export interface ConverterLocale {
  description: string        // one-liner ใน card
  longDescription: string    // paragraph ใน converter page
}

export type ConverterLocaleMap = Record<string, ConverterLocale>
