import { useNavigate, useLocation } from 'react-router-dom'
import { Button, Dropdown, Tooltip } from 'antd'
import {
  GithubOutlined, SearchOutlined,
  SunOutlined, MoonOutlined,
  TranslationOutlined, CheckOutlined,
} from '@ant-design/icons'
import { useTheme } from '@/contexts/ThemeContext'
import { useI18n, LOCALES, type Locale } from '@/contexts/I18nContext'
import { APP_CONFIG } from '@/config/app.config'
import { buildPath } from '@/routes'

export default function AppHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { locale, setLocale, t } = useI18n()
  const isHome = location.pathname === buildPath.home()

  const langMenuItems = LOCALES.map((loc) => ({
    key: loc.key,
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 150 }}>
        <span style={{ fontSize: 18 }}>{loc.flag}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 13 }}>{loc.nativeName}</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>{loc.label}</div>
        </div>
        {locale === loc.key && <CheckOutlined style={{ color: 'var(--color-primary)', fontSize: 12 }} />}
      </div>
    ),
    onClick: () => setLocale(loc.key as Locale),
  }))

  const currentLocale = LOCALES.find((l) => l.key === locale)

  return (
    <header className="app-header">
      <div className="app-header-inner">
        {/* Logo — ชื่อและ brand อยู่ใน app.config.ts */}
        <div className="logo" onClick={() => navigate(buildPath.home())} role="link" tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate(buildPath.home())}>
          <span className="logo-icon">&lt;/&gt;</span>
          <span className="logo-text">
            {APP_CONFIG.name.slice(0, 3)}
            <span>{APP_CONFIG.name.slice(3)}</span>
          </span>
        </div>

        {/* Nav */}
        <nav className="header-nav">
          {!isHome && (
            <Button type="text" icon={<SearchOutlined />} className="header-nav-link"
              onClick={() => navigate(buildPath.home())}>
              {t.allTools}
            </Button>
          )}

          {/* Language switcher */}
          <Dropdown menu={{ items: langMenuItems }} trigger={['click']} placement="bottomRight">
            <Button type="text" className="header-nav-link"
              style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <TranslationOutlined />
              <span style={{ fontSize: 16 }}>{currentLocale?.flag}</span>
            </Button>
          </Dropdown>

          {/* Theme toggle */}
          <Tooltip title={theme === 'dark' ? t.lightMode : t.darkMode} placement="bottom">
            <Button type="text" className="header-nav-link theme-toggle"
              icon={theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.lightMode : t.darkMode}
            />
          </Tooltip>

          {/* GitHub — URL อยู่ใน app.config.ts */}
          <Button type="text" icon={<GithubOutlined />} className="header-nav-link"
            href={APP_CONFIG.githubUrl} target="_blank" rel="noopener noreferrer" />
        </nav>
      </div>
    </header>
  )
}
