// ─── App Config ──────────────────────────────────────────────────────────────
// แก้ไขค่าทั้งหมดที่นี่ที่เดียว

export const APP_CONFIG = {
  // ── Brand ────────────────────────────────────────────────────────────────
  name: "DevConvert",
  tagline: "Free Online Code & Data Converter for Developers",
  description:
    "35+ free online developer tools. Convert JSON, YAML, TypeScript, Markdown, Base64, and more – instantly in your browser. No signup, no install.",
  url: "https://potamiya.com",
  githubUrl: "https://github.com/K43wkw4n/devconvert", 
  contactEmail: "kaewkwannnj@gmail.com", 

  // ── SEO ──────────────────────────────────────────────────────────────────
  ogImage: "https://potamiya.com/og-image.png",
  twitterHandle: "@devconvert",
  keywords: [
    "json converter",
    "typescript converter",
    "yaml converter",
    "developer tools",
    "free online tools",
  ],

  // ── Google AdSense ───────────────────────────────────────────────────────
  // 1. ตั้ง enabled = true เมื่อได้รับ approve จาก Google AdSense 
  // 3. เปลี่ยน slotIds ให้ตรงกับ ad unit ที่สร้างใน AdSense dashboard
  adsense: {
    enabled: false,
    publisherId: "ca-pub-2723243675416986",
    slots: {
      topLeaderboard: "1234567890", // 728x90 บนสุด
      bottomLeaderboard: "2345678901", // 728x90 ล่างสุด
      sideRectangle: "3456789012", // 300x250 ด้านข้าง
      converterTop: "4567890123", // บนหน้า converter
      converterBottom: "5678901234", // ล่างหน้า converter
    },
  },

  // ── Editor ───────────────────────────────────────────────────────────────
  editor: {
    fontSize: 13,
    tabSize: 2,
    autoConvertDebounceMs: 350, // หน่วงกี่ ms ก่อนแปลงอัตโนมัติ
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  },

  // ── Theme ────────────────────────────────────────────────────────────────
  theme: {
    defaultTheme: "dark" as "dark" | "light",
    storageKey: "devconvert-theme",
    // Primary color — เปลี่ยนที่นี่ที่เดียวเพื่อเปลี่ยนทั้งระบบ
    primaryColor: "#1677ff",
  },

  // ── i18n ─────────────────────────────────────────────────────────────────
  i18n: {
    defaultLocale: "en" as const,
    storageKey: "devconvert-locale",
    // ภาษาที่รองรับ — เพิ่มที่นี่เพื่อขยายในอนาคต
    supportedLocales: ["en", "th", "zh", "ja"] as const,
    // Map browser language prefix → locale key
    // ภาษาที่ไม่อยู่ใน map นี้จะ fallback เป็น defaultLocale
    browserLanguageMap: {
      en: "en",
      th: "th",
      // เพิ่ม mapping ตรงนี้เมื่อต้องการรองรับภาษาใหม่
      // zh: 'zh',
      // ja: 'ja',
    } as Record<string, string>,
  },

  // ── Navigation ───────────────────────────────────────────────────────────
  nav: {
    scrollRestorationMode: "manual" as ScrollRestoration,
  },
} as const;

export type AppConfig = typeof APP_CONFIG;
