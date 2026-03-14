// scripts/generate-sitemap.mjs
// Run: node scripts/generate-sitemap.mjs
// Generates public/sitemap.xml for all converters

import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://devconvert.io'
const TODAY = new Date().toISOString().split('T')[0]

// Manually list all converter IDs (mirrors converters.config.ts)
const CONVERTER_IDS = [
  'json-to-typescript',
  'json-to-javascript',
  'json-to-yaml',
  'json-to-xml',
  'json-to-csv',
  'json-to-sql',
  'json-beautify',
  'json-minify',
  'json-to-js-object',
  'yaml-to-json',
  'yaml-to-xml',
  'yaml-to-typescript',
  'xml-to-json',
  'xml-to-yaml',
  'xml-beautify',
  'csv-to-json',
  'typescript-to-javascript',
  'javascript-to-typescript',
  'markdown-to-html',
  'html-to-markdown',
  'html-beautify',
  'html-minify',
  'base64-encode',
  'base64-decode',
  'url-encode',
  'url-decode',
  'jwt-decode',
  'html-entities-encode',
  'html-entities-decode',
  'decimal-to-binary',
  'binary-to-decimal',
  'decimal-to-hex',
  'hex-to-decimal',
  'timestamp-to-date',
  'date-to-timestamp',
  'hex-to-rgb',
  'rgb-to-hex',
  'hsl-to-rgb',
  'css-minify',
  'css-beautify',
  'css-to-scss',
  'css-to-tailwind',
]

const urls = [
  { loc: BASE_URL, changefreq: 'weekly', priority: '1.0' },
  ...CONVERTER_IDS.map((id) => ({
    loc: `${BASE_URL}/${id}`,
    changefreq: 'monthly',
    priority: '0.8',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

const outPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outPath, xml, 'utf-8')
console.log(`✅ Sitemap generated at ${outPath} with ${urls.length} URLs`)
