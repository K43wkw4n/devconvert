import { useState, useMemo, useEffect } from 'react'
import { Divider, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import SEOHead from '@/components/SEOHead'
import ConverterCard from '@/components/ConverterCard'
import AdBanner from '@/components/AdBanner'
import { useI18n } from '@/contexts/I18nContext'
import CONVERTERS, { ALL_CATEGORIES, POPULAR_CONVERTERS } from '@/config/converters.config'
import { WhyDevConvert } from '@/components/other/WhyDevConvert'
import { HowItWorks } from '@/components/other/HowItWorks'
import { ToolCategories } from '@/components/other/ToolCategories'
import { PrivacyPerformance } from '@/components/other/PrivacyPerformance'
import { UseCases } from '@/components/other/UseCases'

const DividerBetweenSection = ({ name }: { name: string }) => (
  <Divider orientation='center'
    style={{
      marginTop: 64
    }}
  ><p
    style={{
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--color-primary)",
      marginBottom: 12,
    }}
  >
      {name}
    </p></Divider>)

export default function HomePage() {
  const [query, setQuery] = useState('')
  const { t } = useI18n()

  const [tick, setTick] = useState(0);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return null
    return CONVERTERS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q) ||
        c.seoKeywords.some((k) => k.includes(q))
    )
  }, [query])

  const examples = [
    { from: "JSON", to: "TypeScript", label: "json-to-typescript" },
    { from: "YAML", to: "JSON", label: "yaml-to-json" },
    { from: "CSV", to: "JSON", label: "csv-to-json" },
    { from: "Markdown", to: "HTML", label: "markdown-to-html" },
    { from: "HEX", to: "RGB", label: "hex-to-rgb" },
  ];

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % examples.length), 2500);
    return () => clearInterval(id);
  }, []);

  const current = examples[tick];

  return (
    <>
      <SEOHead
        title="DevConvert – Free Online Code & Data Converter for Developers"
        description="30+ free online developer tools. Convert JSON, YAML, TypeScript, Markdown, Base64, and more – instantly in your browser. No signup, no install."
        keywords={['json converter', 'typescript converter', 'yaml converter', 'developer tools', 'free online tools']}
        canonicalPath="/"
      />

      {/* Top Ad Banner */}
      <AdBanner slot="topLeaderboard" format="leaderboard" style={{ marginBottom: -40 }} />

      <div className="app-content">
        {/* Hero */}
        <section className="home-hero">
          {/* <div className="hero-badge">{t.heroBadge}</div> */}

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--color-surface-2, rgba(255,255,255,0.06))",
              border: "1px solid var(--color-border)",
              borderRadius: 100,
              padding: "6px 14px",
              fontSize: 13,
              color: "var(--color-text-secondary)",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
                animation: "pulse-dot 1.8s ease-in-out infinite",
              }}
            />
            {t.privacyNote} 
          </div>

          <h1 className="hero-title">
            {t.heroTitle1}<br />
            <span className="highlight">{t.heroTitle2}</span>
          </h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>

          {/* Live conversion badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--color-surface-2, rgba(255,255,255,0.05))",
              border: "1px solid var(--color-border)",
              borderRadius: 10,
              padding: "10px 20px",
              marginBottom: 18,
              fontSize: 15,
              fontFamily: "monospace",
              transition: "all 0.3s ease",
            }}
          >
            <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>
              {current.from}
            </span>
            <span style={{ color: "var(--color-text-muted)", fontSize: 12 }}>→</span>
            <span style={{ color: "var(--color-text)", fontWeight: 700 }}>
              {current.to}
            </span>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">35+</span>
              <span className="hero-stat-label">{t.statConverters}</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">0ms</span>
              <span className="hero-stat-label">{t.statLatency}</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">100%</span>
              <span className="hero-stat-label">{t.statClientSide}</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">Free</span>
              <span className="hero-stat-label">{t.statFree}</span>
            </div>
          </div>

          {/* Search */}
          <div className="search-wrapper">
            <Input
              prefix={<SearchOutlined />}
              placeholder={t.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              allowClear
              size="large"
            />
          </div>

          {/* Search Results */}
          {filtered && (
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>
                {t.searchResults(filtered.length, query)}
              </div>
              {filtered.length > 0 ? (
                <div className="category-grid">
                  {filtered.map((c) => (
                    <ConverterCard key={c.id} converter={c} />
                  ))}
                </div>
              ) : (
                <p style={{ color: 'var(--color-text-muted)' }}>{t.noResults}</p>
              )}
            </div>
          )}

          {/* Popular Converters (when not searching) */}
          {!filtered && (
            <>
              <div className="section-label">{t.mostPopular}</div>
              <div className="popular-grid">
                {POPULAR_CONVERTERS.map((c) => (
                  <ConverterCard key={c.id} converter={c} />
                ))}
              </div>
            </>
          )}
        </section>

        {/* All Categories */}
        {!filtered && (
          <>
            {ALL_CATEGORIES.map((cat) => {
              const converters = CONVERTERS.filter((c) => c.category === cat.key)
              if (!converters.length) return null
              return (
                <section key={cat.key} className="category-group">
                  <div className="section-label">
                    {cat.emoji} {cat.label}
                  </div>
                  <div className="category-grid">
                    {converters.map((c) => (
                      <ConverterCard key={c.id} converter={c} />
                    ))}
                  </div>
                </section>
              )
            })}
          </>
        )}

        <DividerBetweenSection name={t.whyTitleDivider} />
        <WhyDevConvert />

        <DividerBetweenSection name={t.howTitleDivider} />
        <HowItWorks />

        <DividerBetweenSection name={t.catTitleDivider} />
        <ToolCategories />

        <DividerBetweenSection name={t.ppTitleDivider} />
        <PrivacyPerformance />

        <DividerBetweenSection name={t.useCaseTitleDivider} />
        <UseCases />

        
      </div>
    </>
  )
}
