import { Suspense, type ReactNode } from "react";
import { Layout, ConfigProvider, Spin, theme } from "antd";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import AppHeader from "@/components/Header";
import AppFooter from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { I18nProvider } from "@/contexts/I18nContext";
import { ROUTES } from "@/routes";
import { ALIAS_MAP } from "@/config/converters.config";
import { APP_CONFIG } from "@/config/app.config";

const { Content } = Layout;

// ─── Alias Redirect ───────────────────────────────────────────────────────────
// ถ้า slug เป็น alias เช่น /json2ts จะ redirect ไป canonical /json-to-typescript
// ถ้าไม่ใช่ alias ก็ render ConverterPage ตามปกติ
function ConverterRoute() {
  const { slug } = useParams<{ slug: string }>();
  const canonical = ALIAS_MAP.get(slug ?? "");
  if (canonical) return <Navigate to={`/${canonical}`} replace />;
  const { component: ConverterPage } = ROUTES.CONVERTER;
  return <ConverterPage />;
}

// ─── Page Loading Fallback ────────────────────────────────────────────────────
function PageLoader() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin size="large" />
    </div>
  );
}

// ─── Route Renderer ───────────────────────────────────────────────────────────
// อ่าน ROUTES config แล้ว render — เพิ่ม route ใหม่ใน src/routes/index.tsx เท่านั้น
function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Home */}
        <Route path={ROUTES.HOME.path} element={<ROUTES.HOME.component />} />
        <Route
          path={ROUTES.PRIVACY.path}
          element={<ROUTES.PRIVACY.component />}
        />
        <Route path={ROUTES.ABOUT.path} element={<ROUTES.ABOUT.component />} />
        <Route path={ROUTES.TERMS.path} element={<ROUTES.TERMS.component />} />

        {/* Converter — handles both canonical IDs and aliases */}
        <Route path={ROUTES.CONVERTER.path} element={<ConverterRoute />} />

        {/* Fallback — redirect ทุก path ที่ไม่รู้จักกลับ home */}
        <Route
          path={ROUTES.FALLBACK.path}
          element={<Navigate to={ROUTES.FALLBACK.redirect!} replace />}
        />
      </Routes>
    </Suspense>
  );
}

// ─── Themed App ───────────────────────────────────────────────────────────────
// แยก ThemedApp ออกมาเพื่อให้ใช้ useTheme ได้ (ThemeProvider ต้องอยู่ข้างนอก)
function ThemedApp() {
  const { theme: appTheme } = useTheme();
  const isDark = appTheme === "dark";
  const { primaryColor } = APP_CONFIG.theme;

  // Ant Design theme config — ค่าอื่น ๆ อยู่ใน app.config.ts
  const antdTheme = {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: primaryColor,
      colorBgBase: isDark ? "#111827" : "#ffffff",
      colorBgContainer: isDark ? "#111827" : "#ffffff",
      colorBgElevated: isDark ? "#1a2236" : "#ffffff",
      colorBorder: isDark ? "#1e2d47" : "#d1daf0",
      colorText: isDark ? "#e2e8f0" : "#0f1729",
      colorTextSecondary: isDark ? "#94a3b8" : "#3a4d6e",
      colorTextPlaceholder: isDark ? "#4a5568" : "#8899b8",
      borderRadius: 8,
      fontFamily:
        APP_CONFIG.editor.fontFamily
          .split(",")
          .slice(-1)[0]
          .trim()
          .replace(/['"]/g, "") || "system-ui",
    },
    components: {
      Select: {
        colorBgContainer: isDark ? "#1a2236" : "#ffffff",
        optionSelectedBg: isDark
          ? "rgba(22,119,255,0.15)"
          : "rgba(22,119,255,0.08)",
      },
      Dropdown: {
        colorBgElevated: isDark ? "#1a2236" : "#ffffff",
      },
    },
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <Layout style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
        <ScrollToTop />
        <AppHeader />
        <Content>
          <AppRoutes />
        </Content>
        <AppFooter />
      </Layout>
    </ConfigProvider>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
// Context providers วางซ้อนกัน — ThemeProvider ต้องอยู่นอกสุด
export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <ThemedApp />
      </I18nProvider>
    </ThemeProvider>
  );
}
