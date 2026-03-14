import { type ReactNode } from 'react'
import { Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import SEOHead from '@/components/SEOHead'
import { APP_CONFIG } from '@/config/app.config'
import { buildPath } from '@/routes'

interface Section {
  title: string
  content: ReactNode
}

interface LegalPageProps {
  title: string
  lastUpdated: string
  lastUpdatedLabel: string
  sections: Section[]
  seoDescription: string
  canonicalPath: string
}

export default function LegalPage({
  title, lastUpdated, lastUpdatedLabel,
  sections, seoDescription, canonicalPath,
}: LegalPageProps) {
  const navigate = useNavigate()

  return (
    <>
      <SEOHead
        title={`${title} — ${APP_CONFIG.name}`}
        description={seoDescription}
        canonicalPath={canonicalPath}
      />

      <div className="app-content" style={{ maxWidth: 800 }}>
        <Breadcrumb
          style={{ marginBottom: 24 }}
          items={[
            { title: <HomeOutlined onClick={() => navigate(buildPath.home())} style={{ cursor: 'pointer', color: 'var(--color-text-secondary)' }} /> },
            { title: <span style={{ color: 'var(--color-text-secondary)' }}>{title}</span> },
          ]}
        />

        {/* Header */}
        <div style={{ marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--color-border)' }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 8px' }}>
            {title}
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 13, margin: 0 }}>
            {lastUpdatedLabel}: {lastUpdated}
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 style={{
                fontSize: 18, fontWeight: 700, color: 'var(--color-text)',
                margin: '0 0 12px', paddingBottom: 8,
                borderBottom: '1px solid var(--color-border)',
              }}>
                {section.title}
              </h2>
              <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85, fontSize: 14.5 }}>
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}

// ── Helper components for legal content ──────────────────────────────────────

export function LegalParagraph({ children }: { children: ReactNode }) {
  return <p style={{ margin: '0 0 12px' }}>{children}</p>
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: '8px 0', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 6 }}>
      {items.map((item, i) => (
        <li key={i} style={{ lineHeight: 1.7 }}>{item}</li>
      ))}
    </ul>
  )
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
    >
      {children}
    </a>
  )
}

export function LegalHighlight({ children }: { children: ReactNode }) {
  return (
    <div style={{
      margin: '12px 0',
      padding: '12px 16px',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderLeft: '3px solid var(--color-primary)',
      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
      fontSize: 14,
    }}>
      {children}
    </div>
  )
}
