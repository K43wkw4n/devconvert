import type { ConvertResult } from '@/types'

// ─── Markdown → HTML ──────────────────────────────────────────────────────

export async function markdownToHtml(input: string): Promise<ConvertResult> {
  try {
    const { marked } = await import('marked')
    marked.setOptions({ gfm: true, breaks: true })
    const rawHtml = await marked(input)
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Converted Document</title>
  <style>
    body { font-family: -apple-system, sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; line-height: 1.6; color: #333; }
    pre { background: #f4f4f4; padding: 1rem; border-radius: 4px; overflow-x: auto; }
    code { background: #f4f4f4; padding: 0.2em 0.4em; border-radius: 3px; }
    pre code { background: none; padding: 0; }
    blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 1rem; color: #666; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 0.5rem; text-align: left; }
  </style>
</head>
<body>
${rawHtml}
</body>
</html>`
    return { success: true, output: html }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── HTML → Markdown ─────────────────────────────────────────────────────

export async function htmlToMarkdown(input: string): Promise<ConvertResult> {
  try {
    const TurndownService = (await import('turndown')).default
    const td = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
      bulletListMarker: '-',
    })
    const output = td.turndown(input)
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── Markdown Beautify / Preview ─────────────────────────────────────────

export async function markdownToHtmlSnippet(input: string): Promise<ConvertResult> {
  try {
    const { marked } = await import('marked')
    marked.setOptions({ gfm: true, breaks: true })
    const output = await marked(input)
    return { success: true, output: String(output) }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── HTML Beautify ────────────────────────────────────────────────────────

export function htmlBeautify(input: string): ConvertResult {
  try {
    let level = 0
    const voidElements = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'])
    const result: string[] = []

    const tokenRegex = /<!--[\s\S]*?-->|<\/[^>]+>|<[a-zA-Z][^>]*(\/?)>|[^<]+/g
    const tokens = input.match(tokenRegex) || []

    for (const token of tokens) {
      const trimmed = token.trim()
      if (!trimmed) continue

      if (trimmed.startsWith('<!--')) {
        result.push('  '.repeat(level) + trimmed)
      } else if (trimmed.startsWith('</')) {
        level = Math.max(0, level - 1)
        result.push('  '.repeat(level) + trimmed)
      } else if (trimmed.startsWith('<')) {
        result.push('  '.repeat(level) + trimmed)
        const tagMatch = trimmed.match(/^<([a-zA-Z][a-zA-Z0-9]*)/)
        if (tagMatch && !voidElements.has(tagMatch[1].toLowerCase()) && !trimmed.endsWith('/>')) {
          level++
        }
      } else {
        const lines = trimmed.split('\n')
        for (const line of lines) {
          if (line.trim()) result.push('  '.repeat(level) + line.trim())
        }
      }
    }

    return { success: true, output: result.join('\n') }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── HTML Minify ──────────────────────────────────────────────────────────

export function htmlMinify(input: string): ConvertResult {
  try {
    const output = input
      .replace(/<!--[\s\S]*?-->/g, '')         // remove comments
      .replace(/\s{2,}/g, ' ')                  // collapse whitespace
      .replace(/>\s+</g, '><')                  // remove space between tags
      .replace(/\s+>/g, '>')                    // trim space before >
      .replace(/<\s+/g, '<')                    // trim space after <
      .trim()
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}
