import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import path from "path";

export default defineConfig({
  server: {
    open: true,
    allowedHosts: true,
  },
  plugins: [react(), compression({ algorithm: "gzip" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-antd": ["antd", "@ant-design/icons"],
          "vendor-monaco": ["@monaco-editor/react", "monaco-editor"],
          "vendor-converters": [
            "js-yaml",
            "fast-xml-parser",
            "marked",
            "turndown",
          ],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["js-yaml", "fast-xml-parser", "marked", "turndown", "jwt-decode"],
  },
});
