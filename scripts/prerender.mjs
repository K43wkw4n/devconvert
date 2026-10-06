import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer'
import { createServer, preview } from 'vite'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(rootDir, 'dist')
const baseUrl = 'http://127.0.0.1:4173'
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const vite = await createServer({
  configFile: resolve(rootDir, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
})

let browser
let previewServer

try {
  const { default: converters } = await vite.ssrLoadModule('/src/config/converters.config.ts')
  if (!Array.isArray(converters) || converters.length === 0) {
    throw new Error('No converters were exported from src/config/converters.config.ts')
  }

  previewServer = await preview({
    preview: { host: '127.0.0.1', port: 4173, strictPort: true },
  })
  const launchOptions = process.platform === 'linux'
    ? {
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        headless: 'shell',
      }
    : {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        ...(process.platform === 'win32' && existsSync(edgePath)
          ? { executablePath: edgePath }
          : {}),
      }
  browser = await puppeteer.launch(launchOptions)
  const page = await browser.newPage()
  await page.emulateLocale('en-US')

  const routes = [
    { path: '/', output: resolve(distDir, 'index.html') },
    ...converters.map(({ id }) => ({
      path: `/${id}`,
      output: resolve(distDir, id, 'index.html'),
    })),
  ]

  for (const { path, output } of routes) {
    await page.goto(`${baseUrl}${path}`, { waitUntil: 'networkidle0' })
    await page.waitForFunction(() => {
      return document.querySelector('h1') &&
        document.querySelector('meta[name="description"]')?.content &&
        document.querySelector('link[rel="canonical"]')?.href &&
        document.querySelector('#page-schema')?.textContent
    })

    const metadata = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      schema: document.querySelector('#page-schema')?.textContent,
      heading: document.querySelector('h1')?.textContent,
      headingCount: document.querySelectorAll('h1').length,
    }))
    if (!metadata.title || !metadata.description || !metadata.canonical ||
        !metadata.schema || !metadata.heading || metadata.headingCount !== 1 ||
        metadata.canonical !== `https://potamiya.com${path}`) {
      throw new Error(`Missing prerendered SEO content for ${path}`)
    }
    JSON.parse(metadata.schema)

    mkdirSync(dirname(output), { recursive: true })
    writeFileSync(output, await page.content(), 'utf8')
  }

  console.log(`Prerendered ${routes.length} routes to ${distDir}`)
} finally {
  if (browser) await browser.close()
  if (previewServer) {
    await new Promise((resolveClose, reject) => {
      previewServer.httpServer.close((error) => error ? reject(error) : resolveClose())
    })
  }
  await vite.close()
}
