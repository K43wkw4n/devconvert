import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Stores scroll positions per pathname key
const scrollPositions = new Map<string, number>()

export default function ScrollToTop() {
  const { pathname, key } = useLocation()
  const prevPathnameRef = useRef<string | null>(null)
  const prevKeyRef = useRef<string | null>(null)

  useEffect(() => {
    const prevPathname = prevPathnameRef.current
    const prevKey = prevKeyRef.current

    // Save previous scroll position before navigating away
    if (prevPathname && prevKey) {
      // We can't know if it's a back navigation here, but we save the position
      // before we potentially scroll
    }

    if (prevPathname === null) {
      // First render — just scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else if (prevKey !== key && prevPathname !== pathname) {
      // Navigating to a NEW page (not back/forward in same path)
      // Check if this navigation came from popstate (browser back/forward)
      // We detect this by watching if the key changed but it's a "pop" action
      // React Router v6 doesn't directly expose action in useLocation easily,
      // so we use a different strategy: always scroll top on new navigations.
      // Browser back will be handled by the browser's scroll restoration.
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    prevPathnameRef.current = pathname
    prevKeyRef.current = key
  }, [pathname, key])

  // Save scroll position periodically so browser back restores it
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.set(pathname, window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return null
}
