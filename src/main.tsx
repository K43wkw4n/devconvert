import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { APP_CONFIG } from "./config/app.config";
import "./styles/global.css";

// ตั้ง scroll restoration ตาม config
// 'manual' = ScrollToTop component จัดการเอง
// กดกลับ (back) → browser จะ restore ตำแหน่งเดิมให้
if ("scrollRestoration" in history) {
  history.scrollRestoration = APP_CONFIG.nav.scrollRestorationMode;
}

const root = document.getElementById("root")!;
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
