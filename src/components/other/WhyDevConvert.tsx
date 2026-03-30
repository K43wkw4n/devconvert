// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — Why DevConvert: Feature cards grid
// เหมาะวางต่อจาก hero หรือเป็น standalone section
// ─────────────────────────────────────────────────────────────────────────────

import { useI18n } from "@/contexts/I18nContext";

const WHY_FEATURES = [
  {
    icon: "🔒",
  },
  {
    icon: "⚡",
  },
  {
    icon: "🛠️",
  },
  {
    icon: "🌐",
  },
  {
    icon: "🎨",
  },
  {
    icon: "💾",
  },
];


export function WhyDevConvert() {
  const { t } = useI18n()

  type WhyFeatTitleKey = `whyFeat${1 | 2 | 3 | 4 | 5 | 6}Title`;
  type WhyFeatBodyKey = `whyFeat${1 | 2 | 3 | 4 | 5 | 6}Body`;

  return (
    <section>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 800,
            color: "var(--color-text)",
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
          }}
          className="text-newline"
        >
          {t.whyTitle}
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--color-text-secondary)",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          {t.whySubtitle}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {WHY_FEATURES.map((f, i) => (
          <div
            key={t[`whyFeat${i + 1}Title` as WhyFeatTitleKey]}
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: "24px 24px",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "var(--color-primary)";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "var(--color-border)";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(0)";
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "var(--color-text)",
                margin: "0 0 10px",
              }}
            >
              {t[`whyFeat${i + 1}Title` as WhyFeatTitleKey]}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {t[`whyFeat${i + 1}Body` as WhyFeatBodyKey]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
