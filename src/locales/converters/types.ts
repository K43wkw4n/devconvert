// ─── Types ────────────────────────────────────────────────────────────────────

export interface ConverterLocale {
  description: string        // one-liner ใน card
  longDescription: string    // paragraph ใน converter page
  howToUse: string          // how to use this convert
}

export type ConverterLocaleMap = Record<string, ConverterLocale>
