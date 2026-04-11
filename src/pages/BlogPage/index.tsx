import { useNavigate } from 'react-router-dom'
import { Breadcrumb, Tag, Card, Row, Col, Typography, Space, Badge } from 'antd'
import { HomeOutlined, ReadOutlined, ClockCircleOutlined, ArrowRightOutlined } from '@ant-design/icons'
import SEOHead from '@/components/SEOHead'
import { APP_CONFIG } from '@/config/app.config'
import { buildPath } from '@/routes'
import { useI18n } from '@/contexts/I18nContext'

const { Title, Text, Paragraph } = Typography

// ─── Types ──────────────────────────────────────────────────────────────────── 

interface BlogContent {
    title: string
    description: string
    sections: { heading: string; paragraphs: string[] }[]
}

export interface Blog {
    id: number
    slug: string
    category: string
    publishedAt: string
    readingMinutes: number
    coverEmoji: string
    relatedTools: string[]
    content: BlogContent
}

// ─── Category config ──────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
    json: '#f59e0b',
    typescript: '#3b82f6',
    yaml: '#10b981',
    encoding: '#8b5cf6',
    css: '#ec4899',
    utility: '#6b7280',
    colors: '#f97316',
    markup: '#14b8a6',
    data: '#06b6d4',
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function BlogListPage() {
    const navigate = useNavigate()
    const { t } = useI18n()
    const blogs = t.blogs as Blog[]

    // Group by category for section display
    const featured = blogs.slice(0, 3)
    const rest = blogs.slice(3)

    return (
        <>
            <SEOHead
                title={`Blog — ${APP_CONFIG.name}`}
                description="Developer guides, tutorials, and technical deep-dives covering JSON, TypeScript, YAML, Base64, CSS, and more. Written for developers by developers."
                canonicalPath="/blog"
            />

            <div className="app-content" style={{ maxWidth: 960 }}>
                {/* ── Breadcrumb ── */}
                <Breadcrumb
                    style={{ marginBottom: 32 }}
                    items={[
                        {
                            title: (
                                <HomeOutlined
                                    onClick={() => navigate(buildPath.home())}
                                    style={{ cursor: 'pointer', color: 'var(--color-text-secondary)' }}
                                />
                            ),
                        },
                        {
                            title: (
                                <span style={{ color: 'var(--color-text-secondary)' }}>
                                    {t.blogTitle ?? 'Blog'}
                                </span>
                            ),
                        },
                    ]}
                />

                {/* ── Page header ── */}
                <div style={{ marginBottom: 48 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <ReadOutlined style={{ fontSize: 28, color: 'var(--color-primary)' }} />
                        <Title level={1} style={{ margin: 0, fontSize: 36, fontWeight: 800, color: 'var(--color-text)' }}>
                            {t.developerBlog ?? 'Developer Blog'}
                        </Title>
                    </div>
                    <Paragraph style={{ color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                        {t.blogDescription ?? 'Technical guides and deep-dives on JSON, TypeScript, YAML, encoding, CSS, and the tools that power modern development workflows.'}
                    </Paragraph>
                </div>

                {/* ── Featured row (first 3 blogs) ── */}
                <div style={{ marginBottom: 48 }}>
                    <Text style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', display: 'block', marginBottom: 16 }}>
                        {t.blogFeaturedArticles ?? 'Featured Articles'}
                    </Text>
                    <Row gutter={[20, 20]}>
                        {featured.map((blog) => {
                            const tr = blog.content
                            const color = CATEGORY_COLORS[blog.category] ?? '#6b7280'
                            return (
                                <Col xs={24} md={8} key={blog.id}>
                                    <Card
                                        hoverable
                                        onClick={() => navigate(`/blog/${blog.slug}`)}
                                        style={{
                                            height: '100%',
                                            cursor: 'pointer',
                                            border: '1px solid var(--color-border)',
                                            background: 'var(--color-bg-elevated)',
                                            borderRadius: 12,
                                            transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                                        }}
                                        styles={{ body: { padding: 24 } }}
                                        onMouseEnter={e => {
                                            const el = e.currentTarget as HTMLElement
                                            el.style.transform = 'translateY(-3px)'
                                            el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'
                                        }}
                                        onMouseLeave={e => {
                                            const el = e.currentTarget as HTMLElement
                                            el.style.transform = 'translateY(0)'
                                            el.style.boxShadow = 'none'
                                        }}
                                    >
                                        {/* Emoji */}
                                        <div style={{
                                            fontSize: 32,
                                            marginBottom: 16,
                                            width: 56,
                                            height: 56,
                                            borderRadius: 12,
                                            background: `${color}18`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            {blog.coverEmoji}
                                        </div>

                                        {/* Category tag */}
                                        <Tag
                                            style={{
                                                background: `${color}18`,
                                                border: `1px solid ${color}40`,
                                                color,
                                                borderRadius: 6,
                                                fontWeight: 600,
                                                fontSize: 11,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                marginBottom: 10,
                                            }}
                                        >
                                            {blog.category}
                                        </Tag>

                                        {/* Title */}
                                        <Title level={4} style={{
                                            color: 'var(--color-text)',
                                            fontSize: 15,
                                            fontWeight: 700,
                                            lineHeight: 1.45,
                                            marginBottom: 10,
                                            marginTop: 0,
                                        }}>
                                            {tr?.title}
                                        </Title>

                                        {/* Description */}
                                        <Text style={{
                                            color: 'var(--color-text-secondary)',
                                            fontSize: 13,
                                            lineHeight: 1.7,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical' as const,
                                            overflow: 'hidden',
                                        }}>
                                            {tr?.description}
                                        </Text>

                                        {/* Footer */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: 20,
                                            paddingTop: 16,
                                            borderTop: '1px solid var(--color-border)',
                                        }}>
                                            <Space size={4}>
                                                {/* <ClockCircleOutlined style={{ fontSize: 12, color: 'var(--color-text-secondary)' }} />
                                                <Text style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
                                                    {blog?.readingMinutes}
                                                    {t.blogMinRead ?? 'min read'}
                                                </Text> */}
                                                <div></div>
                                            </Space>
                                            <ArrowRightOutlined style={{ fontSize: 12, color: color }} />
                                        </div>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>

                {/* ── Rest of blogs as list ── */}
                <div>
                    <Text style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', display: 'block', marginBottom: 16 }}>
                        {t.blogAllArticles ?? 'All Articles'}
                    </Text>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {rest.map((blog) => {
                            const tr = blog.content
                            const color = CATEGORY_COLORS[blog.category] ?? '#6b7280'
                            return (
                                <div
                                    key={blog.id}
                                    onClick={() => navigate(`/blog/${blog.slug}`)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 16,
                                        padding: '16px 20px',
                                        borderRadius: 10,
                                        cursor: 'pointer',
                                        transition: 'background 0.15s ease',
                                        border: '1px solid transparent',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement
                                        el.style.background = 'var(--color-bg-elevated)'
                                        el.style.borderColor = 'var(--color-border)'
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement
                                        el.style.background = 'transparent'
                                        el.style.borderColor = 'transparent'
                                    }}
                                >
                                    {/* Emoji icon */}
                                    <div style={{
                                        fontSize: 20,
                                        width: 40,
                                        height: 40,
                                        borderRadius: 8,
                                        background: `${color}18`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        {blog.coverEmoji}
                                    </div>

                                    {/* Content */}
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                                            <Tag style={{
                                                background: `${color}15`,
                                                border: `1px solid ${color}35`,
                                                color,
                                                borderRadius: 4,
                                                fontWeight: 600,
                                                fontSize: 10,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                padding: '0 6px',
                                                lineHeight: '18px',
                                                margin: 0,
                                            }}>
                                                {blog.category}
                                            </Tag>
                                            <Text style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                                                {/* {formatDate(blog.publishedAt, currentLang)} */}
                                            </Text>
                                            <Text style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                                                {/* · {blog.readingMinutes} */}
                                                {/* {t.blogMinRead ?? 'min read'} */}
                                            </Text>
                                        </div>
                                        <Text strong style={{ color: 'var(--color-text)', fontSize: 14, display: 'block', marginBottom: 4, lineHeight: 1.45 }}>
                                            {tr.title}
                                        </Text>
                                        <Text style={{
                                            color: 'var(--color-text-secondary)',
                                            fontSize: 13,
                                            lineHeight: 1.6,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical' as const,
                                            overflow: 'hidden',
                                        }}>
                                            {tr.description}
                                        </Text>
                                    </div>

                                    <ArrowRightOutlined style={{ fontSize: 12, color: 'var(--color-text-secondary)', flexShrink: 0, marginTop: 4 }} />
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* ── Total count ── */}
                <div style={{
                    marginTop: 40,
                    padding: '16px 20px',
                    borderRadius: 10,
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                }}>
                    <Badge count={blogs.length} style={{ backgroundColor: 'var(--color-primary)' }} />
                    <Text style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}>
                        {/* {t.blogTotalArticles ?? `${blogs.length} articles covering all ${APP_CONFIG.name} tools`} */}
                        {/* {`${blogs.length} articles covering all ${APP_CONFIG.name} tools`} */}
                        {`${blogs.length} ${t.totalArticles}`}
                    </Text>
                </div>
            </div>
        </>
    )
}
