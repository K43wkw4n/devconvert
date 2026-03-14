import type { ConvertResult } from '@/types'
import { formatInTimezone, getUserTimezone } from '@/data/timezones'

export function base64Encode(input: string): ConvertResult {
  try {
    return { success: true, output: btoa(unescape(encodeURIComponent(input))) }
  } catch (e) {
    return { success: false, output: '', error: `Encoding failed: ${(e as Error).message}` }
  }
}

export function base64Decode(input: string): ConvertResult {
  try {
    return { success: true, output: decodeURIComponent(escape(atob(input.trim()))) }
  } catch (e) {
    return { success: false, output: '', error: `Invalid Base64: ${(e as Error).message}` }
  }
}

export function urlEncode(input: string): ConvertResult {
  try {
    return { success: true, output: encodeURIComponent(input) }
  } catch (e) {
    return { success: false, output: '', error: `Encoding failed: ${(e as Error).message}` }
  }
}

export function urlDecode(input: string): ConvertResult {
  try {
    return { success: true, output: decodeURIComponent(input) }
  } catch (e) {
    return { success: false, output: '', error: `Invalid URL encoding: ${(e as Error).message}` }
  }
}

export function jwtDecode(input: string): ConvertResult {
  try {
    const parts = input.trim().split('.')
    if (parts.length !== 3) return { success: false, output: '', error: 'Invalid JWT: must have 3 parts' }
    const decodeB64 = (str: string): unknown => {
      const base64 = str.replace(/-/g, '+').replace(/_/g, '/')
      const padded = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, '=')
      return JSON.parse(decodeURIComponent(escape(atob(padded))))
    }
    const header = decodeB64(parts[0])
    const payload = decodeB64(parts[1])
    const result = {
      header, payload, signature: parts[2],
      _meta: {
        algorithm: (header as Record<string, string>).alg || 'unknown',
        issuedAt: (payload as Record<string, number>).iat ? new Date(((payload as Record<string, number>).iat) * 1000).toISOString() : undefined,
        expiresAt: (payload as Record<string, number>).exp ? new Date(((payload as Record<string, number>).exp) * 1000).toISOString() : undefined,
        isExpired: (payload as Record<string, number>).exp ? Date.now() / 1000 > (payload as Record<string, number>).exp : undefined,
      },
    }
    return { success: true, output: JSON.stringify(result, null, 2) }
  } catch (e) {
    return { success: false, output: '', error: `Invalid JWT: ${(e as Error).message}` }
  }
}

export function htmlEntitiesEncode(input: string): ConvertResult {
  const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }
  return { success: true, output: input.replace(/[&<>"']/g, (ch) => map[ch]) }
}

export function htmlEntitiesDecode(input: string): ConvertResult {
  const map: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&apos;': "'", '&nbsp;': ' ' }
  return { success: true, output: input.replace(/&[a-zA-Z0-9#]+;/g, (e) => map[e] || e) }
}

export function decimalToBinary(input: string): ConvertResult {
  const num = parseInt(input.trim(), 10)
  if (isNaN(num)) return { success: false, output: '', error: 'Invalid decimal number' }
  return { success: true, output: `0b${num.toString(2)}\n\n// Decimal: ${num}\n// Octal: 0o${num.toString(8)}\n// Hex: 0x${num.toString(16).toUpperCase()}` }
}

export function binaryToDecimal(input: string): ConvertResult {
  try {
    const clean = input.trim().replace(/^0b/i, '')
    const num = parseInt(clean, 2)
    if (isNaN(num)) return { success: false, output: '', error: 'Invalid binary number' }
    return { success: true, output: `${num}\n\n// Binary: 0b${clean}\n// Octal: 0o${num.toString(8)}\n// Hex: 0x${num.toString(16).toUpperCase()}` }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

export function decimalToHex(input: string): ConvertResult {
  const num = parseInt(input.trim(), 10)
  if (isNaN(num)) return { success: false, output: '', error: 'Invalid decimal number' }
  return { success: true, output: `0x${num.toString(16).toUpperCase()}\n\n// Decimal: ${num}\n// Binary: 0b${num.toString(2)}` }
}

export function hexToDecimal(input: string): ConvertResult {
  try {
    const clean = input.trim().replace(/^0x/i, '')
    const num = parseInt(clean, 16)
    if (isNaN(num)) return { success: false, output: '', error: 'Invalid hex number' }
    return { success: true, output: `${num}\n\n// Hex: 0x${clean.toUpperCase()}\n// Binary: 0b${num.toString(2)}` }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── Timestamp → Date (with timezone support) ─────────────────────────────

export function timestampToDate(input: string, options?: Record<string, string>): ConvertResult {
  try {
    const ts = parseInt(input.trim(), 10)
    if (isNaN(ts)) return { success: false, output: '', error: 'Invalid timestamp' }
    const ms = ts > 1e10 ? ts : ts * 1000
    const date = new Date(ms)
    const tz = options?.timezone ?? getUserTimezone()
    const inTz = formatInTimezone(date, tz)
    const utc = formatInTimezone(date, 'UTC')
    const output = JSON.stringify({
      [`${tz}`]: { iso: inTz.iso, readable: inTz.readable, date: inTz.date, time: inTz.time, utcOffset: inTz.utcOffset },
      UTC: { iso: utc.iso, readable: utc.readable, date: utc.date, time: utc.time },
      raw: { timestamp_ms: ms, timestamp_s: Math.floor(ms / 1000), iso8601: date.toISOString() },
    }, null, 2)
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── Date → Timestamp (with timezone support) ─────────────────────────────

export function dateToTimestamp(input: string, options?: Record<string, string>): ConvertResult {
  try {
    const date = new Date(input.trim())
    if (isNaN(date.getTime())) return { success: false, output: '', error: 'Invalid date. Try: 2024-01-15T10:30:00Z or 2024-01-15' }
    const ms = date.getTime()
    const tz = options?.timezone ?? getUserTimezone()
    const inTz = formatInTimezone(date, tz)
    const utc = formatInTimezone(date, 'UTC')
    const output = JSON.stringify({
      timestamp_s: Math.floor(ms / 1000),
      timestamp_ms: ms,
      iso8601: date.toISOString(),
      [`in_${tz}`]: { iso: inTz.iso, readable: inTz.readable, utcOffset: inTz.utcOffset },
      utc: { iso: utc.iso, readable: utc.readable },
    }, null, 2)
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}
