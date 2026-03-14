import type { ConvertResult } from '@/types'

// ─── XML → JSON ───────────────────────────────────────────────────────────

export async function xmlToJson(input: string): Promise<ConvertResult> {
  try {
    const { XMLParser } = await import('fast-xml-parser')
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      parseAttributeValue: true,
      parseTagValue: true,
      trimValues: true,
    })
    const result = parser.parse(input)
    return { success: true, output: JSON.stringify(result, null, 2) }
  } catch (e) {
    return { success: false, output: '', error: `Invalid XML: ${(e as Error).message}` }
  }
}

// ─── XML → YAML ───────────────────────────────────────────────────────────

export async function xmlToYaml(input: string): Promise<ConvertResult> {
  try {
    const { XMLParser } = await import('fast-xml-parser')
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' })
    const parsed = parser.parse(input)
    const yaml = await import('js-yaml')
    const output = yaml.dump(parsed, { indent: 2, lineWidth: 120 })
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── XML Beautify ─────────────────────────────────────────────────────────

export function xmlBeautify(input: string): ConvertResult {
  try {
    let level = 0
    const lines: string[] = []
    const tokens = input
      .replace(/>\s*</g, '><')
      .replace(/<!--[\s\S]*?-->/g, '') // strip comments for simplicity
      .split(/(<[^>]+>)/)
      .filter((t) => t.trim())

    for (const token of tokens) {
      if (token.startsWith('</')) {
        level = Math.max(0, level - 1)
        lines.push('  '.repeat(level) + token.trim())
      } else if (token.startsWith('<') && !token.endsWith('/>')) {
        lines.push('  '.repeat(level) + token.trim())
        if (!token.startsWith('<?') && !token.startsWith('<!')) level++
      } else if (token.startsWith('<') && token.endsWith('/>')) {
        lines.push('  '.repeat(level) + token.trim())
      } else {
        if (token.trim()) lines.push('  '.repeat(level) + token.trim())
      }
    }

    return { success: true, output: lines.join('\n') }
  } catch (e) {
    return { success: false, output: '', error: `Invalid XML: ${(e as Error).message}` }
  }
}
