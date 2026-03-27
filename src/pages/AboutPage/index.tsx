import { useNavigate } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import SEOHead from '@/components/SEOHead'
import { APP_CONFIG } from '@/config/app.config'
import { buildPath } from '@/routes'
import { useI18n } from '@/contexts/I18nContext'

export default function AboutPage() {
    const navigate = useNavigate()

    const { t } = useI18n()

    return (
        <>
            <SEOHead
                title={`About — ${APP_CONFIG.name}`}
                description="DevConvert is a free collection of 35+ online developer tools. Convert JSON, YAML, TypeScript, Base64, colors, and more — all running locally in your browser."
                canonicalPath="/about"
            />
            <div className="app-content" style={{ maxWidth: 800 }}>
                <Breadcrumb
                    style={{ marginBottom: 24 }}
                    items={[
                        { title: <HomeOutlined onClick={() => navigate(buildPath.home())} style={{ cursor: 'pointer', color: 'var(--color-text-secondary)' }} /> },
                        { title: <span style={{ color: 'var(--color-text-secondary)' }}>{t.aboutTitle}</span> },
                    ]}
                />

                <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--color-text)', marginBottom: 8 }}>
                    {t.aboutTitle} {APP_CONFIG.name}
                </h1>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
                    {t.aboutTitleDescription}
                </p>

                {[
                    {
                        title: t.aboutWhatIs,
                        content: t.aboutWahtIsDescription,
                    },
                    {
                        title: t.aboutWhyBuild,
                        content: t.aboutWhyBuildDescription,
                    },
                    {
                        title: t.aboutPrivacy,
                        content: t.aboutPrivacyDescription,
                    },
                    {
                        title: t.aboutUcanDo,
                        content: t.aboutUcanDoDescription,
                    },
                    {
                        title: t.aboutAlwaysFree,
                        content: t.aboutAlwaysFreeDescription,
                    },
                    {
                        title: t.aboutContact,
                        content: t.aboutContactDescription,
                        extra: (

                            <a href={`mailto:${APP_CONFIG.contactEmail}`}
                                style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}
                            >
                                {APP_CONFIG.contactEmail}
                            </a>
                        ),
                    },
                ].map((section) => (
                    <section key={section.title} style={{ marginBottom: 36 }}>
                        <h2 style={{
                            fontSize: 20, fontWeight: 700, color: 'var(--color-text)',
                            marginBottom: 12, paddingBottom: 8,
                            borderBottom: '1px solid var(--color-border)',
                        }}>
                            {section.title}
                        </h2>
                        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85, fontSize: 15, margin: 0 }}>
                            {section.content}
                        </p>
                        {section.extra && <div style={{ marginTop: 8 }}>{section.extra}</div>}
                    </section>
                ))}
            </div >
        </>
    )
}