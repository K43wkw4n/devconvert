import { useEffect, useRef } from 'react'
import { APP_CONFIG } from '@/config/app.config'

interface AdBannerProps {
  /** Key จาก APP_CONFIG.adsense.slots */
  slot: keyof typeof APP_CONFIG.adsense.slots
  format?: 'leaderboard' | 'rectangle' | 'responsive'
  className?: string
  style?: React.CSSProperties
}

export default function AdBanner({ slot, format = 'responsive', className = '', style }: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null)
  const { enabled, publisherId, slots } = APP_CONFIG.adsense
  const slotId = slots[slot]

  useEffect(() => {
    if (!enabled) return
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any
      if (w.adsbygoogle) w.adsbygoogle.push({})
    } catch { /* ignore in dev */ }
  }, [slotId, enabled])

  const heightMap = { leaderboard: '90px', rectangle: '250px', responsive: '100px' }
  const defaultStyle: React.CSSProperties = { minHeight: heightMap[format], ...style }

  // Placeholder (AdSense not yet enabled)
  if (!enabled) {
    return (
      <div></div>
      // <div
      //   className={`ad-banner ad-banner-${format === 'leaderboard' ? 'top' : 'side'} ${className}`}
      //   style={defaultStyle}
      //   aria-hidden="true"
      // >
      //   Advertisement
      // </div>
    )
  }

  // Production: real AdSense tag
  return (
    <div className={className} style={defaultStyle}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={publisherId}
        data-ad-slot={slotId}
        data-ad-format={format === 'responsive' ? 'auto' : undefined}
        data-full-width-responsive={format === 'responsive' ? 'true' : undefined}
      />
    </div>
  )
}
