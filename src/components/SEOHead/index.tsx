import { useEffect } from 'react'
import { APP_CONFIG } from '@/config/app.config'

interface SEOHeadProps {
  title: string
  description: string
  canonicalPath?: string
}

export default function SEOHead({ title, description, canonicalPath }: SEOHeadProps) {
  useEffect(() => {
    const base = APP_CONFIG.url
    const path = canonicalPath ?? window.location.pathname
    const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`
    const fullUrl = `${base}${normalizedPath}`

    document.title = title
    setMeta('name', 'description', description)

    // Open Graph
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', fullUrl)
    setMeta('property', 'og:image', APP_CONFIG.ogImage)

    // Twitter
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:url', fullUrl)
    setMeta('name', 'twitter:image', APP_CONFIG.ogImage)

    // Canonical
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = fullUrl

    let schema = document.querySelector<HTMLScriptElement>('#page-schema')
    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'page-schema'
      schema.type = 'application/ld+json'
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: fullUrl,
      isPartOf: { '@id': `${base}/#website` },
    })
  }, [title, description, canonicalPath])

  return null
}

function setMeta(attrName: string, attrValue: string, content: string) {
  // Query for existing meta tag with exact attribute match
  const selector = `meta[${attrName}="${attrValue}"]`
  let el = document.querySelector<HTMLMetaElement>(selector)
  
  // If not found, create new meta tag
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  
  // Update content
  el.content = content
}
