import { lazy, type ComponentType } from "react";

// ─── Lazy-loaded pages ────────────────────────────────────────────────────────
// เพิ่ม page ใหม่ที่นี่ที่เดียว แล้วมันจะถูก code-split อัตโนมัติ
const HomePage = lazy(() => import("@/pages/HomePage"));
const ConverterPage = lazy(() => import("@/pages/ConverterPage"));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'))
const TermsPage         = lazy(() => import('@/pages/TermsPage'))

// ─── Route Definition ─────────────────────────────────────────────────────────
export interface RouteConfig {
  /** URL path — ใช้ :param สำหรับ dynamic segments */
  path: string;
  /** Component ที่จะ render */
  component: ComponentType;
  /** ถ้า true = redirect ไป path อื่น */
  redirect?: string;
  /** SEO / เอาไว้อ้างอิงในโค้ดอื่น */
  name: string;
}

export const ROUTES = {
  // ── Static routes ──────────────────────────────────────────────────────────
  HOME: {
    path: "/",
    component: HomePage,
    name: "home",
  },
  PRIVACY: {
    path: "/privacy",
    component: PrivacyPolicyPage,
    name: "privacy",
  },
  TERMS: {
    path: "/terms",
    component: TermsPage,
    name: "terms",
  },
  // ── Dynamic routes ─────────────────────────────────────────────────────────
  // :slug จะ match ทั้ง canonical IDs เช่น /json-to-typescript
  // และ aliases เช่น /json2ts ซึ่ง ConverterPage จะ resolve เอง
  CONVERTER: {
    path: "/:slug",
    component: ConverterPage,
    name: "converter",
  },

  // ── Fallback ───────────────────────────────────────────────────────────────
  // route ที่ไม่ match จะถูก redirect กลับ HOME
  FALLBACK: {
    path: "*",
    redirect: "/",
    name: "fallback",
  },
} as const;

// ─── Type Helpers ─────────────────────────────────────────────────────────────
export type RouteName = keyof typeof ROUTES;

/** Build path string — เอาไว้สร้าง URL แบบ type-safe */
export const buildPath = {
  home: () => ROUTES.HOME.path,
  converter: (slug: string) => `/${slug}`,
  privacy: () => ROUTES.PRIVACY.path,
  terms: () => ROUTES.TERMS.path,
};
