// scripts/generate-sitemap.mjs
// Run: node scripts/generate-sitemap.mjs
// Generates public/sitemap.xml for all converters

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://potamiya.com'
const rootDir = resolve(__dirname, '..')
const converterSource = readFileSync(resolve(rootDir, 'src/config/converters.config.ts'), 'utf-8')
const converterIds = [...converterSource.matchAll(/\bid:\s*(['"])([^'"]+)\1/g)]
  .map((match) => match[2])
const blogData = JSON.parse(readFileSync(resolve(rootDir, 'src/data/blogs-data.json'), 'utf-8'))
const blogSlugs = blogData.blogs.map((blog) => blog.slug)

if (converterIds.length === 0 || blogSlugs.length === 0) {
  throw new Error('Could not find converter IDs or blog slugs for the sitemap')
}
if (new Set(converterIds).size !== converterIds.length || new Set(blogSlugs).size !== blogSlugs.length) {
  throw new Error('Duplicate converter IDs or blog slugs found while generating the sitemap')
}

const paths = [
  '/',
  '/about',
  '/privacy',
  '/terms',
  '/blog',
  ...converterIds.map((id) => `/${id}`),
  ...blogSlugs.map((slug) => `/blog/${slug}`),
]
const urls = paths.map((path) => `${BASE_URL}${path}`)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`

const outPath = resolve(rootDir, 'public/sitemap.xml')
writeFileSync(outPath, xml, 'utf-8')
console.log(`Sitemap generated at ${outPath} with ${urls.length} URLs`)
