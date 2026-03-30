// ─── Converter Types ───────────────────────────────────────────────────────

export type MonacoLanguage =
  | 'json'
  | 'typescript'
  | 'javascript'
  | 'yaml'
  | 'xml'
  | 'html'
  | 'markdown'
  | 'css'
  | 'scss'
  | 'sql'
  | 'plaintext'
  | 'graphql'
  | 'ini'

export type ConverterCategory =
  | 'json'
  | 'code'
  | 'markup'
  | 'encoding'
  | 'color'
  | 'data'
  | 'utility'

export interface ConvertResult {
  success: boolean
  output: string
  error?: string
  warnings?: string[]
}

/** Extra UI option rendered alongside the converter (e.g. timezone selector) */
export interface ConverterOption {
  key: string
  type: 'timezone' | 'select' | 'toggle'
  label: string
  defaultValue?: string
  /** Only for type='select' */
  selectOptions?: { value: string; label: string }[]
}

export interface Converter {
  /** Unique ID used in the URL: /json-to-typescript */
  id: string
  /** Human-readable name */
  name: string
  /** Short label for cards */
  shortName: string
  /** One-line description */
  description: string
  /** Longer description for SEO page */
  longDescription: string
  /** howToUse the tools */
  howToUse?: string
  /** Category for grouping */
  category: ConverterCategory
  /** Monaco language for input editor */
  inputLanguage: MonacoLanguage
  /** Monaco language for output editor */
  outputLanguage: MonacoLanguage
  /** Placeholder text shown in empty input */
  inputPlaceholder: string
  /** The actual conversion function — options are passed as Record<key, value> */
  convert: (input: string, options?: Record<string, string>) => ConvertResult | Promise<ConvertResult>
  /** Extra UI controls (e.g. timezone picker) */
  options?: ConverterOption[]
  /** SEO page title */
  seoTitle: string
  /** SEO meta description */
  seoDescription: string
  /** SEO keywords */
  seoKeywords: string[]
  /** Alternative URL slugs that redirect to this converter */
  urlAliases?: string[]
  /** IDs of related converters */
  relatedConverters?: string[]
  /** Whether this converter is popular (shown on home page hero) */
  isPopular?: boolean
}

export interface ConverterGroup {
  category: ConverterCategory
  label: string
  icon: string
  converters: Converter[]
}
