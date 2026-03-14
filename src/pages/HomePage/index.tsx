import { useState, useMemo } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import SEOHead from '@/components/SEOHead'
import ConverterCard from '@/components/ConverterCard'
import AdBanner from '@/components/AdBanner'
import { useI18n } from '@/contexts/I18nContext'
import CONVERTERS, { ALL_CATEGORIES, POPULAR_CONVERTERS } from '@/config/converters.config'

export default function HomePage() {
  const [query, setQuery] = useState('')
  const { t } = useI18n()

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
          <h1 className="hero-title">
            {t.heroTitle1}<br />
            <span className="highlight">{t.heroTitle2}</span>
          </h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>

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
      </div>
    </>
  )
}
