import { useNavigate, useParams } from 'react-router-dom'
import { Breadcrumb, Tag, Typography, Space, Divider, Button, Tooltip } from 'antd'
import {
    HomeOutlined,
    ClockCircleOutlined,
    CalendarOutlined,
    ArrowLeftOutlined,
    ToolOutlined,
    ArrowRightOutlined,
    ShareAltOutlined,
} from '@ant-design/icons'
import SEOHead from '@/components/SEOHead'
import { APP_CONFIG } from '@/config/app.config'
import { buildPath } from '@/routes'
import { useI18n } from '@/contexts/I18nContext'
import { Blog } from '../BlogPage'

const { Title, Text, Paragraph } = Typography

// ─── Types ────────────────────────────────────────────────────────────────────

type LangKey = 'en' | 'th' | 'ja' | 'zh'

interface BlogSection {
    heading: string
    paragraphs: string[]
}

// ─── Category colors ──────────────────────────────────────────────────────────

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

// ─── Helpers ──────────────────────────────────────────────────────────────────

function estimateWordCount(sections: BlogSection[]): number {
    return sections.reduce((total, s) => {
        return total + s.paragraphs.reduce((t, p) => t + p.split(' ').length, 0)
    }, 0)
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BlogDetailPage() {
    const navigate = useNavigate()
    const { slug } = useParams<{ slug: string }>()
    const { t } = useI18n()

    const blogs = t.blogs as Blog[]
    const blog = blogs.find(b => b.slug === slug)

    // ── 404 state ──
    if (!blog) {
        return (
            <div className="app-content" style={{ maxWidth: 720, textAlign: 'center', paddingTop: 80 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📄</div>
                <Title level={3} style={{ color: 'var(--color-text)' }}>Article not found</Title>
                <Button type="primary" onClick={() => navigate('/blog')} icon={<ArrowLeftOutlined />}>
                    Back to Blog
                </Button>
            </div>
        )
    }

    const tr = blog.content
    const color = CATEGORY_COLORS[blog.category] ?? '#6b7280'
    const wordCount = estimateWordCount(tr.sections)

    // Sibling blogs
    const currentIndex = blogs.findIndex(b => b.slug === slug)
    const prevBlog = blogs[currentIndex - 1]
    const nextBlog = blogs[currentIndex + 1]

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: tr.title, url: window.location.href })
        } else {
            navigator.clipboard.writeText(window.location.href)
        }
    }

    return (
        <>
            <SEOHead
                title={`${tr.title} — ${APP_CONFIG.name}`}
                description={tr.description}
                canonicalPath={`/blog/${blog.slug}`}
            />

            <div className="app-content" style={{ maxWidth: 760 }}>

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
                                <span
                                    onClick={() => navigate('/blog')}
                                    style={{ cursor: 'pointer', color: 'var(--color-text-secondary)' }}
                                >
                                    {t.blogTitle ?? 'Blog'}
                                </span>
                            ),
                        },
                        {
                            title: (
                                <span style={{ color: 'var(--color-text-secondary)', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-block' }}>
                                    {tr.title}
                                </span>
                            ),
                        },
                    ]}
                />

                {/* ── Article header ── */}
                <header style={{ marginBottom: 40 }}>
                    {/* Emoji + category */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{
                            fontSize: 28,
                            width: 52,
                            height: 52,
                            borderRadius: 12,
                            background: `${color}18`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}>
                            {blog.coverEmoji}
                        </div>
                        <Tag style={{
                            background: `${color}18`,
                            border: `1px solid ${color}40`,
                            color,
                            borderRadius: 6,
                            fontWeight: 700,
                            fontSize: 11,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                        }}>
                            {blog.category}
                        </Tag>
                    </div>

                    {/* Title */}
                    <Title
                        level={1}
                        style={{
                            fontSize: 30,
                            fontWeight: 800,
                            color: 'var(--color-text)',
                            lineHeight: 1.3,
                            marginBottom: 16,
                            marginTop: 0,
                        }}
                    >
                        {tr.title}
                    </Title>

                    {/* Description */}
                    <Paragraph style={{
                        fontSize: 16,
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: 20,
                    }}>
                        {tr.description}
                    </Paragraph>

                    {/* Meta row */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 12,
                        paddingTop: 40,
                        borderTop: '1px solid var(--color-border)',
                    }}>
                        <Space size={16} wrap>
                            {/* <Space size={4}>
                                <CalendarOutlined style={{ fontSize: 13, color: 'var(--color-text-secondary)' }} />
                                <Text style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                                    {formatDate(blog.publishedAt, currentLang)}
                                </Text>
                            </Space>
                            <Space size={4}>
                                <ClockCircleOutlined style={{ fontSize: 13, color: 'var(--color-text-secondary)' }} />
                                <Text style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                                    {blog.readingMinutes} {t.blogMinRead ?? 'min read'}
                                </Text>
                            </Space> */}
                            <Text style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                                {/* ~{wordCount.toLocaleString()} words */}
                            </Text>
                        </Space>
                        {/* <Tooltip title={t.blogShare ?? 'Copy link'}> */}
                        <Tooltip title='Copy link'>
                            <Button
                                size="small"
                                icon={<ShareAltOutlined />}
                                onClick={handleShare}
                                style={{
                                    border: '1px solid var(--color-border)',
                                    background: 'transparent',
                                    color: 'var(--color-text-secondary)',
                                }}
                            >
                                {/* {t.blogShare ?? 'Share'} */}
                                Share
                            </Button>
                        </Tooltip>
                    </div>
                </header>

                {/* ── Table of Contents ── */}
                {tr.sections.length > 2 && (
                    <nav style={{
                        marginBottom: 40,
                        padding: '20px 24px',
                        borderRadius: 12,
                        background: 'var(--color-bg-elevated)',
                        border: '1px solid var(--color-border)',
                    }}>
                        <Text style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--color-text-secondary)',
                            display: 'block',
                            marginBottom: 12,
                        }}>
                            {/* {t.blogTableOfContents ?? 'Table of Contents'} */}
                            Table of Contents
                        </Text>
                        <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {tr.sections.map((section, i) => (
                                <li key={i + 1}>
                                    <a
                                        href={`#section-${i + 1}`}
                                        style={{
                                            color: 'var(--color-primary)',
                                            fontSize: 14,
                                            textDecoration: 'none',
                                            lineHeight: 1.5,
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                                        onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                                    >
                                        {section.heading}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}

                {/* ── Article body ── */}
                <article>
                    {tr.sections.map((section, i) => (
                        <section key={i + 1} id={`section-${i + 1}`} style={{ marginBottom: 40, scrollMarginTop: 80 }}>
                            <Title
                                level={2}
                                style={{
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: 'var(--color-text)',
                                    marginBottom: 16,
                                    paddingBottom: 10,
                                    borderBottom: `2px solid ${color}30`,
                                    marginTop: 0,
                                }}
                            >
                                {section.heading}
                            </Title>
                            {section.paragraphs.map((para, j) => (
                                <Paragraph
                                    key={j}
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.85,
                                        fontSize: 15,
                                        margin: 0,
                                        marginBottom: j < section.paragraphs.length - 1 ? 14 : 0,
                                    }}
                                >
                                    {para}
                                </Paragraph>
                            ))}
                        </section>
                    ))}
                </article>

                <Divider style={{ borderColor: 'var(--color-border)', margin: '40px 0' }} />

                {/* ── Related tools ── */}
                {blog.relatedTools.length > 0 && (
                    <section style={{ marginBottom: 40 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                            <ToolOutlined style={{ color: color, fontSize: 16 }} />
                            <Text style={{
                                fontSize: 13,
                                fontWeight: 700,
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                color: 'var(--color-text-secondary)',
                            }}>
                                {/* {t.blogRelatedTools ?? 'Try these tools'} */}
                                Try these tools
                            </Text>
                        </div>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {blog.relatedTools.map((toolSlug) => (
                                <Tag
                                    key={toolSlug}
                                    onClick={() => navigate(`/${toolSlug}`)}
                                    style={{
                                        cursor: 'pointer',
                                        background: `${color}12`,
                                        border: `1px solid ${color}35`,
                                        color: 'var(--color-text)',
                                        borderRadius: 8,
                                        padding: '4px 12px',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        transition: 'all 0.15s ease',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement
                                        el.style.background = `${color}25`
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement
                                        el.style.background = `${color}12`
                                    }}
                                >
                                    {toolSlug}
                                </Tag>
                            ))}
                        </div>
                    </section>
                )}

                {/* ── Prev / Next navigation ── */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {prevBlog ? (
                        <div
                            onClick={() => navigate(`/blog/${prevBlog.slug}`)}
                            style={{
                                padding: '16px 20px',
                                borderRadius: 10,
                                border: '1px solid var(--color-border)',
                                background: 'var(--color-bg-elevated)',
                                cursor: 'pointer',
                                transition: 'border-color 0.15s ease',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = color)}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                        >
                            <Text style={{ fontSize: 11, color: 'var(--color-text-secondary)', display: 'block', marginBottom: 6 }}>
                                {/* ← {t.blogPrevArticle ?? 'Previous'} */}
                                ← Previous
                            </Text>
                            <Text strong style={{ color: 'var(--color-text)', fontSize: 13, lineHeight: 1.4, display: 'block' }}>
                                {prevBlog.content.title}
                            </Text>
                        </div>
                    ) : <div />}

                    {nextBlog ? (
                        <div
                            onClick={() => navigate(`/blog/${nextBlog.slug}`)}
                            style={{
                                padding: '16px 20px',
                                borderRadius: 10,
                                border: '1px solid var(--color-border)',
                                background: 'var(--color-bg-elevated)',
                                cursor: 'pointer',
                                textAlign: 'right',
                                transition: 'border-color 0.15s ease',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = color)}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                        >
                            <Text style={{ fontSize: 11, color: 'var(--color-text-secondary)', display: 'block', marginBottom: 6 }}>
                                {/* {t.blogNextArticle ?? 'Next'} → */}
                                Next →
                            </Text>
                            <Text strong style={{ color: 'var(--color-text)', fontSize: 13, lineHeight: 1.4, display: 'block' }}>
                                {nextBlog.content.title}
                            </Text>
                        </div>
                    ) : <div />}
                </div>

                {/* ── Back button ── */}
                <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center' }}>
                    <Button
                        icon={<ArrowLeftOutlined />}
                        onClick={() => navigate('/blog')}
                        style={{
                            border: '1px solid var(--color-border)',
                            background: 'transparent',
                            color: 'var(--color-text-secondary)',
                        }}
                    >
                        {/* {t.blogBackToList ?? 'Back to Blog'} */}
                        Back to Blog
                    </Button>
                </div>
            </div>
        </>
    )
}
