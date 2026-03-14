import type { ConverterLocaleMap } from './types'

const en: ConverterLocaleMap = {
  'json-to-typescript': {
    description: 'Convert JSON objects to TypeScript interfaces with proper types',
    longDescription: 'Paste your JSON data and instantly generate TypeScript interfaces. Supports nested objects, arrays, optional fields, and union types. Perfect for developers working with REST APIs.',
  },
  'json-to-javascript': {
    description: 'Convert JSON to a JavaScript const variable declaration',
    longDescription: 'Convert your JSON data into a JavaScript const declaration. Useful for embedding data directly in JavaScript/Node.js files.',
  },
  'json-to-yaml': {
    description: 'Convert JSON to YAML format for config files and Kubernetes manifests',
    longDescription: 'Convert JSON data to YAML format. YAML is widely used in configuration files, CI/CD pipelines, Docker Compose, and Kubernetes manifests. Preserves all data types.',
  },
  'json-to-xml': {
    description: 'Convert JSON data to XML format',
    longDescription: 'Transform JSON data into well-formatted XML. Supports nested objects, arrays, and all JSON data types. Useful for SOAP APIs and legacy system integrations.',
  },
  'json-to-csv': {
    description: 'Convert JSON arrays to CSV for Excel and spreadsheets',
    longDescription: 'Convert JSON arrays to CSV format. Automatically extracts headers from object keys and handles nested values. Perfect for data export to Excel, Google Sheets, or database imports.',
  },
  'json-to-sql': {
    description: 'Generate SQL CREATE TABLE and INSERT statements from JSON',
    longDescription: 'Convert JSON arrays to SQL INSERT statements with an auto-generated CREATE TABLE. Infers column types from data. Supports NULL handling.',
  },
  'json-beautify': {
    description: 'Format and pretty-print minified JSON',
    longDescription: 'Beautify and format minified or compact JSON data. Adds proper indentation, line breaks, and makes JSON human-readable. Also validates your JSON syntax.',
  },
  'json-minify': {
    description: 'Minify JSON by removing whitespace',
    longDescription: 'Compress and minify JSON by removing all unnecessary whitespace and line breaks. Reduces file size for API responses and storage.',
  },
  'json-to-js-object': {
    description: 'Convert JSON to JavaScript object literal (unquoted keys)',
    longDescription: 'Convert JSON to a JavaScript object literal with unquoted keys where possible. Useful for embedding data in JS files with cleaner syntax.',
  },
  'yaml-to-json': {
    description: 'Convert YAML config files to JSON format',
    longDescription: 'Convert YAML files to JSON. Supports all YAML features including anchors, multi-line strings, and complex data types. Perfect for parsing Docker Compose, Kubernetes, and GitHub Actions files.',
  },
  'yaml-to-xml': {
    description: 'Convert YAML to XML format',
    longDescription: 'Transform YAML data into XML format. Useful for converting configuration files for systems that require XML input.',
  },
  'yaml-to-typescript': {
    description: 'Generate TypeScript interfaces from YAML data',
    longDescription: 'Convert YAML files to TypeScript interface definitions. Useful for generating types from configuration schemas.',
  },
  'xml-to-json': {
    description: 'Convert XML to JSON format',
    longDescription: 'Transform XML documents into JSON format. Preserves attributes, nested elements, and text content. Perfect for modernizing SOAP-based APIs or legacy XML data.',
  },
  'xml-to-yaml': {
    description: 'Convert XML to YAML format',
    longDescription: 'Transform XML documents into YAML format. Clean, readable output for configuration files and data exchange.',
  },
  'xml-beautify': {
    description: 'Format and indent XML documents',
    longDescription: 'Beautify and format XML documents with proper indentation. Makes minified or compressed XML human-readable.',
  },
  'csv-to-json': {
    description: 'Convert CSV files to JSON arrays',
    longDescription: 'Convert CSV data to JSON arrays. Automatically parses headers, handles quoted fields, and infers data types (numbers, booleans, null). Perfect for data processing workflows.',
  },
  'typescript-to-javascript': {
    description: 'Strip TypeScript types and convert to plain JavaScript',
    longDescription: 'Remove TypeScript type annotations, interfaces, generics, and access modifiers to produce clean JavaScript. Useful for sharing code with non-TypeScript projects.',
  },
  'javascript-to-typescript': {
    description: 'Convert JavaScript to TypeScript with basic type annotations',
    longDescription: 'Add TypeScript hints to JavaScript code. Converts require() to import statements and adds basic type annotations. For best results, add manual type refinements afterward.',
  },
  'markdown-to-html': {
    description: 'Convert Markdown to HTML with a complete page template',
    longDescription: 'Convert Markdown documents to HTML. Supports GitHub Flavored Markdown (GFM) including tables, task lists, strikethrough, and fenced code blocks. Generates a complete HTML page with basic styling.',
  },
  'html-to-markdown': {
    description: 'Convert HTML to clean Markdown format',
    longDescription: 'Transform HTML documents into Markdown format. Converts headings, paragraphs, lists, links, images, and code blocks. Great for migrating content to documentation platforms.',
  },
  'html-beautify': {
    description: 'Format and indent HTML documents',
    longDescription: 'Beautify and format HTML code with proper indentation. Makes minified HTML human-readable and easier to maintain.',
  },
  'html-minify': {
    description: 'Minify HTML by removing whitespace and comments',
    longDescription: 'Compress HTML by removing unnecessary whitespace, line breaks, and comments. Reduces page load time and file size.',
  },
  'base64-encode': {
    description: 'Encode text to Base64 format',
    longDescription: 'Encode any text to Base64 format. Used in HTTP Basic Authentication, email attachments, and data URLs. Supports Unicode and special characters.',
  },
  'base64-decode': {
    description: 'Decode Base64 encoded strings back to text',
    longDescription: 'Decode Base64 encoded strings to their original text. Supports standard and URL-safe Base64 encoding.',
  },
  'url-encode': {
    description: 'Encode special characters in URLs',
    longDescription: 'Percent-encode special characters in URLs. Essential for passing query parameters and handling non-ASCII characters in URLs safely.',
  },
  'url-decode': {
    description: 'Decode percent-encoded URLs',
    longDescription: 'Decode percent-encoded URLs back to their original, human-readable form. Useful for debugging API calls and reading encoded URLs.',
  },
  'jwt-decode': {
    description: 'Decode and inspect JWT tokens (header, payload, expiry)',
    longDescription: 'Decode JWT (JSON Web Token) and display header, payload, and metadata. Shows issuer, expiry date, and whether the token has expired. Note: does not verify signature.',
  },
  'html-entities-encode': {
    description: 'Encode special characters to HTML entities',
    longDescription: 'Convert special characters like <, >, &, " to their HTML entity equivalents (&lt;, &gt;, &amp;, &quot;). Essential for safely displaying user input in HTML.',
  },
  'html-entities-decode': {
    description: 'Decode HTML entities back to plain characters',
    longDescription: 'Convert HTML entities (&lt;, &gt;, &amp;, &quot;) back to their original characters. Useful for reading HTML-encoded content.',
  },
  'decimal-to-binary': {
    description: 'Convert decimal numbers to binary representation',
    longDescription: 'Convert decimal (base-10) numbers to binary (base-2). Also shows octal and hexadecimal representations.',
  },
  'binary-to-decimal': {
    description: 'Convert binary numbers to decimal',
    longDescription: 'Convert binary (base-2) numbers to decimal (base-10). Also shows octal and hexadecimal representations.',
  },
  'decimal-to-hex': {
    description: 'Convert decimal numbers to hexadecimal',
    longDescription: 'Convert decimal (base-10) numbers to hexadecimal (base-16). Commonly used in web colors, memory addresses, and low-level programming.',
  },
  'hex-to-decimal': {
    description: 'Convert hexadecimal numbers to decimal',
    longDescription: 'Convert hexadecimal (base-16) numbers to decimal (base-10). Supports 0x prefix.',
  },
  'timestamp-to-date': {
    description: 'Convert Unix timestamp to human-readable date',
    longDescription: 'Convert Unix timestamps (seconds or milliseconds) to human-readable dates. Shows ISO 8601, UTC, and local time formats. Choose any timezone.',
  },
  'date-to-timestamp': {
    description: 'Convert date strings to Unix timestamps',
    longDescription: 'Convert human-readable date strings to Unix timestamps (seconds and milliseconds). Accepts ISO 8601 and many other date formats.',
  },
  'hex-to-rgb': {
    description: 'Convert HEX colors to RGB, HSL, and CSS variables',
    longDescription: 'Convert HEX color codes to RGB, RGBA, HSL, HSLA values and CSS custom properties. Supports both 3-digit and 6-digit hex codes.',
  },
  'rgb-to-hex': {
    description: 'Convert RGB colors to HEX, HSL, and CSS variables',
    longDescription: 'Convert RGB or RGBA color values to HEX codes, HSL, and CSS custom properties. Accepts rgb() format or comma-separated values.',
  },
  'hsl-to-rgb': {
    description: 'Convert HSL colors to HEX and RGB formats',
    longDescription: 'Convert HSL (Hue, Saturation, Lightness) color values to HEX, RGB, and CSS variables.',
  },
  'css-minify': {
    description: 'Minify CSS by removing whitespace and comments',
    longDescription: 'Compress CSS files by removing comments, whitespace, and redundant semicolons. Reduces file size for faster page loading.',
  },
  'css-beautify': {
    description: 'Format and pretty-print CSS code',
    longDescription: 'Beautify and format minified or messy CSS with proper indentation and line breaks. Makes CSS human-readable and maintainable.',
  },
  'css-to-scss': {
    description: 'Convert CSS custom properties to SCSS variables',
    longDescription: 'Convert CSS files to SCSS syntax. Transforms CSS custom properties (:root variables) to SCSS variables and var() references. Manual nesting required.',
  },
  'css-to-tailwind': {
    description: 'Convert CSS properties to Tailwind CSS utility classes',
    longDescription: 'Convert CSS declarations to Tailwind CSS utility class names. Supports layout, flexbox, spacing, and typography properties. Complex values may need manual conversion.',
  },
}

export default en
