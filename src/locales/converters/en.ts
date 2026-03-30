import type { ConverterLocaleMap } from './types'

const en: ConverterLocaleMap = {
  // ── JSON ──────────────────────────────────────────────────────────────────
  'json-to-typescript': {
    description:
      'Instantly convert JSON objects into fully typed TypeScript interfaces — supports nested objects, arrays, optional fields, and union types.',
    longDescription:
      'Paste any JSON data and get clean, production-ready TypeScript interfaces in seconds. The converter intelligently infers types for strings, numbers, booleans, arrays, and deeply nested objects. Null values are marked as optional fields. Array items are analyzed to produce accurate element types, including union types when items are mixed. Nested objects become separate named interfaces for better code organization. Perfect for developers building REST API clients, working with third-party APIs, or migrating JavaScript projects to TypeScript.',
    howToUse:
      `1. Paste your JSON data into the input panel on the left.\n2. The TypeScript interfaces are generated automatically in the right panel.\n3. If your JSON has a top-level object, a "Root" interface is created. Nested objects become child interfaces (e.g., RootAddress).\n4. Copy the output and paste it directly into your TypeScript project.\n5. Tip: Wrap arrays of objects in [] — each item's shape becomes a typed interface.`,
  },
  'json-to-javascript': {
    description:
      'Convert JSON data into a JavaScript const variable declaration, ready to paste into any JS or Node.js file.',
    longDescription:
      'Transform JSON into a clean JavaScript const declaration. The output uses standard JSON.stringify formatting with 2-space indentation, making it immediately usable in Node.js scripts, frontend JavaScript files, or configuration modules. This is especially useful when you want to embed static API response data, mock data, or configuration objects directly into your JavaScript codebase without importing an external JSON file.',
    howToUse:
      '1. Paste your JSON object or array into the input panel.\n2. The output will be a const data = { ... }; declaration.\n3. Copy the output and paste it into your .js or .mjs file.\n4. Rename "data" to any variable name that suits your project.\n5. Tip: Use this when you want to avoid a JSON import and keep data inline.',
  },
  'json-to-yaml': {
    description:
      'Convert JSON to YAML format — ideal for Kubernetes manifests, Docker Compose files, GitHub Actions, and other config-driven workflows.',
    longDescription:
      'Transform JSON data into clean, human-readable YAML. The converter preserves all data types including strings, numbers, booleans, arrays, and nested objects. YAML output uses 2-space indentation and avoids unnecessary quotes where possible, following standard YAML conventions. This tool is invaluable for DevOps engineers and developers who need to bridge JSON-based API responses or config generators with YAML-based infrastructure tools like Helm, Ansible, or CI/CD pipelines.',
    howToUse:
      '1. Paste your JSON into the input panel.\n2. YAML output appears instantly in the right panel.\n3. Check that nested objects are correctly indented (2 spaces per level).\n4. Copy the YAML and use it directly in your config files or manifests.\n5. Tip: JSON arrays become YAML lists (lines starting with -).',
  },
  'json-to-xml': {
    description:
      'Convert JSON data to well-formatted XML — useful for SOAP APIs, RSS feeds, and legacy enterprise integrations.',
    longDescription:
      'Transform JSON objects and arrays into properly structured XML documents with a <?xml?> declaration. Nested JSON objects become nested XML elements, and JSON arrays are expanded as repeated sibling elements under the same tag. This tool bridges modern JSON-based systems with legacy XML consumers such as SOAP web services, enterprise middleware, EDI systems, and older CMS platforms. All output is human-readable with proper indentation.',
    howToUse:
      '1. Paste your JSON into the input panel.\n2. The XML document is generated with a root <root> element wrapping your data.\n3. JSON keys become XML tag names; nested objects become child elements.\n4. Arrays produce repeated elements with the same tag name.\n5. Tip: Rename the outer <root> tag manually if you need a specific root element name.',
  },
  'json-to-csv': {
    description:
      'Convert JSON arrays to CSV format — export data directly to Excel, Google Sheets, or any spreadsheet tool.',
    longDescription:
      'Flatten JSON arrays into CSV rows with auto-detected column headers drawn from object keys. Each item in the array becomes a row; nested object values are serialized as strings. The converter handles quoted fields containing commas or newlines correctly, following the RFC 4180 CSV standard. This tool is ideal for data export pipelines, generating reports from API responses, or preparing datasets for import into databases or BI tools.',
    howToUse:
      '1. Paste a JSON array (list of objects) into the input panel.\n2. Column headers are automatically extracted from the keys of the first object.\n3. Each object in the array becomes one CSV row.\n4. Copy the CSV output and paste into Excel, Google Sheets, or save as a .csv file.\n5. Tip: All objects should share the same keys for consistent columns.',
  },
  'json-to-sql': {
    description:
      'Generate SQL CREATE TABLE and INSERT statements from JSON arrays — instantly scaffold your database schema from real data.',
    longDescription:
      'Convert JSON arrays into ready-to-run SQL scripts. The tool auto-generates a CREATE TABLE statement with column types inferred from your data (TEXT, NUMERIC, BOOLEAN), then produces one INSERT statement per JSON object. NULL values and missing keys are handled gracefully. This is a huge time-saver when you have sample API data and want to quickly set up a relational database table without writing SQL by hand.',
    howToUse:
      '1. Paste a JSON array of objects into the input.\n2. The tool infers column types from the data values.\n3. A CREATE TABLE block is generated at the top, followed by INSERT statements.\n4. Replace "table_name" with your actual table name before running.\n5. Tip: Run the CREATE TABLE first, then execute the INSERT statements.',
  },
  'json-beautify': {
    description:
      'Format and pretty-print minified or compact JSON with proper indentation — also validates your JSON syntax.',
    longDescription:
      `Take any minified, compressed, or poorly formatted JSON string and instantly produce a clean, human-readable version with 2-space indentation. The formatter also validates your JSON syntax — if the input is malformed, you'll see a clear error message pointing to the issue.This is an essential daily tool for developers inspecting API responses, debugging JSON payloads, or reviewing configuration files.`,
    howToUse:
      '1. Paste your minified or messy JSON into the input panel.\n2. The formatted JSON appears immediately in the output panel.\n3. If there\'s a syntax error, an error message will explain the problem.\n4. Copy the beautified JSON for use in your editor, documentation, or logs.\n5. Tip: Use this to validate JSON before sending it as an API request body.',
  },
  'json-minify': {
    description:
      'Compress JSON by removing all whitespace and line breaks — reduce payload size for API responses and storage.',
    longDescription:
      'Strip all unnecessary whitespace, newlines, and indentation from JSON to produce the most compact representation possible. Minified JSON is ideal for API responses where bandwidth matters, localStorage values, environment variable payloads, or any scenario where JSON size needs to be minimized. The output is functionally identical to the input — only formatting is removed, never data.',
    howToUse:
      '1. Paste your formatted (pretty-printed) JSON into the input.\n2. The minified single-line JSON appears instantly.\n3. Copy and use in API calls, headers, or compressed storage.\n4. Tip: Combine with Base64 Encode if you need to embed JSON in a URL or header value.',
  },
  'json-to-js-object': {
    description:
      'Convert JSON to a JavaScript object literal with unquoted keys — cleaner syntax for embedding data in JS source files.',
    longDescription:
      'JSON requires all keys to be quoted strings, but native JavaScript object literals allow unquoted keys when the key is a valid identifier. This converter transforms JSON into JS object syntax, removing unnecessary quotes from keys while keeping string values properly quoted. The result is idiomatic JavaScript that looks natural in source code. Useful for config files, mock data, and any situation where you want JS object syntax instead of JSON.',
    howToUse:
      '1. Paste your JSON into the input panel.\n2. The output is a const data = { ... }; with unquoted keys where valid.\n3. Keys with special characters or spaces remain quoted.\n4. Copy and paste directly into your .js file.\n5. Tip: This is NOT valid JSON — it\'s valid JavaScript. Don\'t use it where strict JSON is expected.',
  },
  // ── YAML ─────────────────────────────────────────────────────────────────
  'yaml-to-json': {
    description:
      'Convert YAML config files to JSON — parse Docker Compose, Kubernetes, GitHub Actions, and other YAML-based configs instantly.',
    longDescription:
      'Transform any valid YAML document into a well-formatted JSON object. The converter supports the full YAML spec including multi-line strings, anchors and aliases, complex mappings, and nested sequences. This is invaluable for developers who need to process YAML config files programmatically, feed YAML data into JSON-only APIs, or simply inspect the parsed structure of a complex YAML document.',
    howToUse:
      '1. Paste your YAML content into the input panel.\n2. JSON output is generated automatically.\n3. Verify that YAML anchors (&anchor, *alias) are correctly resolved in the output.\n4. Copy the JSON for use in APIs, code, or further transformation.\n5. Tip: If you get an error, check for tab characters — YAML requires spaces, not tabs, for indentation.',
  },
  'yaml-to-xml': {
    description:
      'Convert YAML documents to XML format — bridge YAML-based configurations with systems that require XML input.',
    longDescription:
      'Transform YAML data into a properly structured XML document. The converter parses the YAML, then maps each key-value pair to XML elements, with sequences becoming repeated sibling elements. A <?xml?> declaration is included in the output. This tool is useful when you need to feed YAML-configured data into XML-only consumers such as SOAP services, legacy enterprise systems, or XML-based reporting tools.',
    howToUse:
      '1. Paste your YAML into the input panel.\n2. XML output is generated with a <root> wrapper element.\n3. YAML mappings become nested XML elements; sequences become repeated tags.\n4. Copy the XML and use it in your integration or save as a .xml file.\n5. Tip: Validate the XML output with an XML validator if needed for strict schema compliance.',
  },
  'yaml-to-typescript': {
    description:
      'Generate TypeScript interfaces from YAML data — create typed config schemas from your YAML files.',
    longDescription:
      'Convert YAML documents into TypeScript interface definitions by first parsing the YAML to JSON, then inferring TypeScript types from the structure. This is especially useful for creating strongly-typed wrappers around YAML configuration files in TypeScript projects, such as app config schemas, environment variable definitions, or API spec structures. The output mirrors the behavior of the JSON-to-TypeScript converter applied to the parsed YAML.',
    howToUse:
      '1. Paste your YAML document into the input panel.\n2. TypeScript interfaces are generated in the output.\n3. The top-level YAML mapping becomes the "Root" interface.\n4. Copy the interfaces into a .ts file in your project.\n5. Tip: Use this alongside a YAML-parsing library like js-yaml to load and type-check your config at runtime.',
  },
  // ── XML ──────────────────────────────────────────────────────────────────
  'xml-to-json': {
    description:
      'Convert XML documents to JSON — modernize SOAP APIs, parse RSS/Atom feeds, and process legacy XML data with ease.',
    longDescription:
      'Transform XML into JSON while preserving attributes (prefixed with @_), nested elements, and text content. The converter uses fast-xml-parser, which correctly handles complex XML including namespaces, CDATA sections, and mixed content. This is essential for developers modernizing SOAP-based services, consuming RSS/Atom feeds, parsing configuration XMLs, or integrating with enterprise systems that output XML.',
    howToUse:
      '1. Paste your XML document into the input panel.\n2. JSON output is generated, with XML attributes shown as @_attributeName keys.\n3. Nested elements become nested JSON objects; repeated elements become arrays.\n4. Copy the JSON for further processing or API use.\n5. Tip: If the XML has a namespace prefix (e.g., ns:element), the prefix is preserved in the JSON key.',
  },
  'xml-to-yaml': {
    description:
      'Convert XML documents to clean YAML format — ideal for migrating XML configs to modern YAML-based tooling.',
    longDescription:
      'Parse XML documents and produce clean YAML output, making the data more human-readable and easier to work with in modern DevOps and configuration workflows. XML attributes are preserved, and nested elements become indented YAML mappings. Useful for teams transitioning from XML-based config systems (Maven, Ant, old Spring configs) to YAML-based alternatives (Kubernetes, Docker Compose, GitHub Actions).',
    howToUse:
      '1. Paste your XML into the input panel.\n2. YAML output is generated with proper indentation.\n3. XML attributes appear as keys prefixed with @_ (matching fast-xml-parser conventions).\n4. Copy the YAML and adapt it for use in your config files.\n5. Tip: You may need to remove @_ prefixes from attribute keys manually depending on your use case.',
  },
  'xml-beautify': {
    description:
      'Format and indent XML documents for readability — clean up minified or badly formatted XML instantly.',
    longDescription:
      'Take minified, single-line, or poorly indented XML and produce a neatly formatted version with consistent 2-space indentation per nesting level. Self-closing tags and void elements are handled correctly. This is useful for reading API responses, debugging XML payloads, or preparing XML documents for documentation and code review.',
    howToUse:
      '1. Paste your minified or messy XML into the input panel.\n2. The beautified XML appears in the output with proper indentation.\n3. The <?xml?> declaration is preserved at the top.\n4. Copy the formatted XML into your editor or documentation.\n5. Tip: Use this before editing XML manually — much easier to navigate indented XML.',
  },
  // ── CSV ──────────────────────────────────────────────────────────────────
  'csv-to-json': {
    description:
      'Convert CSV files to JSON arrays — automatically parse headers, infer data types, and handle quoted fields.',
    longDescription:
      'Transform CSV data into a structured JSON array of objects, where each row becomes an object and column headers become keys. The converter intelligently infers data types: numeric strings become numbers, "true"/"false" become booleans, and empty fields become null. Quoted fields containing commas or newlines are parsed correctly per the CSV standard. This tool is essential for data processing pipelines, importing spreadsheet data into web apps, or preparing data for APIs.',
    howToUse:
      '1. Paste your CSV data (with a header row) into the input panel.\n2. JSON output is generated as an array of objects.\n3. The first row is treated as the header (column names).\n4. Data types are inferred automatically (numbers, booleans, null).\n5. Tip: If your CSV uses a semicolon (;) separator, you\'ll need to replace them with commas first.',
  },
  // ── Code ─────────────────────────────────────────────────────────────────
  'typescript-to-javascript': {
    description:
      'Strip TypeScript type annotations and produce clean JavaScript — remove interfaces, generics, type casts, and access modifiers.',
    longDescription:
      'Convert TypeScript source code to plain JavaScript by removing type annotations, interface and type declarations, generic type parameters, "as" type casts, non-null assertions (!), readonly keywords, and access modifiers (public, private, protected). The converter uses regex-based stripping, so complex generics may need manual cleanup. Useful for sharing code with non-TypeScript projects, publishing JavaScript packages from a TypeScript source, or running code in environments without TypeScript compilation.',
    howToUse:
      '1. Paste your TypeScript code into the input panel.\n2. JavaScript output is generated with types stripped.\n3. Check the output for any remaining type syntax that may need manual removal.\n4. Review warnings displayed below the output panel.\n5. Tip: For production use, prefer the official TypeScript compiler (tsc) or esbuild for accurate transpilation.',
  },
  'javascript-to-typescript': {
    description:
      'Add basic TypeScript type annotations to JavaScript — convert require() to import and add initial type hints.',
    longDescription:
      'Perform a best-effort conversion of JavaScript to TypeScript by transforming CommonJS require() calls to ES module imports and adding basic type hints to arrow functions. The result is a starting point for TypeScript adoption in a JavaScript project — you\'ll still need to add specific types manually for full type safety. This tool is most useful for understanding what needs to change and getting the boilerplate out of the way quickly.',
    howToUse:
      '1. Paste your JavaScript code into the input panel.\n2. The output includes import statements and basic type hints.\n3. Read the warning about manual type refinement — this is a starting point, not a complete conversion.\n4. Open the output in your TypeScript project and add specific types.\n5. Tip: Use a TypeScript language server (e.g., in VS Code) to see which types still need annotation.',
  },
  // ── Markup ───────────────────────────────────────────────────────────────
  'markdown-to-html': {
    description:
      'Convert Markdown to a complete, styled HTML page — supports GitHub Flavored Markdown including tables, task lists, and code blocks.',
    longDescription:
      'Transform Markdown documents into full HTML pages with a built-in stylesheet. The converter supports the full GitHub Flavored Markdown (GFM) spec: headings, bold/italic, strikethrough, inline code, fenced code blocks with language hints, blockquotes, ordered and unordered lists, task lists, tables, and horizontal rules. The output is a self-contained HTML file with a clean sans-serif style, ready to open in a browser or embed in documentation systems.',
    howToUse:
      '1. Paste your Markdown content into the input panel.\n2. A complete HTML page is generated in the output (with <html>, <head>, and <body>).\n3. You can open the output in a browser by saving it as a .html file.\n4. Copy just the <body> contents if you only need the HTML fragment.\n5. Tip: Use fenced code blocks (```language) for syntax-highlighted code in the output.',
  },
  'html-to-markdown': {
    description:
      'Convert HTML documents to clean Markdown — great for migrating web content to README files, wikis, or documentation platforms.',
    longDescription:
      'Transform HTML markup into clean, readable Markdown using Turndown, a robust HTML-to-Markdown converter. Handles headings (h1–h6), paragraphs, bold, italic, inline code, code blocks, blockquotes, ordered and unordered lists, links, images, and tables. The output uses ATX-style headings (#, ##) and fenced code blocks, making it compatible with GitHub, GitLab, Notion, Confluence, and most modern documentation platforms.',
    howToUse:
      '1. Paste your HTML (full page or fragment) into the input panel.\n2. Markdown output is generated immediately.\n3. The output uses # for headings, - for list items, and ``` for code blocks.\n4. Copy and paste into your README.md, wiki, or documentation tool.\n5. Tip: Strip <script>, <style>, and <nav> tags from the HTML first for cleaner Markdown output.',
  },
  'html-beautify': {
    description:
      'Format and indent HTML code with proper nesting — transform minified HTML into human-readable, maintainable markup.',
    longDescription:
      'Take minified or poorly indented HTML and produce a cleanly formatted version with consistent 2-space indentation per nesting level. Void elements (br, img, input, etc.) are handled correctly without adding a closing tag. This formatter helps developers read and edit HTML more easily, conduct code reviews, or prepare HTML for version control. The formatter is intentionally simple and works on any HTML fragment or full document.',
    howToUse:
      '1. Paste your minified or messy HTML into the input panel.\n2. Formatted HTML appears in the output with proper indentation.\n3. Void elements (br, img, input, meta, link) are not given closing tags.\n4. Copy the output into your editor or version-control system.\n5. Tip: For production-grade HTML formatting, consider Prettier in your local dev environment.',
  },
  'html-minify': {
    description:
      'Minify HTML by removing whitespace and comments — reduce page weight and improve load times.',
    longDescription:
      'Compress HTML by stripping HTML comments, collapsing multiple whitespace characters into a single space, and removing whitespace between tags. The result is a single, compact HTML string with no unnecessary characters. This reduces file size and can improve page load performance in bandwidth-sensitive environments. The minifier preserves all meaningful content, attributes, and inline scripts/styles.',
    howToUse:
      '1. Paste your HTML document into the input panel.\n2. Minified HTML is generated in the output as a compact string.\n3. All HTML comments (<!-- -->) are removed.\n4. Copy and use in your build pipeline or delivery system.\n5. Tip: For advanced minification (attribute quoting, optional tag removal), use dedicated tools like html-minifier-terser.',
  },
  // ── Encoding ─────────────────────────────────────────────────────────────
  'base64-encode': {
    description:
      'Encode any text or data to Base64 format — used in HTTP Basic Auth, email attachments, data URIs, and API tokens.',
    longDescription:
      'Convert any UTF-8 text to its Base64-encoded representation instantly. Base64 encoding is essential in many web and systems contexts: HTTP Basic Authentication headers (username:password), embedding binary data in JSON or XML payloads, data URIs for inline images and fonts, email MIME attachments, and encoding API keys or secrets for transmission. The encoder handles Unicode characters correctly using a safe encodeURIComponent → btoa approach.',
    howToUse:
      '1. Type or paste any text (including Unicode/emoji) into the input panel.\n2. The Base64-encoded string appears immediately in the output.\n3. Copy the output and use it in your Authorization header, data URI, or payload.\n4. Tip: For HTTP Basic Auth, encode "username:password" and prepend "Basic " to the header value.',
  },
  'base64-decode': {
    description:
      'Decode Base64 strings back to plain text — reverse Base64 encoding from tokens, payloads, or API responses.',
    longDescription:
      'Convert Base64-encoded strings back to their original UTF-8 text. Supports standard Base64 (using + and /) as well as URL-safe Base64 (using - and _). The decoder correctly handles Unicode content by using a safe atob → decodeURIComponent approach. This is useful for decoding JWT payloads, inspecting HTTP Basic Auth credentials, reading Base64-encoded API responses, or debugging encoded data in transit.',
    howToUse:
      '1. Paste your Base64 string into the input panel.\n2. The decoded text appears in the output.\n3. If the string contains whitespace, it is automatically trimmed.\n4. URL-safe Base64 (- and _ characters) is also handled.\n5. Tip: JWT tokens have 3 Base64 parts separated by dots — decode each part separately, or use the JWT Decoder tool.',
  },
  'url-encode': {
    description:
      'Percent-encode URLs and query string values — safely pass special characters, spaces, and non-ASCII in URLs.',
    longDescription:
      'Encode a string using percent-encoding (URL encoding) so it can be safely included in a URL query parameter, path segment, or form submission. Spaces become %20, & becomes %26, = becomes %3D, and non-ASCII characters (including Thai, Chinese, emoji) are encoded as their UTF-8 byte sequences in percent format. This is the correct way to pass user-generated data or special characters in URLs without breaking the URL structure.',
    howToUse:
      '1. Paste the URL or string you want to encode into the input panel.\n2. The percent-encoded output appears immediately.\n3. Use the encoded output in query parameters, path segments, or form data.\n4. Tip: Encode only the value part of a query parameter, not the entire URL — encoding the & and = separators will break the URL structure.',
  },
  'url-decode': {
    description:
      'Decode percent-encoded URLs back to human-readable text — reverse %20, %26, and other escape sequences.',
    longDescription:
      'Convert percent-encoded URL strings back to their original, readable form. Transforms sequences like %20 → space, %26 → &, %3D → =, and multi-byte sequences for non-ASCII characters like Thai or Chinese text. This is invaluable for debugging API calls, reading encoded URLs from browser address bars, understanding redirect parameters, and inspecting log files containing encoded URLs.',
    howToUse:
      '1. Paste your percent-encoded URL or string into the input panel.\n2. The decoded, human-readable output appears in the right panel.\n3. Copy and use the decoded string for debugging or display.\n5. Tip: If a URL looks broken (e.g., shows %2F instead of /), paste it here to read the decoded path.',
  },
  'jwt-decode': {
    description:
      'Decode and inspect JWT tokens — view the header, payload claims, issued-at, expiry, and whether the token has expired.',
    longDescription:
      'Decode a JSON Web Token (JWT) and display its three components: the header (algorithm and token type), the payload (claims such as sub, name, iat, exp), and the raw signature. The tool also computes human-readable dates for iat (issued at) and exp (expiry) fields, and flags whether the token is currently expired. Note: this tool does NOT verify the signature — it only decodes. Never rely on client-side JWT decoding for security decisions.',
    howToUse:
      '1. Paste your JWT (the full eyJ... string) into the input panel.\n2. The decoded header, payload, and signature are shown in JSON format.\n3. The _meta section shows the algorithm, issuedAt date, expiresAt date, and isExpired flag.\n4. Use this to inspect claims like user ID, roles, or expiry time during debugging.\n5. Warning: This tool does NOT verify the signature. A decoded JWT is not proof of authenticity.',
  },
  'html-entities-encode': {
    description:
      'Encode special HTML characters to entities — safely display user input, code snippets, and raw HTML in web pages.',
    longDescription:
      'Convert characters with special meaning in HTML — <, >, &, ", \' — to their HTML entity equivalents (&lt;, &gt;, &amp;, &quot;, &#039;). This is the correct way to display user-generated content, code samples, or raw HTML tags in a web page without causing the browser to interpret them as markup. Essential for preventing Cross-Site Scripting (XSS) vulnerabilities when rendering user input server-side.',
    howToUse:
      '1. Paste the text containing special characters into the input panel.\n2. The HTML-entity-encoded output appears on the right.\n3. Copy and embed the output safely in your HTML templates.\n4. Tip: Always encode user-generated content before rendering it in HTML to prevent XSS attacks.',
  },
  'html-entities-decode': {
    description:
      'Decode HTML entities back to plain characters — convert &lt;, &gt;, &amp;, and others to readable text.',
    longDescription:
      'Convert HTML entities (&lt;, &gt;, &amp;, &quot;, &#039;, &apos;, &nbsp;) back to their original characters. Useful for reading HTML-encoded content stored in databases, APIs, or CMS systems. Also helpful for decoding double-encoded HTML entities that sometimes appear in scraped or exported content.',
    howToUse:
      '1. Paste your HTML-entity-encoded text into the input panel.\n2. The decoded plain text appears on the right.\n3. Common entities like &amp;, &lt;, &gt;, &quot; are all decoded.\n4. Tip: If you see &amp;amp; (double encoding), paste the output back through this tool to decode the second layer.',
  },
  'decimal-to-binary': {
    description:
      'Convert decimal (base-10) numbers to binary (base-2), with octal and hexadecimal representations as a bonus.',
    longDescription:
      'Enter a decimal integer and instantly see its binary (base-2) representation along with octal (base-8) and hexadecimal (base-16) equivalents. This is a fundamental tool for computer science students, embedded systems developers, and anyone working with bit manipulation, permissions (chmod), memory addresses, or low-level programming concepts.',
    howToUse:
      '1. Type a decimal integer into the input panel (e.g., 255).\n2. The binary output is shown with a 0b prefix.\n3. Octal (0o) and hexadecimal (0x) are shown as additional references.\n4. Tip: The decimal value 255 = 0b11111111 = 0xFF, which is the max value of an 8-bit unsigned byte.',
  },
  'binary-to-decimal': {
    description:
      'Convert binary (base-2) numbers to decimal, with octal and hexadecimal output included.',
    longDescription:
      'Enter a binary number (using only 0 and 1) and convert it to its decimal equivalent. The tool also shows the octal and hexadecimal representations. The 0b prefix is optional and automatically stripped. Useful for understanding binary arithmetic, decoding binary data, working with bitwise operations, or studying computer architecture.',
    howToUse:
      '1. Type or paste a binary number into the input (e.g., 11111111 or 0b11111111).\n2. The decimal result is shown at the top of the output.\n3. Octal and hexadecimal equivalents are shown as additional references.\n4. Tip: Binary numbers longer than 32 bits may exceed JavaScript\'s safe integer range.',
  },
  'decimal-to-hex': {
    description:
      'Convert decimal numbers to hexadecimal (base-16) — commonly used for web colors, memory addresses, and low-level programming.',
    longDescription:
      'Enter any decimal integer and get its hexadecimal representation with a 0x prefix. Hexadecimal is widely used in web development (CSS color codes), systems programming (memory addresses, register values), cryptography (hash outputs), and debugging. The output also includes the binary representation for reference.',
    howToUse:
      '1. Type a decimal number into the input panel (e.g., 255).\n2. The hex output is shown with a 0x prefix (e.g., 0xFF).\n3. The binary representation is shown below as a reference.\n4. Tip: CSS hex colors use 6 hex digits — e.g., #1677FF. Use the Color Converter tools for full color conversion.',
  },
  'hex-to-decimal': {
    description:
      'Convert hexadecimal numbers to decimal — supports 0x prefix and uppercase/lowercase hex digits.',
    longDescription:
      'Enter a hexadecimal value (with or without the 0x prefix) and convert it to its decimal equivalent. The tool also shows the binary representation. Useful for reading memory dump values, color codes, network protocol fields, or any hex-encoded data where you need the decimal equivalent.',
    howToUse:
      '1. Type a hex number into the input (e.g., FF or 0xFF or ff).\n2. The decimal result is shown in the output.\n3. Binary representation is included for reference.\n4. Tip: For CSS hex colors, use the HEX to RGB/HSL converter to get full color details.',
  },
  'timestamp-to-date': {
    description:
      'Convert Unix timestamps (seconds or milliseconds) to human-readable dates in any timezone — with ISO 8601, UTC, and local time.',
    longDescription:
      'Enter a Unix timestamp and instantly see the corresponding date and time in multiple formats: ISO 8601, a human-readable string, date-only, time-only, and UTC offset. The converter automatically detects whether the timestamp is in seconds or milliseconds (based on magnitude). You can select any timezone from the options panel to see the time in a specific region. Essential for debugging API logs, inspecting JWT expiry times, and working with time-series data.',
    howToUse:
      '1. Paste a Unix timestamp into the input (e.g., 1716239022 for seconds or 1716239022000 for ms).\n2. The tool auto-detects seconds vs. milliseconds.\n3. Select a timezone from the Timezone dropdown in the options panel.\n4. The output shows the date/time in the selected timezone and UTC.\n5. Tip: JWT exp and iat fields are Unix timestamps in seconds — paste them here to read the dates.',
  },
  'date-to-timestamp': {
    description:
      'Convert human-readable date strings to Unix timestamps — supports ISO 8601 and many other date formats.',
    longDescription:
      'Enter a date string in ISO 8601 format (2024-01-15T10:30:00Z) or many other formats (2024-01-15, January 15 2024) and get the corresponding Unix timestamp in both seconds and milliseconds. The output also includes the date expressed in your selected timezone and UTC. Useful for constructing API request parameters, setting expiry times, or working with date-based filters in databases and search queries.',
    howToUse:
      '1. Type or paste a date string into the input (e.g., 2024-01-15T10:30:00Z).\n2. Unix timestamps in seconds and milliseconds are shown in the output.\n3. Select a timezone from the options to see the local time representation.\n4. Tip: For best results, use ISO 8601 format with a timezone suffix (Z for UTC, or +07:00 for Bangkok time).',
  },
  // ── Color ─────────────────────────────────────────────────────────────────
  'hex-to-rgb': {
    description:
      'Convert HEX color codes to RGB, RGBA, HSL, HSLA, and CSS custom property variables — all formats in one click.',
    longDescription:
      'Enter a HEX color code (3-digit shorthand or 6-digit full) and instantly see all equivalent color formats: RGB, RGBA, HSL, HSLA, raw channel values, and ready-to-use CSS custom property declarations (--color-rgb, --color-hsl). This tool is indispensable for frontend developers and UI designers working with design tokens, Tailwind config, CSS variables, or cross-format color systems.',
    howToUse:
      '1. Type or paste a HEX color code into the input (e.g., #1677FF or #F53).\n2. All color format outputs appear in the right panel as JSON.\n3. Copy the specific format you need (rgb(), hsl(), or CSS variables).\n4. The css_variables field gives you ready-to-paste :root variable declarations.\n5. Tip: 3-digit HEX codes (#F53) are automatically expanded to 6 digits (#FF5533) before conversion.',
  },
  'rgb-to-hex': {
    description:
      'Convert RGB or RGBA color values to HEX codes, HSL, HSLA, and CSS variables — all color formats from a single RGB input.',
    longDescription:
      'Enter an RGB or RGBA color value and get all equivalent representations: HEX code, HSL, HSLA, raw channel values, and CSS custom property declarations. The tool accepts both the rgb(r, g, b) function format and comma-separated values (255, 87, 51). Essential for designers and developers who need to convert colors between different design tools, code bases, or style systems.',
    howToUse:
      '1. Paste an RGB color value into the input (e.g., rgb(22, 119, 255) or 22, 119, 255).\n2. All equivalent color formats appear in the output as JSON.\n3. Copy the HEX, HSL, or CSS variable representation you need.\n4. Tip: RGBA values — the alpha channel from rgba() is noted, but the conversion treats the color as fully opaque for HEX and HSL output.',
  },
  'hsl-to-rgb': {
    description:
      'Convert HSL color values to HEX and RGB formats — with CSS variables and full color representation in one output.',
    longDescription:
      'Enter an HSL or HSLA color value and get the equivalent HEX code, RGB, RGBA, and CSS custom property declarations. HSL (Hue, Saturation, Lightness) is popular in CSS and design tools because it is more intuitive for color manipulation than RGB — adjusting saturation or lightness is straightforward. This tool is useful for converting design tool exports (Figma, Sketch) to HEX or RGB for use in code.',
    howToUse:
      '1. Paste an HSL color into the input (e.g., hsl(213, 100%, 54%) or 213, 100, 54).\n2. The HEX, RGB, RGBA, HSLA, and CSS variable equivalents appear in the output.\n3. Copy the format you need for your CSS file or design system.\n4. Tip: Hue is 0–360 (degrees on the color wheel), Saturation and Lightness are 0–100 (percentages).',
  },
  // ── CSS ──────────────────────────────────────────────────────────────────
  'css-minify': {
    description:
      'Minify CSS by removing comments, whitespace, and redundant semicolons — reduce stylesheet size for faster page loads.',
    longDescription:
      'Compress CSS by stripping all comments, collapsing whitespace, removing spaces around selectors and declarations, and eliminating the last semicolon before closing braces. The result is a compact CSS string that is functionally identical to the original but significantly smaller in size. Useful for production deployments, embedding styles in HTML pages, or reducing CDN transfer costs.',
    howToUse:
      '1. Paste your CSS code into the input panel.\n2. Minified CSS is generated as a compact single-line output.\n3. All /* comments */ are removed.\n4. Copy the minified CSS for use in your production build or <style> tag.\n5. Tip: For larger projects, integrate a CSS build tool (PostCSS, esbuild) to minify as part of your CI pipeline.',
  },
  'css-beautify': {
    description:
      'Format and pretty-print minified or messy CSS — add consistent indentation and line breaks for readable, maintainable stylesheets.',
    longDescription:
      'Take minified, auto-generated, or poorly formatted CSS and produce a clean, well-indented version with one declaration per line, properly placed braces, and consistent spacing. This makes CSS easier to read, debug, and maintain in version control. Useful after copying styles from browser DevTools, minified vendor stylesheets, or generated CSS from design tools.',
    howToUse:
      '1. Paste your minified or messy CSS into the input panel.\n2. Formatted CSS appears in the output with one property per line.\n3. Selectors and braces are on their own lines.\n4. Copy the output into your stylesheet or editor.\n5. Tip: Use this to inspect and understand auto-generated CSS from tools like Tailwind or CSS-in-JS libraries.',
  },
  'css-to-scss': {
    description:
      'Convert CSS custom properties (CSS variables) to SCSS variables — migrate from vanilla CSS to a SCSS-based design system.',
    longDescription:
      'Transform CSS :root variable declarations (--variable-name: value) into SCSS variable syntax ($variable_name: value) and replace var(--variable-name) usages throughout the stylesheet with the corresponding $variable_name references. Dashes in variable names are converted to underscores for SCSS compatibility. This provides a quick starting point for migrating a CSS custom properties system to SCSS, though nesting and mixins must still be added manually.',
    howToUse:
      '1. Paste your CSS with :root variables into the input panel.\n2. The output replaces :root { --var: value } with $var: value declarations.\n3. var(--var) usages become $var references in the output.\n4. Copy the SCSS into your .scss file and add nesting manually.\n5. Tip: Dashes in CSS variable names (--primary-color) become underscores in SCSS ($primary_color).',
  },
  'css-to-tailwind': {
    description:
      'Convert CSS declarations to Tailwind CSS utility class names — quickly find the right Tailwind classes for your styles.',
    longDescription:
      'Enter CSS property declarations and get the equivalent Tailwind CSS utility class names. Supports common layout properties (display, position, overflow), flexbox (flex-direction, align-items, justify-content), sizing (width, height), and typography (text-align, font-weight). Properties that don\'t have a direct Tailwind equivalent are listed as comments so you can handle them manually. Ideal for developers migrating from CSS to Tailwind or learning which Tailwind class corresponds to a given CSS property.',
    howToUse:
      '1. Paste CSS declarations (one per line, without selectors) into the input panel.\n2. Matching Tailwind classes are output as a class="..." attribute string.\n3. Unmatched properties appear as commented-out CSS below.\n4. Copy the class list and add it to your HTML element.\n5. Tip: For values with custom pixel amounts (e.g., padding: 12px), use Tailwind\'s arbitrary value syntax (p-[12px]) manually.',
  },
}

export default en