import type { ConvertResult } from '@/types'

function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace(/^#/, '')
  const full = clean.length === 3
    ? clean.split('').map((c) => c + c).join('')
    : clean
  if (full.length !== 6) return null
  const r = parseInt(full.slice(0, 2), 16)
  const g = parseInt(full.slice(2, 4), 16)
  const b = parseInt(full.slice(4, 6), 16)
  if ([r, g, b].some(isNaN)) return null
  return [r, g, b]
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  const rN = r / 255, gN = g / 255, bN = b / 255
  const max = Math.max(rN, gN, bN), min = Math.min(rN, gN, bN)
  const l = (max + min) / 2
  let h = 0, s = 0
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rN: h = ((gN - bN) / d + (gN < bN ? 6 : 0)) / 6; break
      case gN: h = ((bN - rN) / d + 2) / 6; break
      case bN: h = ((rN - gN) / d + 4) / 6; break
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const hN = h / 360, sN = s / 100, lN = l / 100
  if (sN === 0) {
    const v = Math.round(lN * 255)
    return [v, v, v]
  }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  const q = lN < 0.5 ? lN * (1 + sN) : lN + sN - lN * sN
  const p = 2 * lN - q
  return [
    Math.round(hue2rgb(p, q, hN + 1 / 3) * 255),
    Math.round(hue2rgb(p, q, hN) * 255),
    Math.round(hue2rgb(p, q, hN - 1 / 3) * 255),
  ]
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase()
}

function buildColorOutput(r: number, g: number, b: number): string {
  const [h, s, l] = rgbToHsl(r, g, b)
  return JSON.stringify({
    hex: rgbToHex(r, g, b),
    rgb: `rgb(${r}, ${g}, ${b})`,
    rgba: `rgba(${r}, ${g}, ${b}, 1)`,
    hsl: `hsl(${h}, ${s}%, ${l}%)`,
    hsla: `hsla(${h}, ${s}%, ${l}%, 1)`,
    values: { r, g, b, h, s, l },
    css_variables: `--color: ${rgbToHex(r, g, b)};\n--color-rgb: ${r}, ${g}, ${b};\n--color-hsl: ${h}, ${s}%, ${l}%;`,
  }, null, 2)
}

// ─── HEX → RGB / HSL ─────────────────────────────────────────────────────

export function hexToAll(input: string): ConvertResult {
  const rgb = hexToRgb(input.trim())
  if (!rgb) return { success: false, output: '', error: 'Invalid hex color. Use format: #FF5733 or #F53' }
  return { success: true, output: buildColorOutput(...rgb) }
}

// ─── RGB → HEX / HSL ─────────────────────────────────────────────────────

export function rgbToAll(input: string): ConvertResult {
  try {
    const match = input.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/)
      || input.match(/(\d+)\s*[,\s]+(\d+)\s*[,\s]+(\d+)/)
    if (!match) return { success: false, output: '', error: 'Invalid RGB. Use: rgb(255, 87, 51) or 255, 87, 51' }
    const [r, g, b] = [+match[1], +match[2], +match[3]]
    if ([r, g, b].some((v) => v < 0 || v > 255)) {
      return { success: false, output: '', error: 'RGB values must be between 0 and 255' }
    }
    return { success: true, output: buildColorOutput(r, g, b) }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── HSL → HEX / RGB ─────────────────────────────────────────────────────

export function hslToAll(input: string): ConvertResult {
  try {
    const match = input.match(/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%?\s*,\s*(\d+(?:\.\d+)?)%?/)
      || input.match(/(\d+(?:\.\d+)?)\s*[,\s]+(\d+(?:\.\d+)?)\s*[,\s]+(\d+(?:\.\d+)?)/)
    if (!match) return { success: false, output: '', error: 'Invalid HSL. Use: hsl(360, 100%, 50%) or 360, 100, 50' }
    const [h, s, l] = [+match[1], +match[2], +match[3]]
    const [r, g, b] = hslToRgb(h, s, l)
    return { success: true, output: buildColorOutput(r, g, b) }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── CSS Color Name → All ─────────────────────────────────────────────────

const CSS_COLORS: Record<string, string> = {
  red: '#FF0000', green: '#008000', blue: '#0000FF', white: '#FFFFFF', black: '#000000',
  yellow: '#FFFF00', orange: '#FFA500', purple: '#800080', pink: '#FFC0CB', gray: '#808080',
  cyan: '#00FFFF', magenta: '#FF00FF', lime: '#00FF00', navy: '#000080', teal: '#008080',
  silver: '#C0C0C0', gold: '#FFD700', coral: '#FF7F50', salmon: '#FA8072', violet: '#EE82EE',
  indigo: '#4B0082', maroon: '#800000', olive: '#808000', aqua: '#00FFFF',
}

export function cssColorToAll(input: string): ConvertResult {
  const name = input.trim().toLowerCase()
  const hex = CSS_COLORS[name]
  if (!hex) return { success: false, output: '', error: `Unknown CSS color name: "${name}". Try: red, blue, #FF5733, rgb(255,87,51)` }
  return hexToAll(hex)
}
