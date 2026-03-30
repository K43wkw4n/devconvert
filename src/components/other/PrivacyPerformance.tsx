import { useI18n } from "@/contexts/I18nContext";

export function PrivacyPerformance() {
  const { t } = useI18n()

  const stats = [
    {
      value: "0",
      unit: "ms",
      label: t.ppStat1Label,
      sub: t.ppStat1Sub,
    },
    {
      value: "100",
      unit: "%",
      label: t.ppStat2Label,
      sub: t.ppStat2Sub,
    },
    {
      value: "35",
      unit: "+",
      label: t.ppStat3Label,
      sub: t.ppStat3Sub,
    },
    {
      value: "∞",
      unit: "",
      label: t.ppStat4Label,
      sub: t.ppStat4Sub,
    },
  ];

  const checkItems = [
    t.ppCheck1,
    t.ppCheck2,
    t.ppCheck3,
    t.ppCheck4
  ];

  return (
    <>
      <style>{`
        .pp-section {
          padding: 32px 24px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
        }
        .pp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .pp-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .pp-stat-card {
          background: var(--color-surface-2, var(--color-bg));
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 20px 16px;
          text-align: center;
        }
        .pp-stat-value {
          font-size: 36px;
          font-weight: 900;
          color: var(--color-primary);
          line-height: 1;
          margin-bottom: 4px;
          letter-spacing: -0.03em;
        }
        .pp-stat-unit {
          font-size: 20px;
        }
        .pp-stat-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 4px;
        }
        .pp-stat-sub {
          font-size: 11px;
          color: var(--color-text-muted);
          line-height: 1.4;
        }

        /* Tablet: stack to single column */
        @media (max-width: 768px) {
          .pp-section {
            padding: 28px 20px;
          }
          .pp-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* Mobile: tighter spacing */
        @media (max-width: 480px) {
          .pp-section {
            padding: 24px 16px;
            border-radius: 12px;
          }
          .pp-stat-card {
            padding: 16px 12px;
          }
          .pp-stat-value {
            font-size: 28px;
          }
          .pp-stat-unit {
            font-size: 16px;
          }
          .pp-stat-label {
            font-size: 12px;
          }
          .pp-stat-sub {
            font-size: 10px;
          }
        }

        /* Very small: 2-col stats still fine, but collapse to 1-col if < 320px */
        @media (max-width: 320px) {
          .pp-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="pp-section">
        <div className="pp-grid">

          {/* Left: copy */}
          <div>
            <h2
              style={{
                fontSize: "clamp(20px, 4vw, 32px)",
                fontWeight: 800,
                color: "var(--color-text)",
                margin: "0 0 16px",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
              }}
              className="text-newline"
            >
              {t.ppTitle}
            </h2>

            <p
              style={{
                fontSize: "clamp(13px, 1.5vw, 15px)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
                margin: "0 0 20px",
              }}
            >
              {t.ppBody}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {checkItems.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: "clamp(12px, 1.4vw, 14px)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      minWidth: 18,
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="pp-stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="pp-stat-card">
                <div className="pp-stat-value">
                  {s.value}
                  <span className="pp-stat-unit">{s.unit}</span>
                </div>
                <div className="pp-stat-label">{s.label}</div>
                <div className="pp-stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}