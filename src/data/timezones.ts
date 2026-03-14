export interface TimezoneOption {
  value: string       // IANA timezone name e.g. "Asia/Bangkok"
  label: string       // Display name e.g. "Bangkok (UTC+7)"
  offset: string      // e.g. "+07:00"
  region: string      // e.g. "Asia"
}

export const TIMEZONES: TimezoneOption[] = [
  // ── UTC ──────────────────────────────────────────────────────────────────
  { value: 'UTC', label: 'UTC (UTC+0)', offset: '+00:00', region: 'UTC' },

  // ── Asia ─────────────────────────────────────────────────────────────────
  { value: 'Asia/Bangkok', label: 'Bangkok, Hanoi, Jakarta (UTC+7)', offset: '+07:00', region: 'Asia' },
  { value: 'Asia/Shanghai', label: 'Beijing, Shanghai, Hong Kong (UTC+8)', offset: '+08:00', region: 'Asia' },
  { value: 'Asia/Tokyo', label: 'Tokyo, Osaka (UTC+9)', offset: '+09:00', region: 'Asia' },
  { value: 'Asia/Seoul', label: 'Seoul (UTC+9)', offset: '+09:00', region: 'Asia' },
  { value: 'Asia/Singapore', label: 'Singapore, Kuala Lumpur (UTC+8)', offset: '+08:00', region: 'Asia' },
  { value: 'Asia/Taipei', label: 'Taipei (UTC+8)', offset: '+08:00', region: 'Asia' },
  { value: 'Asia/Kolkata', label: 'Mumbai, Delhi, Kolkata (UTC+5:30)', offset: '+05:30', region: 'Asia' },
  { value: 'Asia/Karachi', label: 'Karachi, Islamabad (UTC+5)', offset: '+05:00', region: 'Asia' },
  { value: 'Asia/Dhaka', label: 'Dhaka (UTC+6)', offset: '+06:00', region: 'Asia' },
  { value: 'Asia/Colombo', label: 'Colombo, Sri Lanka (UTC+5:30)', offset: '+05:30', region: 'Asia' },
  { value: 'Asia/Yangon', label: 'Yangon, Myanmar (UTC+6:30)', offset: '+06:30', region: 'Asia' },
  { value: 'Asia/Kathmandu', label: 'Kathmandu, Nepal (UTC+5:45)', offset: '+05:45', region: 'Asia' },
  { value: 'Asia/Kabul', label: 'Kabul, Afghanistan (UTC+4:30)', offset: '+04:30', region: 'Asia' },
  { value: 'Asia/Tehran', label: 'Tehran, Iran (UTC+3:30)', offset: '+03:30', region: 'Asia' },
  { value: 'Asia/Dubai', label: 'Dubai, Abu Dhabi (UTC+4)', offset: '+04:00', region: 'Asia' },
  { value: 'Asia/Riyadh', label: 'Riyadh, Mecca (UTC+3)', offset: '+03:00', region: 'Asia' },
  { value: 'Asia/Jerusalem', label: 'Jerusalem, Tel Aviv (UTC+2/3)', offset: '+02:00', region: 'Asia' },
  { value: 'Asia/Beirut', label: 'Beirut (UTC+2/3)', offset: '+02:00', region: 'Asia' },
  { value: 'Asia/Baghdad', label: 'Baghdad (UTC+3)', offset: '+03:00', region: 'Asia' },
  { value: 'Asia/Manila', label: 'Manila, Philippines (UTC+8)', offset: '+08:00', region: 'Asia' },
  { value: 'Asia/Ho_Chi_Minh', label: 'Ho Chi Minh City (UTC+7)', offset: '+07:00', region: 'Asia' },
  { value: 'Asia/Phnom_Penh', label: 'Phnom Penh, Cambodia (UTC+7)', offset: '+07:00', region: 'Asia' },
  { value: 'Asia/Vientiane', label: 'Vientiane, Laos (UTC+7)', offset: '+07:00', region: 'Asia' },
  { value: 'Asia/Kuala_Lumpur', label: 'Kuala Lumpur (UTC+8)', offset: '+08:00', region: 'Asia' },
  { value: 'Asia/Makassar', label: 'Makassar, Indonesia (UTC+8)', offset: '+08:00', region: 'Asia' },
  { value: 'Asia/Jayapura', label: 'Jayapura, Papua (UTC+9)', offset: '+09:00', region: 'Asia' },

  // ── Europe ────────────────────────────────────────────────────────────────
  { value: 'Europe/London', label: 'London, Edinburgh (UTC+0/1)', offset: '+00:00', region: 'Europe' },
  { value: 'Europe/Paris', label: 'Paris, Berlin, Rome (UTC+1/2)', offset: '+01:00', region: 'Europe' },
  { value: 'Europe/Amsterdam', label: 'Amsterdam, Brussels (UTC+1/2)', offset: '+01:00', region: 'Europe' },
  { value: 'Europe/Stockholm', label: 'Stockholm, Oslo, Copenhagen (UTC+1/2)', offset: '+01:00', region: 'Europe' },
  { value: 'Europe/Warsaw', label: 'Warsaw, Budapest (UTC+1/2)', offset: '+01:00', region: 'Europe' },
  { value: 'Europe/Athens', label: 'Athens, Bucharest (UTC+2/3)', offset: '+02:00', region: 'Europe' },
  { value: 'Europe/Helsinki', label: 'Helsinki, Riga, Tallinn (UTC+2/3)', offset: '+02:00', region: 'Europe' },
  { value: 'Europe/Moscow', label: 'Moscow, St. Petersburg (UTC+3)', offset: '+03:00', region: 'Europe' },
  { value: 'Europe/Istanbul', label: 'Istanbul, Ankara (UTC+3)', offset: '+03:00', region: 'Europe' },
  { value: 'Europe/Lisbon', label: 'Lisbon, Azores (UTC+0/1)', offset: '+00:00', region: 'Europe' },
  { value: 'Europe/Madrid', label: 'Madrid, Barcelona (UTC+1/2)', offset: '+01:00', region: 'Europe' },
  { value: 'Europe/Rome', label: 'Rome, Milan (UTC+1/2)', offset: '+01:00', region: 'Europe' },
  { value: 'Europe/Vienna', label: 'Vienna, Zurich (UTC+1/2)', offset: '+01:00', region: 'Europe' },
  { value: 'Europe/Kiev', label: 'Kyiv, Ukraine (UTC+2/3)', offset: '+02:00', region: 'Europe' },
  { value: 'Europe/Minsk', label: 'Minsk, Belarus (UTC+3)', offset: '+03:00', region: 'Europe' },

  // ── Americas ─────────────────────────────────────────────────────────────
  { value: 'America/New_York', label: 'New York, Miami, Boston (UTC-5/4)', offset: '-05:00', region: 'Americas' },
  { value: 'America/Chicago', label: 'Chicago, Dallas, Houston (UTC-6/5)', offset: '-06:00', region: 'Americas' },
  { value: 'America/Denver', label: 'Denver, Phoenix (UTC-7/6)', offset: '-07:00', region: 'Americas' },
  { value: 'America/Los_Angeles', label: 'Los Angeles, San Francisco (UTC-8/7)', offset: '-08:00', region: 'Americas' },
  { value: 'America/Anchorage', label: 'Anchorage, Alaska (UTC-9/8)', offset: '-09:00', region: 'Americas' },
  { value: 'Pacific/Honolulu', label: 'Honolulu, Hawaii (UTC-10)', offset: '-10:00', region: 'Americas' },
  { value: 'America/Toronto', label: 'Toronto, Ottawa (UTC-5/4)', offset: '-05:00', region: 'Americas' },
  { value: 'America/Vancouver', label: 'Vancouver, Calgary (UTC-8/7)', offset: '-08:00', region: 'Americas' },
  { value: 'America/Mexico_City', label: 'Mexico City (UTC-6/5)', offset: '-06:00', region: 'Americas' },
  { value: 'America/Bogota', label: 'Bogotá, Lima, Quito (UTC-5)', offset: '-05:00', region: 'Americas' },
  { value: 'America/Caracas', label: 'Caracas, Venezuela (UTC-4)', offset: '-04:00', region: 'Americas' },
  { value: 'America/Sao_Paulo', label: 'São Paulo, Rio de Janeiro (UTC-3/2)', offset: '-03:00', region: 'Americas' },
  { value: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires (UTC-3)', offset: '-03:00', region: 'Americas' },
  { value: 'America/Santiago', label: 'Santiago, Chile (UTC-4/3)', offset: '-04:00', region: 'Americas' },

  // ── Africa ────────────────────────────────────────────────────────────────
  { value: 'Africa/Cairo', label: 'Cairo, Egypt (UTC+2)', offset: '+02:00', region: 'Africa' },
  { value: 'Africa/Johannesburg', label: 'Johannesburg, Cape Town (UTC+2)', offset: '+02:00', region: 'Africa' },
  { value: 'Africa/Lagos', label: 'Lagos, Kano (UTC+1)', offset: '+01:00', region: 'Africa' },
  { value: 'Africa/Nairobi', label: 'Nairobi, Addis Ababa (UTC+3)', offset: '+03:00', region: 'Africa' },
  { value: 'Africa/Casablanca', label: 'Casablanca, Rabat (UTC+1)', offset: '+01:00', region: 'Africa' },
  { value: 'Africa/Accra', label: 'Accra, Abidjan (UTC+0)', offset: '+00:00', region: 'Africa' },

  // ── Pacific ────────────────────────────────────────────────────────────────
  { value: 'Australia/Sydney', label: 'Sydney, Melbourne (UTC+10/11)', offset: '+10:00', region: 'Pacific' },
  { value: 'Australia/Perth', label: 'Perth, Australia (UTC+8)', offset: '+08:00', region: 'Pacific' },
  { value: 'Australia/Brisbane', label: 'Brisbane, Australia (UTC+10)', offset: '+10:00', region: 'Pacific' },
  { value: 'Pacific/Auckland', label: 'Auckland, Wellington (UTC+12/13)', offset: '+12:00', region: 'Pacific' },
  { value: 'Pacific/Fiji', label: 'Fiji (UTC+12)', offset: '+12:00', region: 'Pacific' },
  { value: 'Pacific/Guam', label: 'Guam, Saipan (UTC+10)', offset: '+10:00', region: 'Pacific' },
]

// Get current UTC offset for a given timezone using Intl API (handles DST)
export function getCurrentOffset(timezone: string): string {
  try {
    const now = new Date()
    const formatter = new Intl.DateTimeFormat('en', {
      timeZone: timezone,
      timeZoneName: 'shortOffset',
    })
    const parts = formatter.formatToParts(now)
    const offsetPart = parts.find((p) => p.type === 'timeZoneName')
    return offsetPart?.value ?? 'UTC'
  } catch {
    return 'UTC'
  }
}

// Format a Date object in a specific timezone
export function formatInTimezone(date: Date, timezone: string): Record<string, string> {
  const fmt = (opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('en-GB', { timeZone: timezone, ...opts }).format(date)

  return {
    iso: (() => {
      // Build ISO-like string in target timezone
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: timezone,
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
      }).formatToParts(date)
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '00'
      const offset = getCurrentOffset(timezone)
      return `${get('year')}-${get('month')}-${get('day')}T${get('hour')}:${get('minute')}:${get('second')} ${offset}`
    })(),
    readable: fmt({ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: fmt({ year: 'numeric', month: '2-digit', day: '2-digit' }),
    time: fmt({ hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    utcOffset: getCurrentOffset(timezone),
  }
}

// Detect user's local timezone
export function getUserTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

// Get unique regions for grouping
export const TIMEZONE_REGIONS = [...new Set(TIMEZONES.map((t) => t.region))]
