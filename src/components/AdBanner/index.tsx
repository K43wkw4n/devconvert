import { useEffect, useState } from 'react'
import { APP_CONFIG } from '@/config/app.config'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

interface AdBannerProps {
  /** Slot ที่ map ไปยัง ad unit ใน APP_CONFIG.ads */
  slot: keyof typeof APP_CONFIG.ads.slots
  /** Slot สำหรับจอแคบ เพื่อใช้ mobile ad unit โดยไม่โหลดทั้งสองขนาด */
  mobileSlot?: keyof typeof APP_CONFIG.ads.slots
  className?: string
  style?: React.CSSProperties
}

const MOBILE_QUERY = '(max-width: 768px)'

export default function AdBanner({ slot, mobileSlot, className = '', style }: AdBannerProps) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  )
  const { enabled, units, slots } = APP_CONFIG.ads
  const { consent } = useCookieConsent()
  const canLoadAds = enabled && consent?.advertising === true
  const selectedSlot = mobileSlot && isMobile ? mobileSlot : slot
  const unit = units[slots[selectedSlot]]

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (!enabled || consent?.advertising === false) return null

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: unit.type === 'native' ? undefined : unit.width,
    minHeight: unit.type === 'native' ? unit.minHeight : unit.height,
    margin: '16px auto',
    display: 'flex',
    justifyContent: 'center',
    ...style,
  }

  if (!canLoadAds) {
    return (
      <div
        className={className}
        style={containerStyle}
        aria-hidden="true"
      />
    )
  }

  const iframeDocument = unit.type === 'native'
    ? `<!doctype html>
      <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
        <body style="margin:0;padding:0;overflow:hidden">
          <div id="container-${unit.key}"></div>
          <script async data-cfasync="false" src="https://bauval.org/21/${unit.key}"></script>
        </body>
      </html>`
    : `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body style="margin:0;padding:0;overflow:hidden">
        <script>window.atOptions = ${JSON.stringify({
          key: unit.key,
          format: 'iframe',
          height: unit.height,
          width: unit.width,
          params: {},
        })};</script>
        <script src="https://bauval.org/22/${unit.key}"></script>
      </body>
    </html>`

  return (
    <div className={className} style={containerStyle} role="region" aria-label="Advertisement">
      <iframe
        title="Advertisement"
        src={`data:text/html;charset=utf-8,${encodeURIComponent(iframeDocument)}`}
        width={unit.type === 'native' ? '100%' : unit.width}
        height={unit.type === 'native' ? unit.minHeight : unit.height}
        scrolling="no"
        loading="lazy"
        style={{ border: 0, display: 'block', maxWidth: '100vw' }}
      />
    </div>
  )
}
