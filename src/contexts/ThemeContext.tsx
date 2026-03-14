import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { APP_CONFIG } from '@/config/app.config'

export type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: APP_CONFIG.theme.defaultTheme,
  toggleTheme: () => {},
  setTheme: () => {},
})

// ─── Theme Detection ──────────────────────────────────────────────────────────
// Priority: localStorage → system preference → defaultTheme
function detectTheme(): Theme {
  const { storageKey, defaultTheme } = APP_CONFIG.theme
  const saved = localStorage.getItem(storageKey) as Theme | null
  if (saved === 'light' || saved === 'dark') return saved
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return defaultTheme
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(detectTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(APP_CONFIG.theme.storageKey, theme)
  }, [theme])

  const setTheme = (t: Theme) => setThemeState(t)
  const toggleTheme = () => setThemeState((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
