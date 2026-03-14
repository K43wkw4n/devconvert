import type { ConvertResult } from '@/types'

// ─── YAML → JSON ─────────────────────────────────────────────────────────

export async function yamlToJson(input: string): Promise<ConvertResult> {
  try {
    const yaml = await import('js-yaml')
    const parsed = yaml.load(input)
    return { success: true, output: JSON.stringify(parsed, null, 2) }
  } catch (e) {
    return { success: false, output: '', error: `Invalid YAML: ${(e as Error).message}` }
  }
}

// ─── YAML → XML ──────────────────────────────────────────────────────────

export async function yamlToXml(input: string): Promise<ConvertResult> {
  try {
    const yaml = await import('js-yaml')
    const parsed = yaml.load(input)

    function toXml(obj: unknown, tag: string, indent = 0): string {
      const pad = '  '.repeat(indent)
      if (obj === null || obj === undefined) return `${pad}<${tag} />`
      if (typeof obj !== 'object') return `${pad}<${tag}>${String(obj)}</${tag}>`
      if (Array.isArray(obj)) return obj.map((item) => toXml(item, tag, indent)).join('\n')
      const children = Object.entries(obj as Record<string, unknown>)
        .map(([k, v]) => toXml(v, k, indent + 1))
        .join('\n')
      return `${pad}<${tag}>\n${children}\n${pad}</${tag}>`
    }

    const output = `<?xml version="1.0" encoding="UTF-8"?>\n${toXml(parsed, 'root', 0)}`
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── YAML → TypeScript ───────────────────────────────────────────────────

export async function yamlToTypescript(input: string): Promise<ConvertResult> {
  try {
    const yaml = await import('js-yaml')
    const parsed = yaml.load(input)
    const { jsonToTypescript } = await import('./json.converter')
    return jsonToTypescript(JSON.stringify(parsed))
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}
