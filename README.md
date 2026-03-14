# DevConvert 🔄

> Free online code & data converter for developers.
> 35+ converters running entirely in the browser — no server needed.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## 📁 Project Structure

```
src/
├── config/
│   └── converters.config.ts   ← All converter definitions + SEO metadata
├── converters/
│   ├── json.converter.ts       ← JSON → TS, JS, YAML, XML, CSV, SQL
│   ├── yaml.converter.ts       ← YAML → JSON, XML, TypeScript
│   ├── xml.converter.ts        ← XML → JSON, YAML, Beautify
│   ├── code.converter.ts       ← JS ↔ TypeScript, JS Beautify
│   ├── markup.converter.ts     ← Markdown ↔ HTML, HTML Beautify/Minify
│   ├── encoding.converter.ts   ← Base64, URL, JWT, Number bases, Timestamps
│   ├── color.converter.ts      ← HEX ↔ RGB ↔ HSL, CSS Palette
│   └── css.converter.ts        ← CSS Minify/Beautify, CSS→SCSS, CSS→Tailwind
├── components/
│   ├── Header/                 ← Site header + navigation
│   ├── Footer/                 ← Site footer + links
│   ├── CodeEditor/             ← Monaco Editor wrapper (VS Code-style)
│   ├── AdBanner/               ← Google AdSense integration
│   ├── ConverterCard/          ← Card component for converter grid
│   └── SEOHead/                ← Dynamic meta tags per page
├── pages/
│   ├── HomePage/               ← Landing page with search + categories
│   └── ConverterPage/          ← Tool page with Monaco editors
├── styles/
│   └── global.css              ← Global styles + dark theme
└── types/
    └── index.ts                ← TypeScript type definitions
```

## ➕ Adding a New Converter

1. **Write the logic** in `src/converters/your.converter.ts`
2. **Register it** in `src/config/converters.config.ts`:

```typescript
{
  id: 'json-to-graphql',         // URL slug: /json-to-graphql
  name: 'JSON to GraphQL',
  shortName: 'JSON → GraphQL',
  description: 'Generate GraphQL schemas from JSON',
  longDescription: '...',
  category: 'json',
  inputLanguage: 'json',
  outputLanguage: 'graphql',
  inputPlaceholder: '{ "id": 1, "name": "Alice" }',
  convert: yourConvertFunction,   // (input: string) => ConvertResult
  seoTitle: '...',
  seoDescription: '...',
  seoKeywords: ['json to graphql', '...'],
  urlAliases: ['json2graphql'],
  relatedConverters: ['json-to-typescript'],
  isPopular: false,
}
```

3. **Update sitemap**: `node scripts/generate-sitemap.mjs`
4. Done! The tool is now live at `/json-to-graphql`

## 🔌 Google AdSense Setup

1. Get approved for Google AdSense
2. In `src/components/AdBanner/index.tsx`:
   - Set `ADSENSE_ENABLED = true`
   - Set `ADSENSE_CLIENT = 'ca-pub-YOUR_PUBLISHER_ID'`
3. In `index.html`, uncomment the AdSense script tag
4. Replace slot IDs in ConverterPage.tsx and HomePage.tsx

## 🔍 SEO Strategy

Each converter page has:
- Unique `<title>` and `<meta description>`
- Canonical URL (`/json-to-typescript`)
- URL aliases that redirect to canonical (`/json2ts` → `/json-to-typescript`)
- Structured data (WebApplication schema)
- `sitemap.xml` with all converter URLs
- `robots.txt` allowing all crawlers

## 🌐 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

Add `vercel.json` for SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify
Add `public/_redirects`:
```
/*  /index.html  200
```

### Any static host
Run `npm run build` → deploy `dist/` folder.

## 📦 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + TypeScript |
| UI Library | Ant Design 5 |
| Code Editor | Monaco Editor (VS Code engine) |
| Routing | React Router v6 |
| Build | Vite 5 |
| YAML | js-yaml |
| XML | fast-xml-parser |
| Markdown→HTML | marked |
| HTML→Markdown | turndown |
| Compression | vite-plugin-compression |

## 🔮 Future: Adding Backend (ASP.NET Core)

The architecture is designed for easy backend integration. When you need server-side conversion (e.g., AI-powered conversion, heavy processing), create an API service:

```
// src/services/api.service.ts
export async function convertViaAPI(converter: string, input: string): Promise<ConvertResult> {
  const res = await fetch(`/api/convert/${converter}`, {
    method: 'POST',
    body: JSON.stringify({ input }),
    headers: { 'Content-Type': 'application/json' }
  })
  return res.json()
}
```

Then in the converter config, point `convert` to the API function instead of a local function.
"# devconvert" 
