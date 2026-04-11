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
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'

export default function AppHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { locale, setLocale, t } = useI18n()
  const isHome = location.pathname === buildPath.home() || location.pathname === buildPath.blog()

  const [open, setOpen] = useState(false)

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

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="app-header">
      <div className="app-header-inner">
        {/* Logo — ชื่อและ brand อยู่ใน app.config.ts */}
        {/* LEFT MENU (Desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            className="logo"
            onClick={() => navigate(buildPath.home())}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(buildPath.home())}
          >
            <span className="logo-icon">&lt;/&gt;</span>
            <span className="logo-text">
              {APP_CONFIG.name.slice(0, 3)}
              <span>{APP_CONFIG.name.slice(3)}</span>
            </span>
          </div>

          {/* Desktop only */}
          <div className="desktop-menu" style={{
            marginLeft: 10
          }}>
            <Button
              type="text"
              className={`header-nav-link ${isActive(buildPath.home()) ? 'active' : ''}`}
              onClick={() => navigate(buildPath.home())}
            >
              {t.home}
            </Button>

            <Button
              type="text"
              className={`header-nav-link ${isActive(buildPath.blog()) ? 'active' : ''}`}
              onClick={() => navigate(buildPath.blog())}
            >
              {t.blogTitle}
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <nav className="header-nav">
          {/* Desktop menu */}
          <div className="desktop-menu">
            {!isHome && (
              <Button
                type="text"
                icon={<SearchOutlined />}
                className="header-nav-link"
                onClick={() => navigate(buildPath.home())}
              >
                {t.allTools}
              </Button>
            )}

            <Dropdown menu={{ items: langMenuItems }} trigger={['click']} placement="bottomRight">
              <Button type="text" className="header-nav-link">
                <TranslationOutlined />
                <span>{currentLocale?.flag}</span>
              </Button>
            </Dropdown>

            <Tooltip title={theme === 'dark' ? t.lightMode : t.darkMode}>
              <Button
                type="text"
                className="header-nav-link"
                icon={theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
                onClick={toggleTheme}
              />
            </Tooltip>

            <Button
              type="text"
              icon={<GithubOutlined />}
              className="header-nav-link"
              href={APP_CONFIG.githubUrl}
              target="_blank"
            />
          </div>

          {/* MOBILE HAMBURGER */}
          <Button
            className="mobile-menu-btn"
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        </nav>

        {/* DRAWER (Mobile Menu) */}
        <Drawer
          title="Menu"
          width={300}
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <div className="mobile-menu">
            <Button
              type="text"
              block
              className={isActive(buildPath.home()) ? 'active' : ''}
              onClick={() => {
                navigate(buildPath.home())
                setOpen(false)
              }}
            >
              {t.home}
            </Button>

            <Button
              type="text"
              block
              className={isActive(buildPath.blog()) ? 'active' : ''}
              onClick={() => {
                navigate(buildPath.blog())
                setOpen(false)
              }}
            >
              {t.blogTitle}
            </Button>

            {!isHome && (
              <Button type="text"
                block
                onClick={() => {
                  navigate(buildPath.home())
                  setOpen(false)
                }}
              >
                {t.allTools}
              </Button>
            )}

            <Dropdown menu={{ items: langMenuItems }}>
              <Button block>
                <TranslationOutlined /> {currentLocale?.flag}
              </Button>
            </Dropdown>

            <Button type="text" block onClick={toggleTheme}>
              {theme === 'dark' ? t.lightMode : t.darkMode}
            </Button>

            <Button type="text"
              block
              href={APP_CONFIG.githubUrl}
              target="_blank"
            >
              GitHub
            </Button>
          </div>
        </Drawer>
      </div>
    </header>
  )
}
