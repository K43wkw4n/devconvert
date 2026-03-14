import { useEffect } from 'react'
import { APP_CONFIG } from '@/config/app.config'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string[]
  canonicalPath?: string
}

export default function SEOHead({ title, description, keywords, canonicalPath }: SEOHeadProps) {
  useEffect(() => {
    const base = APP_CONFIG.url
    const fullUrl = `${base}${canonicalPath ?? ''}`

    document.title = title
    setMeta('name', 'description', description)
    if (keywords?.length) setMeta('name', 'keywords', keywords.join(', '))

    // Open Graph
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', fullUrl)
    setMeta('property', 'og:image', APP_CONFIG.ogImage)

    // Twitter
    setMeta('property', 'twitter:title', title)
    setMeta('property', 'twitter:description', description)
    setMeta('property', 'twitter:url', fullUrl)

    // Canonical
    if (canonicalPath) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = fullUrl
    }
  }, [title, description, keywords, canonicalPath])

  return null
}

function setMeta(attrName: string, attrValue: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.content = content
}
