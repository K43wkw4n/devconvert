import { APP_CONFIG } from "@/config/app.config";
import { useI18n } from "@/contexts/I18nContext";
import { buildPath } from "@/routes";
import { useNavigate } from "react-router-dom";

// Popular tool links — เพิ่มที่นี่หากต้องการเพิ่ม footer links
const FOOTER_LINKS = [
  {
    label: "JSON → TypeScript",
    path: buildPath.converter("json-to-typescript"),
  },
  { label: "JSON → YAML", path: buildPath.converter("json-to-yaml") },
  { label: "Base64 Encode", path: buildPath.converter("base64-encode") },
  { label: "Markdown → HTML", path: buildPath.converter("markdown-to-html") },
  { label: "TS → JS", path: buildPath.converter("typescript-to-javascript") },
  { label: "JWT Decode", path: buildPath.converter("jwt-decode") },
];

export default function AppFooter() {
  const { t } = useI18n();
  const navigate = useNavigate();

  return (
    <footer className="app-footer">
      {/* Brand */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div
          style={{
            fontWeight: 800,
            fontSize: 18,
            color: "var(--color-text)",
            cursor: "pointer",
            marginBottom: 4,
          }}
          onClick={() => navigate(buildPath.home())}
        >
          <span style={{ opacity: 0.5 }}>&lt;/&gt;</span>{" "}
          {APP_CONFIG.name.slice(0, 3)}
          <span style={{ color: "var(--color-primary)" }}>
            {APP_CONFIG.name.slice(3)}
          </span>
        </div>
        <div
          style={{
            fontSize: 12,
            color: "var(--color-text-muted)",
            margin: "0 auto",
          }}
        >
          {t.footerNote}
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-links">
          {FOOTER_LINKS.map((link) => (
            <a key={link.path} href={link.path}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: 16,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          {/* Legal links */}
          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
            }}
            className="footer-legal"
          >
            <span
              onClick={() => navigate(buildPath.about())}
              style={{
                cursor: "pointer",
                fontSize: 12,
                color: "var(--color-text-muted)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              {t.about}
            </span>
            <span
              onClick={() => navigate(buildPath.privacy())}
              style={{
                cursor: "pointer",
                fontSize: 12,
                color: "var(--color-text-muted)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              {t.footerPrivacy}
            </span>
            <span
              onClick={() => navigate(buildPath.terms())}
              style={{
                cursor: "pointer",
                fontSize: 12,
                color: "var(--color-text-muted)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              {t.footerTerms}
            </span>
            <a
              href={`mailto:${APP_CONFIG.contactEmail}`}
              style={{
                fontSize: 12,
                color: "var(--color-text-muted)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              {t.footerContact}
            </a>
          </div>

          {/* Copyright */}
          <div
            style={{
              fontSize: 12,
              color: "var(--color-text-muted)",
              width: "100%",
            }}
            className="footer-copyright"
          >
            © {new Date().getFullYear()} {APP_CONFIG.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
