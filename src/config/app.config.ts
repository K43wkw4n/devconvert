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
  ogImage: "https://potamiya.com/preview.png",
  twitterHandle: "@devconvert",
  keywords: [
    "json converter",
    "typescript converter",
    "yaml converter",
    "developer tools",
    "free online tools",
  ],

  // ── Ad network ────────────────────────────────────────────────────────────
  ads: {
    enabled: true,
    units: {
      rectangle300x250: {
        type: "iframe",
        key: "37cac6812dcf6b22bcedeaa0409ce312",
        width: 300,
        height: 250,
      },
      mobile320x50: {
        type: "iframe",
        key: "5db206ec80ff9f7f1bb714d0e46450ff",
        width: 320,
        height: 50,
      },
      leaderboard728x90: {
        type: "iframe",
        key: "cde01e1f28ff026095f7c2d5b8456292",
        width: 728,
        height: 90,
      },
      nativeBanner: {
        type: "native",
        key: "2d767644960a122557901560ccbdf09e",
        minHeight: 250,
      },
    },
    slots: {
      topLeaderboard: "leaderboard728x90",
      bottomLeaderboard: "leaderboard728x90",
      sideRectangle: "rectangle300x250",
      converterTop: "leaderboard728x90",
      converterBottom: "leaderboard728x90",
      mobileBanner: "mobile320x50",
      nativeBanner: "nativeBanner",
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
