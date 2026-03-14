import type { ConvertResult } from '@/types'

// ─── Helpers ───────────────────────────────────────────────────────────────

function inferTsType(value: unknown, indent = 0): string {
  const pad = '  '.repeat(indent)
  const innerPad = '  '.repeat(indent + 1)

  if (value === null) return 'null'
  if (typeof value === 'string') return 'string'
  if (typeof value === 'number') return 'number'
  if (typeof value === 'boolean') return 'boolean'

  if (Array.isArray(value)) {
    if (value.length === 0) return 'unknown[]'
    const types = [...new Set(value.map((v) => inferTsType(v, indent)))]
    const inner = types.length === 1 ? types[0] : `(${types.join(' | ')})`
    return `${inner}[]`
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return 'Record<string, unknown>'
    const fields = entries
      .map(([k, v]) => {
        const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `"${k}"`
        const optional = v === null ? '?' : ''
        return `${innerPad}${safeKey}${optional}: ${inferTsType(v, indent + 1)};`
      })
      .join('\n')
    return `{\n${fields}\n${pad}}`
  }

  return 'unknown'
}

function buildInterface(
  value: unknown,
  name: string,
  interfaces: string[],
  depth = 0
): string {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return inferTsType(value)
  }

  const entries = Object.entries(value as Record<string, unknown>)
  const fields = entries.map(([k, v]) => {
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `"${k}"`
    const optional = v === null ? '?' : ''
    let type: string

    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      const childName = name + capitalize(k)
      type = buildInterface(v, childName, interfaces, depth + 1)
    } else if (Array.isArray(v) && v.length > 0 && typeof v[0] === 'object' && v[0] !== null) {
      const childName = name + capitalize(k) + 'Item'
      const itemType = buildInterface(v[0], childName, interfaces, depth + 1)
      type = `${itemType}[]`
    } else {
      type = inferTsType(v)
    }

    return `  ${safeKey}${optional}: ${type};`
  })

  const iface = `export interface ${name} {\n${fields.join('\n')}\n}`
  interfaces.push(iface)
  return name
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// ─── JSON → TypeScript ────────────────────────────────────────────────────

export function jsonToTypescript(input: string): ConvertResult {
  try {
    const parsed = JSON.parse(input)
    const interfaces: string[] = []
    buildInterface(parsed, 'Root', interfaces)
    const output = interfaces.reverse().join('\n\n')
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Invalid JSON: ${(e as Error).message}` }
  }
}

// ─── JSON → JavaScript ────────────────────────────────────────────────────

export function jsonToJavascript(input: string): ConvertResult {
  try {
    const parsed = JSON.parse(input)
    const js = `const data = ${JSON.stringify(parsed, null, 2)};`
    return { success: true, output: js }
  } catch (e) {
    return { success: false, output: '', error: `Invalid JSON: ${(e as Error).message}` }
  }
}

// ─── JSON → YAML ─────────────────────────────────────────────────────────

export async function jsonToYaml(input: string): Promise<ConvertResult> {
  try {
    const parsed = JSON.parse(input)
    const yaml = await import('js-yaml')
    const output = yaml.dump(parsed, { indent: 2, lineWidth: 120 })
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── JSON → XML ──────────────────────────────────────────────────────────

function jsonToXmlNode(obj: unknown, tag: string, indent = 0): string {
  const pad = '  '.repeat(indent)
  if (obj === null || obj === undefined) return `${pad}<${tag} />`

  if (typeof obj !== 'object') {
    return `${pad}<${tag}>${String(obj)}</${tag}>`
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => jsonToXmlNode(item, tag, indent)).join('\n')
  }

  const entries = Object.entries(obj as Record<string, unknown>)
  const children = entries.map(([k, v]) => jsonToXmlNode(v, k, indent + 1)).join('\n')
  return `${pad}<${tag}>\n${children}\n${pad}</${tag}>`
}

export function jsonToXml(input: string): ConvertResult {
  try {
    const parsed = JSON.parse(input)
    const output = `<?xml version="1.0" encoding="UTF-8"?>\n${jsonToXmlNode(parsed, 'root', 0)}`
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Invalid JSON: ${(e as Error).message}` }
  }
}

// ─── JSON → CSV ───────────────────────────────────────────────────────────

export function jsonToCsv(input: string): ConvertResult {
  try {
    const parsed = JSON.parse(input)
    const arr = Array.isArray(parsed) ? parsed : [parsed]

    if (arr.length === 0) return { success: true, output: '' }

    const headers = [...new Set(arr.flatMap((row: unknown) =>
      typeof row === 'object' && row !== null ? Object.keys(row as object) : []
    ))]

    const escape = (v: unknown): string => {
      const str = v === null || v === undefined ? '' : String(v)
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`
      }
      return str
    }

    const rows = arr.map((row: unknown) =>
      headers.map((h) =>
        escape((row as Record<string, unknown>)?.[h])
      ).join(',')
    )

    const output = [headers.join(','), ...rows].join('\n')
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Invalid JSON: ${(e as Error).message}` }
  }
}

// ─── JSON → SQL ───────────────────────────────────────────────────────────

export function jsonToSql(input: string): ConvertResult {
  try {
    const parsed = JSON.parse(input)
    const arr = Array.isArray(parsed) ? parsed : [parsed]

    if (arr.length === 0) return { success: true, output: '-- Empty array' }

    const headers = [...new Set(arr.flatMap((row: unknown) =>
      typeof row === 'object' && row !== null ? Object.keys(row as object) : []
    ))]

    const sqlVal = (v: unknown): string => {
      if (v === null || v === undefined) return 'NULL'
      if (typeof v === 'number' || typeof v === 'boolean') return String(v)
      if (typeof v === 'object') return `'${JSON.stringify(v).replace(/'/g, "''")}'`
      return `'${String(v).replace(/'/g, "''")}'`
    }

    const createCols = headers.map((h) => {
      const vals = arr.map((r: unknown) => (r as Record<string, unknown>)?.[h])
      const hasNull = vals.some((v) => v === null || v === undefined)
      const allNum = vals.every((v) => typeof v === 'number')
      const allBool = vals.every((v) => typeof v === 'boolean')
      const type = allBool ? 'BOOLEAN' : allNum ? 'NUMERIC' : 'TEXT'
      return `  ${h} ${type}${hasNull ? '' : ' NOT NULL'}`
    })

    const createTable = `CREATE TABLE table_name (\n${createCols.join(',\n')}\n);`

    const inserts = arr.map((row: unknown) => {
      const vals = headers.map((h) => sqlVal((row as Record<string, unknown>)?.[h]))
      return `INSERT INTO table_name (${headers.join(', ')}) VALUES (${vals.join(', ')});`
    })

    const output = `${createTable}\n\n${inserts.join('\n')}`
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Invalid JSON: ${(e as Error).message}` }
  }
}

// ─── JSON Beautify / Minify ───────────────────────────────────────────────

export function jsonBeautify(input: string): ConvertResult {
  try {
    const parsed = JSON.parse(input)
    return { success: true, output: JSON.stringify(parsed, null, 2) }
  } catch (e) {
    return { success: false, output: '', error: `Invalid JSON: ${(e as Error).message}` }
  }
}

export function jsonMinify(input: string): ConvertResult {
  try {
    const parsed = JSON.parse(input)
    return { success: true, output: JSON.stringify(parsed) }
  } catch (e) {
    return { success: false, output: '', error: `Invalid JSON: ${(e as Error).message}` }
  }
}

// ─── CSV → JSON ───────────────────────────────────────────────────────────

export function csvToJson(input: string): ConvertResult {
  try {
    const lines = input.trim().split('\n')
    if (lines.length < 2) return { success: true, output: '[]' }

    const parseRow = (line: string): string[] => {
      const result: string[] = []
      let inQuote = false
      let current = ''
      for (let i = 0; i < line.length; i++) {
        const ch = line[i]
        if (ch === '"') {
          if (inQuote && line[i + 1] === '"') { current += '"'; i++ }
          else inQuote = !inQuote
        } else if (ch === ',' && !inQuote) {
          result.push(current); current = ''
        } else {
          current += ch
        }
      }
      result.push(current)
      return result
    }

    const headers = parseRow(lines[0])
    const rows = lines.slice(1).filter(Boolean).map((line) => {
      const vals = parseRow(line)
      const obj: Record<string, unknown> = {}
      headers.forEach((h, i) => {
        const v = vals[i] ?? ''
        const trimmed = v.trim()
        if (trimmed === '') obj[h] = null
        else if (trimmed === 'true') obj[h] = true
        else if (trimmed === 'false') obj[h] = false
        else if (!isNaN(Number(trimmed)) && trimmed !== '') obj[h] = Number(trimmed)
        else obj[h] = trimmed
      })
      return obj
    })

    return { success: true, output: JSON.stringify(rows, null, 2) }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}
