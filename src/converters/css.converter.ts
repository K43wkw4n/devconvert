import type { ConvertResult } from '@/types'

// ─── CSS Minify ───────────────────────────────────────────────────────────

export function cssMinify(input: string): ConvertResult {
  try {
    const output = input
      .replace(/\/\*[\s\S]*?\*\//g, '')   // remove comments
      .replace(/\s{2,}/g, ' ')             // collapse whitespace
      .replace(/\s*{\s*/g, '{')
      .replace(/\s*}\s*/g, '}')
      .replace(/\s*:\s*/g, ':')
      .replace(/\s*;\s*/g, ';')
      .replace(/\s*,\s*/g, ',')
      .replace(/;}/g, '}')                 // remove last ; before }
      .trim()
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── CSS Beautify ─────────────────────────────────────────────────────────

export function cssBeautify(input: string): ConvertResult {
  try {
    let output = input
      .replace(/\/\*[\s\S]*?\*\//g, (m) => m)
      .replace(/\s*{\s*/g, ' {\n  ')
      .replace(/;\s*/g, ';\n  ')
      .replace(/\s*}\s*/g, '\n}\n')
      .replace(/,\s*(?=[^{]*{)/g, ',\n')  // newline after comma in selectors
      .replace(/  \n}/g, '\n}')
      .replace(/\n{3,}/g, '\n\n')
      .trim()
    return { success: true, output }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── CSS → SCSS Variables ─────────────────────────────────────────────────

export function cssToScss(input: string): ConvertResult {
  try {
    let output = input

    // Convert :root CSS variables to SCSS variables
    output = output.replace(/:root\s*\{([^}]+)\}/g, (_m, vars) => {
      const scssVars = vars.replace(/--([a-zA-Z][a-zA-Z0-9-]*)\s*:\s*([^;]+);/g,
        (_: string, name: string, value: string) => `$${name.replace(/-/g, '_')}: ${value.trim()};`
      )
      return scssVars
    })

    // Convert var(--name) to $name usage
    output = output.replace(/var\(--([a-zA-Z][a-zA-Z0-9-]*)\)/g,
      (_m, name) => `$${name.replace(/-/g, '_')}`
    )

    // Comment header
    output = `// Auto-converted from CSS to SCSS\n// Review variable names and nest selectors manually\n\n${output}`

    return {
      success: true,
      output,
      warnings: ['⚠️ SCSS nesting and mixins must be added manually. This only converts CSS custom properties to SCSS variables.'],
    }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}

// ─── CSS → Tailwind Utility Classes (basic) ───────────────────────────────

const CSS_TO_TW: Record<string, string> = {
  'display: flex': 'flex',
  'display: block': 'block',
  'display: none': 'hidden',
  'display: grid': 'grid',
  'display: inline': 'inline',
  'display: inline-flex': 'inline-flex',
  'flex-direction: column': 'flex-col',
  'flex-direction: row': 'flex-row',
  'align-items: center': 'items-center',
  'align-items: flex-start': 'items-start',
  'align-items: flex-end': 'items-end',
  'justify-content: center': 'justify-center',
  'justify-content: flex-start': 'justify-start',
  'justify-content: flex-end': 'justify-end',
  'justify-content: space-between': 'justify-between',
  'justify-content: space-around': 'justify-around',
  'text-align: center': 'text-center',
  'text-align: left': 'text-left',
  'text-align: right': 'text-right',
  'font-weight: bold': 'font-bold',
  'font-weight: 700': 'font-bold',
  'font-weight: 600': 'font-semibold',
  'font-weight: 500': 'font-medium',
  'font-weight: 400': 'font-normal',
  'position: relative': 'relative',
  'position: absolute': 'absolute',
  'position: fixed': 'fixed',
  'position: sticky': 'sticky',
  'overflow: hidden': 'overflow-hidden',
  'overflow: auto': 'overflow-auto',
  'overflow: scroll': 'overflow-scroll',
  'cursor: pointer': 'cursor-pointer',
  'width: 100%': 'w-full',
  'height: 100%': 'h-full',
  'width: 100vw': 'w-screen',
  'height: 100vh': 'h-screen',
}

export function cssToTailwind(input: string): ConvertResult {
  try {
    const classes: string[] = []
    const unmatched: string[] = []

    const declarations = input
      .replace(/[{}]/g, '')
      .split(';')
      .map((d) => d.trim())
      .filter(Boolean)

    for (const decl of declarations) {
      const normalized = decl.replace(/\s+/g, ' ').toLowerCase()
      const tw = CSS_TO_TW[normalized]
      if (tw) classes.push(tw)
      else if (decl) unmatched.push(decl)
    }

    let output = classes.length ? `class="${classes.join(' ')}"` : '// No Tailwind matches found'
    if (unmatched.length) {
      output += `\n\n/* Could not convert (add manually): */\n${unmatched.map((d) => `/* ${d} */`).join('\n')}`
    }

    return {
      success: true,
      output,
      warnings: unmatched.length ? [`${unmatched.length} properties could not be automatically converted to Tailwind`] : undefined,
    }
  } catch (e) {
    return { success: false, output: '', error: `Conversion failed: ${(e as Error).message}` }
  }
}
