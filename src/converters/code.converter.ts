import type { ConvertResult } from '@/types'

// ─── TypeScript → JavaScript (strip types) ────────────────────────────────

export function typescriptToJavascript(input: string): ConvertResult {
  try {
    let output = input

    // Remove type imports: import type { ... } from '...'
    output = output.replace(/^import\s+type\s+\{[^}]*\}\s+from\s+['"][^'"]+['"];?\n?/gm, '')

    // Remove export type declarations
    output = output.replace(/^export\s+type\s+\w[\w\s=|&<>[\]{}(),?;'"]*;?\n?/gm, '')
    output = output.replace(/^export\s+interface\s+\w[\s\S]*?^}/gm, '')
    output = output.replace(/^interface\s+\w[\s\S]*?^}/gm, '')
    output = output.replace(/^type\s+\w+\s*=[\s\S]*?;/gm, '')

    // Remove type annotations: (param: Type) → (param)
    output = output.replace(/:\s*(?:readonly\s+)?(?:\w+(?:<[^>]*>)?(?:\[\])?(?:\s*\|\s*\w+(?:<[^>]*>)?(?:\[\])?)*)/g, (match, offset) => {
      // Keep object colon in { key: value } and return types
      const before = input.slice(Math.max(0, offset - 30), offset)
      // Skip ternary operator colons and object literals
      if (/[?{,]\s*$/.test(before)) return match
      return ''
    })

    // Remove generic type parameters from function calls/declarations
    output = output.replace(/<[A-Z]\w*(?:,\s*[A-Z]\w*)*>/g, '')

    // Remove 'as Type' casts
    output = output.replace(/\s+as\s+\w+(?:<[^>]*>)?(?:\[\])?/g, '')

    // Remove non-null assertions
    output = output.replace(/!/g, '')

    // Remove readonly keyword
    output = output.replace(/\breadonly\b\s+/g, '')

    // Remove access modifiers in class
    output = output.replace(/\b(public|private|protected|abstract|override)\s+/g, '')

    // Clean up double spaces and empty lines
    output = output.replace(/\n{3,}/g, '\n\n').trim()

    return { success: true, output, warnings: ['⚠️ This is a best-effort conversion. Complex TypeScript generics may need manual adjustment.'] }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── JavaScript → TypeScript (add basic types) ────────────────────────────

export function javascriptToTypescript(input: string): ConvertResult {
  try {
    let output = input

    // Add return type annotations to arrow functions
    output = output.replace(
      /^(export\s+)?(const|let|var)\s+(\w+)\s*=\s*(\([^)]*\))\s*=>/gm,
      (match, exp = '', decl, name, params) => `${exp}${decl} ${name} = ${params}: unknown =>`
    )

    // Convert require() to import
    output = output.replace(
      /const\s+(\{[^}]+\}|\w+)\s*=\s*require\(['"]([^'"]+)['"]\)/g,
      'import $1 from \'$2\''
    )

    // Add PropTypes-style comment for React components
    output = output.replace(
      /^(export\s+)?function\s+([A-Z]\w*)\s*\((\w+)\)/gm,
      '$1function $2($3: React.FC)'
    )

    return {
      success: true,
      output,
      warnings: ['⚠️ This is a basic conversion. Add proper TypeScript types manually for best results.'],
    }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── JavaScript Beautify ──────────────────────────────────────────────────

export function jsBeautify(input: string): ConvertResult {
  try {
    // Basic beautifier — use prettier for real projects
    let output = input
    let indent = 0
    const lines: string[] = []
    const tokens = output.split('\n').map((l) => l.trim()).filter(Boolean)

    for (const line of tokens) {
      if (line.startsWith('}') || line.startsWith(']') || line.startsWith(')')) {
        indent = Math.max(0, indent - 1)
      }
      lines.push('  '.repeat(indent) + line)
      const opens = (line.match(/[{[(]/g) || []).length
      const closes = (line.match(/[}\])]/g) || []).length
      indent = Math.max(0, indent + opens - closes)
    }

    return { success: true, output: lines.join('\n') }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── JSON → JS Object (unquoted keys) ────────────────────────────────────

export function jsonToJsObject(input: string): ConvertResult {
  try {
    const parsed = JSON.parse(input)

    function toJsValue(val: unknown, depth = 0): string {
      const pad = '  '.repeat(depth)
      const innerPad = '  '.repeat(depth + 1)

      if (val === null) return 'null'
      if (typeof val === 'string') return JSON.stringify(val)
      if (typeof val === 'number' || typeof val === 'boolean') return String(val)
      if (Array.isArray(val)) {
        if (val.length === 0) return '[]'
        const items = val.map((v) => innerPad + toJsValue(v, depth + 1)).join(',\n')
        return `[\n${items}\n${pad}]`
      }
      if (typeof val === 'object') {
        const entries = Object.entries(val as Record<string, unknown>)
        if (entries.length === 0) return '{}'
        const fields = entries.map(([k, v]) => {
          const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `"${k}"`
          return `${innerPad}${key}: ${toJsValue(v, depth + 1)}`
        })
        return `{\n${fields.join(',\n')}\n${pad}}`
      }
      return String(val)
    }

    return { success: true, output: `const data = ${toJsValue(parsed)};` }
  } catch (e) {
    return { success: false, output: '', error: `Invalid JSON: ${(e as Error).message}` }
  }
}
