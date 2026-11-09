import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { APP_CONFIG } from "@/config/app.config";
import { buildPath } from "@/routes";
import { useI18n } from "@/contexts/I18nContext";

export default function ContactPage() {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <>
      <SEOHead
        title={`${t.contactTitle} — ${APP_CONFIG.name}`}
        description={t.contactDescription}
        canonicalPath="/contact"
      />
      <div className="app-content" style={{ maxWidth: 800 }}>
        <Breadcrumb
          style={{ marginBottom: 24 }}
          items={[
            {
              title: (
                <HomeOutlined
                  onClick={() => navigate(buildPath.home())}
                  style={{
                    cursor: "pointer",
                    color: "var(--color-text-secondary)",
                  }}
                />
              ),
            },
            {
              title: (
                <span style={{ color: "var(--color-text-secondary)" }}>
                  {t.contactTitle}
                </span>
              ),
            },
          ]}
        />
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "var(--color-text)",
            marginBottom: 12,
          }}
        >
          {t.contactTitle}
        </h1>
        <p
          style={{
            color: "var(--color-text-secondary)",
            lineHeight: 1.8,
            marginBottom: 24,
          }}
        >
          {t.contactDescription}
        </p>
        <p style={{ color: "var(--color-text-secondary)" }}>
          {t.contactEmailLabel}:{" "}
          <a
            href={`mailto:${APP_CONFIG.contactEmail}`}
            style={{ color: "var(--color-primary)" }}
          >
            {APP_CONFIG.contactEmail}
          </a>
        </p>
        <p style={{ color: "var(--color-text-secondary)" }}>
          <a
            href={APP_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-primary)" }}
          >
            {t.contactGithub}
          </a>
        </p>
      </div>
    </>
  );
}
