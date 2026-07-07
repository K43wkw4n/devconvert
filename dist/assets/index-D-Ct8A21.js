import{u as l,j as n,b as r,i as m}from"./index-B1OvSnPa.js";import{u,r as s}from"./vendor-react-CbWf5x74.js";import{M as S}from"./vendor-antd-CnwVIOgK.js";const h={"json-to-typescript":{description:"Instantly convert JSON objects into fully typed TypeScript interfaces — supports nested objects, arrays, optional fields, and union types.",longDescription:"Paste any JSON data and get clean, production-ready TypeScript interfaces in seconds. The converter intelligently infers types for strings, numbers, booleans, arrays, and deeply nested objects. Null values are marked as optional fields. Array items are analyzed to produce accurate element types, including union types when items are mixed. Nested objects become separate named interfaces for better code organization. Perfect for developers building REST API clients, working with third-party APIs, or migrating JavaScript projects to TypeScript.",howToUse:`1. Paste your JSON data into the input panel on the left.
2. The TypeScript interfaces are generated automatically in the right panel.
3. If your JSON has a top-level object, a "Root" interface is created. Nested objects become child interfaces (e.g., RootAddress).
4. Copy the output and paste it directly into your TypeScript project.
5. Tip: Wrap arrays of objects in [] — each item's shape becomes a typed interface.`},"json-to-javascript":{description:"Convert JSON data into a JavaScript const variable declaration, ready to paste into any JS or Node.js file.",longDescription:"Transform JSON into a clean JavaScript const declaration. The output uses standard JSON.stringify formatting with 2-space indentation, making it immediately usable in Node.js scripts, frontend JavaScript files, or configuration modules. This is especially useful when you want to embed static API response data, mock data, or configuration objects directly into your JavaScript codebase without importing an external JSON file.",howToUse:`1. Paste your JSON object or array into the input panel.
2. The output will be a const data = { ... }; declaration.
3. Copy the output and paste it into your .js or .mjs file.
4. Rename "data" to any variable name that suits your project.
5. Tip: Use this when you want to avoid a JSON import and keep data inline.`},"json-to-yaml":{description:"Convert JSON to YAML format — ideal for Kubernetes manifests, Docker Compose files, GitHub Actions, and other config-driven workflows.",longDescription:"Transform JSON data into clean, human-readable YAML. The converter preserves all data types including strings, numbers, booleans, arrays, and nested objects. YAML output uses 2-space indentation and avoids unnecessary quotes where possible, following standard YAML conventions. This tool is invaluable for DevOps engineers and developers who need to bridge JSON-based API responses or config generators with YAML-based infrastructure tools like Helm, Ansible, or CI/CD pipelines.",howToUse:`1. Paste your JSON into the input panel.
2. YAML output appears instantly in the right panel.
3. Check that nested objects are correctly indented (2 spaces per level).
4. Copy the YAML and use it directly in your config files or manifests.
5. Tip: JSON arrays become YAML lists (lines starting with -).`},"json-to-xml":{description:"Convert JSON data to well-formatted XML — useful for SOAP APIs, RSS feeds, and legacy enterprise integrations.",longDescription:"Transform JSON objects and arrays into properly structured XML documents with a <?xml?> declaration. Nested JSON objects become nested XML elements, and JSON arrays are expanded as repeated sibling elements under the same tag. This tool bridges modern JSON-based systems with legacy XML consumers such as SOAP web services, enterprise middleware, EDI systems, and older CMS platforms. All output is human-readable with proper indentation.",howToUse:`1. Paste your JSON into the input panel.
2. The XML document is generated with a root <root> element wrapping your data.
3. JSON keys become XML tag names; nested objects become child elements.
4. Arrays produce repeated elements with the same tag name.
5. Tip: Rename the outer <root> tag manually if you need a specific root element name.`},"json-to-csv":{description:"Convert JSON arrays to CSV format — export data directly to Excel, Google Sheets, or any spreadsheet tool.",longDescription:"Flatten JSON arrays into CSV rows with auto-detected column headers drawn from object keys. Each item in the array becomes a row; nested object values are serialized as strings. The converter handles quoted fields containing commas or newlines correctly, following the RFC 4180 CSV standard. This tool is ideal for data export pipelines, generating reports from API responses, or preparing datasets for import into databases or BI tools.",howToUse:`1. Paste a JSON array (list of objects) into the input panel.
2. Column headers are automatically extracted from the keys of the first object.
3. Each object in the array becomes one CSV row.
4. Copy the CSV output and paste into Excel, Google Sheets, or save as a .csv file.
5. Tip: All objects should share the same keys for consistent columns.`},"json-to-sql":{description:"Generate SQL CREATE TABLE and INSERT statements from JSON arrays — instantly scaffold your database schema from real data.",longDescription:"Convert JSON arrays into ready-to-run SQL scripts. The tool auto-generates a CREATE TABLE statement with column types inferred from your data (TEXT, NUMERIC, BOOLEAN), then produces one INSERT statement per JSON object. NULL values and missing keys are handled gracefully. This is a huge time-saver when you have sample API data and want to quickly set up a relational database table without writing SQL by hand.",howToUse:`1. Paste a JSON array of objects into the input.
2. The tool infers column types from the data values.
3. A CREATE TABLE block is generated at the top, followed by INSERT statements.
4. Replace "table_name" with your actual table name before running.
5. Tip: Run the CREATE TABLE first, then execute the INSERT statements.`},"json-beautify":{description:"Format and pretty-print minified or compact JSON with proper indentation — also validates your JSON syntax.",longDescription:"Take any minified, compressed, or poorly formatted JSON string and instantly produce a clean, human-readable version with 2-space indentation. The formatter also validates your JSON syntax — if the input is malformed, you'll see a clear error message pointing to the issue.This is an essential daily tool for developers inspecting API responses, debugging JSON payloads, or reviewing configuration files.",howToUse:`1. Paste your minified or messy JSON into the input panel.
2. The formatted JSON appears immediately in the output panel.
3. If there's a syntax error, an error message will explain the problem.
4. Copy the beautified JSON for use in your editor, documentation, or logs.
5. Tip: Use this to validate JSON before sending it as an API request body.`},"json-minify":{description:"Compress JSON by removing all whitespace and line breaks — reduce payload size for API responses and storage.",longDescription:"Strip all unnecessary whitespace, newlines, and indentation from JSON to produce the most compact representation possible. Minified JSON is ideal for API responses where bandwidth matters, localStorage values, environment variable payloads, or any scenario where JSON size needs to be minimized. The output is functionally identical to the input — only formatting is removed, never data.",howToUse:`1. Paste your formatted (pretty-printed) JSON into the input.
2. The minified single-line JSON appears instantly.
3. Copy and use in API calls, headers, or compressed storage.
4. Tip: Combine with Base64 Encode if you need to embed JSON in a URL or header value.`},"json-to-js-object":{description:"Convert JSON to a JavaScript object literal with unquoted keys — cleaner syntax for embedding data in JS source files.",longDescription:"JSON requires all keys to be quoted strings, but native JavaScript object literals allow unquoted keys when the key is a valid identifier. This converter transforms JSON into JS object syntax, removing unnecessary quotes from keys while keeping string values properly quoted. The result is idiomatic JavaScript that looks natural in source code. Useful for config files, mock data, and any situation where you want JS object syntax instead of JSON.",howToUse:`1. Paste your JSON into the input panel.
2. The output is a const data = { ... }; with unquoted keys where valid.
3. Keys with special characters or spaces remain quoted.
4. Copy and paste directly into your .js file.
5. Tip: This is NOT valid JSON — it's valid JavaScript. Don't use it where strict JSON is expected.`},"yaml-to-json":{description:"Convert YAML config files to JSON — parse Docker Compose, Kubernetes, GitHub Actions, and other YAML-based configs instantly.",longDescription:"Transform any valid YAML document into a well-formatted JSON object. The converter supports the full YAML spec including multi-line strings, anchors and aliases, complex mappings, and nested sequences. This is invaluable for developers who need to process YAML config files programmatically, feed YAML data into JSON-only APIs, or simply inspect the parsed structure of a complex YAML document.",howToUse:`1. Paste your YAML content into the input panel.
2. JSON output is generated automatically.
3. Verify that YAML anchors (&anchor, *alias) are correctly resolved in the output.
4. Copy the JSON for use in APIs, code, or further transformation.
5. Tip: If you get an error, check for tab characters — YAML requires spaces, not tabs, for indentation.`},"yaml-to-xml":{description:"Convert YAML documents to XML format — bridge YAML-based configurations with systems that require XML input.",longDescription:"Transform YAML data into a properly structured XML document. The converter parses the YAML, then maps each key-value pair to XML elements, with sequences becoming repeated sibling elements. A <?xml?> declaration is included in the output. This tool is useful when you need to feed YAML-configured data into XML-only consumers such as SOAP services, legacy enterprise systems, or XML-based reporting tools.",howToUse:`1. Paste your YAML into the input panel.
2. XML output is generated with a <root> wrapper element.
3. YAML mappings become nested XML elements; sequences become repeated tags.
4. Copy the XML and use it in your integration or save as a .xml file.
5. Tip: Validate the XML output with an XML validator if needed for strict schema compliance.`},"yaml-to-typescript":{description:"Generate TypeScript interfaces from YAML data — create typed config schemas from your YAML files.",longDescription:"Convert YAML documents into TypeScript interface definitions by first parsing the YAML to JSON, then inferring TypeScript types from the structure. This is especially useful for creating strongly-typed wrappers around YAML configuration files in TypeScript projects, such as app config schemas, environment variable definitions, or API spec structures. The output mirrors the behavior of the JSON-to-TypeScript converter applied to the parsed YAML.",howToUse:`1. Paste your YAML document into the input panel.
2. TypeScript interfaces are generated in the output.
3. The top-level YAML mapping becomes the "Root" interface.
4. Copy the interfaces into a .ts file in your project.
5. Tip: Use this alongside a YAML-parsing library like js-yaml to load and type-check your config at runtime.`},"xml-to-json":{description:"Convert XML documents to JSON — modernize SOAP APIs, parse RSS/Atom feeds, and process legacy XML data with ease.",longDescription:"Transform XML into JSON while preserving attributes (prefixed with @_), nested elements, and text content. The converter uses fast-xml-parser, which correctly handles complex XML including namespaces, CDATA sections, and mixed content. This is essential for developers modernizing SOAP-based services, consuming RSS/Atom feeds, parsing configuration XMLs, or integrating with enterprise systems that output XML.",howToUse:`1. Paste your XML document into the input panel.
2. JSON output is generated, with XML attributes shown as @_attributeName keys.
3. Nested elements become nested JSON objects; repeated elements become arrays.
4. Copy the JSON for further processing or API use.
5. Tip: If the XML has a namespace prefix (e.g., ns:element), the prefix is preserved in the JSON key.`},"xml-to-yaml":{description:"Convert XML documents to clean YAML format — ideal for migrating XML configs to modern YAML-based tooling.",longDescription:"Parse XML documents and produce clean YAML output, making the data more human-readable and easier to work with in modern DevOps and configuration workflows. XML attributes are preserved, and nested elements become indented YAML mappings. Useful for teams transitioning from XML-based config systems (Maven, Ant, old Spring configs) to YAML-based alternatives (Kubernetes, Docker Compose, GitHub Actions).",howToUse:`1. Paste your XML into the input panel.
2. YAML output is generated with proper indentation.
3. XML attributes appear as keys prefixed with @_ (matching fast-xml-parser conventions).
4. Copy the YAML and adapt it for use in your config files.
5. Tip: You may need to remove @_ prefixes from attribute keys manually depending on your use case.`},"xml-beautify":{description:"Format and indent XML documents for readability — clean up minified or badly formatted XML instantly.",longDescription:"Take minified, single-line, or poorly indented XML and produce a neatly formatted version with consistent 2-space indentation per nesting level. Self-closing tags and void elements are handled correctly. This is useful for reading API responses, debugging XML payloads, or preparing XML documents for documentation and code review.",howToUse:`1. Paste your minified or messy XML into the input panel.
2. The beautified XML appears in the output with proper indentation.
3. The <?xml?> declaration is preserved at the top.
4. Copy the formatted XML into your editor or documentation.
5. Tip: Use this before editing XML manually — much easier to navigate indented XML.`},"csv-to-json":{description:"Convert CSV files to JSON arrays — automatically parse headers, infer data types, and handle quoted fields.",longDescription:'Transform CSV data into a structured JSON array of objects, where each row becomes an object and column headers become keys. The converter intelligently infers data types: numeric strings become numbers, "true"/"false" become booleans, and empty fields become null. Quoted fields containing commas or newlines are parsed correctly per the CSV standard. This tool is essential for data processing pipelines, importing spreadsheet data into web apps, or preparing data for APIs.',howToUse:`1. Paste your CSV data (with a header row) into the input panel.
2. JSON output is generated as an array of objects.
3. The first row is treated as the header (column names).
4. Data types are inferred automatically (numbers, booleans, null).
5. Tip: If your CSV uses a semicolon (;) separator, you'll need to replace them with commas first.`},"typescript-to-javascript":{description:"Strip TypeScript type annotations and produce clean JavaScript — remove interfaces, generics, type casts, and access modifiers.",longDescription:'Convert TypeScript source code to plain JavaScript by removing type annotations, interface and type declarations, generic type parameters, "as" type casts, non-null assertions (!), readonly keywords, and access modifiers (public, private, protected). The converter uses regex-based stripping, so complex generics may need manual cleanup. Useful for sharing code with non-TypeScript projects, publishing JavaScript packages from a TypeScript source, or running code in environments without TypeScript compilation.',howToUse:`1. Paste your TypeScript code into the input panel.
2. JavaScript output is generated with types stripped.
3. Check the output for any remaining type syntax that may need manual removal.
4. Review warnings displayed below the output panel.
5. Tip: For production use, prefer the official TypeScript compiler (tsc) or esbuild for accurate transpilation.`},"javascript-to-typescript":{description:"Add basic TypeScript type annotations to JavaScript — convert require() to import and add initial type hints.",longDescription:"Perform a best-effort conversion of JavaScript to TypeScript by transforming CommonJS require() calls to ES module imports and adding basic type hints to arrow functions. The result is a starting point for TypeScript adoption in a JavaScript project — you'll still need to add specific types manually for full type safety. This tool is most useful for understanding what needs to change and getting the boilerplate out of the way quickly.",howToUse:`1. Paste your JavaScript code into the input panel.
2. The output includes import statements and basic type hints.
3. Read the warning about manual type refinement — this is a starting point, not a complete conversion.
4. Open the output in your TypeScript project and add specific types.
5. Tip: Use a TypeScript language server (e.g., in VS Code) to see which types still need annotation.`},"markdown-to-html":{description:"Convert Markdown to a complete, styled HTML page — supports GitHub Flavored Markdown including tables, task lists, and code blocks.",longDescription:"Transform Markdown documents into full HTML pages with a built-in stylesheet. The converter supports the full GitHub Flavored Markdown (GFM) spec: headings, bold/italic, strikethrough, inline code, fenced code blocks with language hints, blockquotes, ordered and unordered lists, task lists, tables, and horizontal rules. The output is a self-contained HTML file with a clean sans-serif style, ready to open in a browser or embed in documentation systems.",howToUse:`1. Paste your Markdown content into the input panel.
2. A complete HTML page is generated in the output (with <html>, <head>, and <body>).
3. You can open the output in a browser by saving it as a .html file.
4. Copy just the <body> contents if you only need the HTML fragment.
5. Tip: Use fenced code blocks (\`\`\`language) for syntax-highlighted code in the output.`},"html-to-markdown":{description:"Convert HTML documents to clean Markdown — great for migrating web content to README files, wikis, or documentation platforms.",longDescription:"Transform HTML markup into clean, readable Markdown using Turndown, a robust HTML-to-Markdown converter. Handles headings (h1–h6), paragraphs, bold, italic, inline code, code blocks, blockquotes, ordered and unordered lists, links, images, and tables. The output uses ATX-style headings (#, ##) and fenced code blocks, making it compatible with GitHub, GitLab, Notion, Confluence, and most modern documentation platforms.",howToUse:`1. Paste your HTML (full page or fragment) into the input panel.
2. Markdown output is generated immediately.
3. The output uses # for headings, - for list items, and \`\`\` for code blocks.
4. Copy and paste into your README.md, wiki, or documentation tool.
5. Tip: Strip <script>, <style>, and <nav> tags from the HTML first for cleaner Markdown output.`},"html-beautify":{description:"Format and indent HTML code with proper nesting — transform minified HTML into human-readable, maintainable markup.",longDescription:"Take minified or poorly indented HTML and produce a cleanly formatted version with consistent 2-space indentation per nesting level. Void elements (br, img, input, etc.) are handled correctly without adding a closing tag. This formatter helps developers read and edit HTML more easily, conduct code reviews, or prepare HTML for version control. The formatter is intentionally simple and works on any HTML fragment or full document.",howToUse:`1. Paste your minified or messy HTML into the input panel.
2. Formatted HTML appears in the output with proper indentation.
3. Void elements (br, img, input, meta, link) are not given closing tags.
4. Copy the output into your editor or version-control system.
5. Tip: For production-grade HTML formatting, consider Prettier in your local dev environment.`},"html-minify":{description:"Minify HTML by removing whitespace and comments — reduce page weight and improve load times.",longDescription:"Compress HTML by stripping HTML comments, collapsing multiple whitespace characters into a single space, and removing whitespace between tags. The result is a single, compact HTML string with no unnecessary characters. This reduces file size and can improve page load performance in bandwidth-sensitive environments. The minifier preserves all meaningful content, attributes, and inline scripts/styles.",howToUse:`1. Paste your HTML document into the input panel.
2. Minified HTML is generated in the output as a compact string.
3. All HTML comments (<!-- -->) are removed.
4. Copy and use in your build pipeline or delivery system.
5. Tip: For advanced minification (attribute quoting, optional tag removal), use dedicated tools like html-minifier-terser.`},"base64-encode":{description:"Encode any text or data to Base64 format — used in HTTP Basic Auth, email attachments, data URIs, and API tokens.",longDescription:"Convert any UTF-8 text to its Base64-encoded representation instantly. Base64 encoding is essential in many web and systems contexts: HTTP Basic Authentication headers (username:password), embedding binary data in JSON or XML payloads, data URIs for inline images and fonts, email MIME attachments, and encoding API keys or secrets for transmission. The encoder handles Unicode characters correctly using a safe encodeURIComponent → btoa approach.",howToUse:`1. Type or paste any text (including Unicode/emoji) into the input panel.
2. The Base64-encoded string appears immediately in the output.
3. Copy the output and use it in your Authorization header, data URI, or payload.
4. Tip: For HTTP Basic Auth, encode "username:password" and prepend "Basic " to the header value.`},"base64-decode":{description:"Decode Base64 strings back to plain text — reverse Base64 encoding from tokens, payloads, or API responses.",longDescription:"Convert Base64-encoded strings back to their original UTF-8 text. Supports standard Base64 (using + and /) as well as URL-safe Base64 (using - and _). The decoder correctly handles Unicode content by using a safe atob → decodeURIComponent approach. This is useful for decoding JWT payloads, inspecting HTTP Basic Auth credentials, reading Base64-encoded API responses, or debugging encoded data in transit.",howToUse:`1. Paste your Base64 string into the input panel.
2. The decoded text appears in the output.
3. If the string contains whitespace, it is automatically trimmed.
4. URL-safe Base64 (- and _ characters) is also handled.
5. Tip: JWT tokens have 3 Base64 parts separated by dots — decode each part separately, or use the JWT Decoder tool.`},"url-encode":{description:"Percent-encode URLs and query string values — safely pass special characters, spaces, and non-ASCII in URLs.",longDescription:"Encode a string using percent-encoding (URL encoding) so it can be safely included in a URL query parameter, path segment, or form submission. Spaces become %20, & becomes %26, = becomes %3D, and non-ASCII characters (including Thai, Chinese, emoji) are encoded as their UTF-8 byte sequences in percent format. This is the correct way to pass user-generated data or special characters in URLs without breaking the URL structure.",howToUse:`1. Paste the URL or string you want to encode into the input panel.
2. The percent-encoded output appears immediately.
3. Use the encoded output in query parameters, path segments, or form data.
4. Tip: Encode only the value part of a query parameter, not the entire URL — encoding the & and = separators will break the URL structure.`},"url-decode":{description:"Decode percent-encoded URLs back to human-readable text — reverse %20, %26, and other escape sequences.",longDescription:"Convert percent-encoded URL strings back to their original, readable form. Transforms sequences like %20 → space, %26 → &, %3D → =, and multi-byte sequences for non-ASCII characters like Thai or Chinese text. This is invaluable for debugging API calls, reading encoded URLs from browser address bars, understanding redirect parameters, and inspecting log files containing encoded URLs.",howToUse:`1. Paste your percent-encoded URL or string into the input panel.
2. The decoded, human-readable output appears in the right panel.
3. Copy and use the decoded string for debugging or display.
5. Tip: If a URL looks broken (e.g., shows %2F instead of /), paste it here to read the decoded path.`},"jwt-decode":{description:"Decode and inspect JWT tokens — view the header, payload claims, issued-at, expiry, and whether the token has expired.",longDescription:"Decode a JSON Web Token (JWT) and display its three components: the header (algorithm and token type), the payload (claims such as sub, name, iat, exp), and the raw signature. The tool also computes human-readable dates for iat (issued at) and exp (expiry) fields, and flags whether the token is currently expired. Note: this tool does NOT verify the signature — it only decodes. Never rely on client-side JWT decoding for security decisions.",howToUse:`1. Paste your JWT (the full eyJ... string) into the input panel.
2. The decoded header, payload, and signature are shown in JSON format.
3. The _meta section shows the algorithm, issuedAt date, expiresAt date, and isExpired flag.
4. Use this to inspect claims like user ID, roles, or expiry time during debugging.
5. Warning: This tool does NOT verify the signature. A decoded JWT is not proof of authenticity.`},"html-entities-encode":{description:"Encode special HTML characters to entities — safely display user input, code snippets, and raw HTML in web pages.",longDescription:`Convert characters with special meaning in HTML — <, >, &, ", ' — to their HTML entity equivalents (&lt;, &gt;, &amp;, &quot;, &#039;). This is the correct way to display user-generated content, code samples, or raw HTML tags in a web page without causing the browser to interpret them as markup. Essential for preventing Cross-Site Scripting (XSS) vulnerabilities when rendering user input server-side.`,howToUse:`1. Paste the text containing special characters into the input panel.
2. The HTML-entity-encoded output appears on the right.
3. Copy and embed the output safely in your HTML templates.
4. Tip: Always encode user-generated content before rendering it in HTML to prevent XSS attacks.`},"html-entities-decode":{description:"Decode HTML entities back to plain characters — convert &lt;, &gt;, &amp;, and others to readable text.",longDescription:"Convert HTML entities (&lt;, &gt;, &amp;, &quot;, &#039;, &apos;, &nbsp;) back to their original characters. Useful for reading HTML-encoded content stored in databases, APIs, or CMS systems. Also helpful for decoding double-encoded HTML entities that sometimes appear in scraped or exported content.",howToUse:`1. Paste your HTML-entity-encoded text into the input panel.
2. The decoded plain text appears on the right.
3. Common entities like &amp;, &lt;, &gt;, &quot; are all decoded.
4. Tip: If you see &amp;amp; (double encoding), paste the output back through this tool to decode the second layer.`},"decimal-to-binary":{description:"Convert decimal (base-10) numbers to binary (base-2), with octal and hexadecimal representations as a bonus.",longDescription:"Enter a decimal integer and instantly see its binary (base-2) representation along with octal (base-8) and hexadecimal (base-16) equivalents. This is a fundamental tool for computer science students, embedded systems developers, and anyone working with bit manipulation, permissions (chmod), memory addresses, or low-level programming concepts.",howToUse:`1. Type a decimal integer into the input panel (e.g., 255).
2. The binary output is shown with a 0b prefix.
3. Octal (0o) and hexadecimal (0x) are shown as additional references.
4. Tip: The decimal value 255 = 0b11111111 = 0xFF, which is the max value of an 8-bit unsigned byte.`},"binary-to-decimal":{description:"Convert binary (base-2) numbers to decimal, with octal and hexadecimal output included.",longDescription:"Enter a binary number (using only 0 and 1) and convert it to its decimal equivalent. The tool also shows the octal and hexadecimal representations. The 0b prefix is optional and automatically stripped. Useful for understanding binary arithmetic, decoding binary data, working with bitwise operations, or studying computer architecture.",howToUse:`1. Type or paste a binary number into the input (e.g., 11111111 or 0b11111111).
2. The decimal result is shown at the top of the output.
3. Octal and hexadecimal equivalents are shown as additional references.
4. Tip: Binary numbers longer than 32 bits may exceed JavaScript's safe integer range.`},"decimal-to-hex":{description:"Convert decimal numbers to hexadecimal (base-16) — commonly used for web colors, memory addresses, and low-level programming.",longDescription:"Enter any decimal integer and get its hexadecimal representation with a 0x prefix. Hexadecimal is widely used in web development (CSS color codes), systems programming (memory addresses, register values), cryptography (hash outputs), and debugging. The output also includes the binary representation for reference.",howToUse:`1. Type a decimal number into the input panel (e.g., 255).
2. The hex output is shown with a 0x prefix (e.g., 0xFF).
3. The binary representation is shown below as a reference.
4. Tip: CSS hex colors use 6 hex digits — e.g., #1677FF. Use the Color Converter tools for full color conversion.`},"hex-to-decimal":{description:"Convert hexadecimal numbers to decimal — supports 0x prefix and uppercase/lowercase hex digits.",longDescription:"Enter a hexadecimal value (with or without the 0x prefix) and convert it to its decimal equivalent. The tool also shows the binary representation. Useful for reading memory dump values, color codes, network protocol fields, or any hex-encoded data where you need the decimal equivalent.",howToUse:`1. Type a hex number into the input (e.g., FF or 0xFF or ff).
2. The decimal result is shown in the output.
3. Binary representation is included for reference.
4. Tip: For CSS hex colors, use the HEX to RGB/HSL converter to get full color details.`},"timestamp-to-date":{description:"Convert Unix timestamps (seconds or milliseconds) to human-readable dates in any timezone — with ISO 8601, UTC, and local time.",longDescription:"Enter a Unix timestamp and instantly see the corresponding date and time in multiple formats: ISO 8601, a human-readable string, date-only, time-only, and UTC offset. The converter automatically detects whether the timestamp is in seconds or milliseconds (based on magnitude). You can select any timezone from the options panel to see the time in a specific region. Essential for debugging API logs, inspecting JWT expiry times, and working with time-series data.",howToUse:`1. Paste a Unix timestamp into the input (e.g., 1716239022 for seconds or 1716239022000 for ms).
2. The tool auto-detects seconds vs. milliseconds.
3. Select a timezone from the Timezone dropdown in the options panel.
4. The output shows the date/time in the selected timezone and UTC.
5. Tip: JWT exp and iat fields are Unix timestamps in seconds — paste them here to read the dates.`},"date-to-timestamp":{description:"Convert human-readable date strings to Unix timestamps — supports ISO 8601 and many other date formats.",longDescription:"Enter a date string in ISO 8601 format (2024-01-15T10:30:00Z) or many other formats (2024-01-15, January 15 2024) and get the corresponding Unix timestamp in both seconds and milliseconds. The output also includes the date expressed in your selected timezone and UTC. Useful for constructing API request parameters, setting expiry times, or working with date-based filters in databases and search queries.",howToUse:`1. Type or paste a date string into the input (e.g., 2024-01-15T10:30:00Z).
2. Unix timestamps in seconds and milliseconds are shown in the output.
3. Select a timezone from the options to see the local time representation.
4. Tip: For best results, use ISO 8601 format with a timezone suffix (Z for UTC, or +07:00 for Bangkok time).`},"hex-to-rgb":{description:"Convert HEX color codes to RGB, RGBA, HSL, HSLA, and CSS custom property variables — all formats in one click.",longDescription:"Enter a HEX color code (3-digit shorthand or 6-digit full) and instantly see all equivalent color formats: RGB, RGBA, HSL, HSLA, raw channel values, and ready-to-use CSS custom property declarations (--color-rgb, --color-hsl). This tool is indispensable for frontend developers and UI designers working with design tokens, Tailwind config, CSS variables, or cross-format color systems.",howToUse:`1. Type or paste a HEX color code into the input (e.g., #1677FF or #F53).
2. All color format outputs appear in the right panel as JSON.
3. Copy the specific format you need (rgb(), hsl(), or CSS variables).
4. The css_variables field gives you ready-to-paste :root variable declarations.
5. Tip: 3-digit HEX codes (#F53) are automatically expanded to 6 digits (#FF5533) before conversion.`},"rgb-to-hex":{description:"Convert RGB or RGBA color values to HEX codes, HSL, HSLA, and CSS variables — all color formats from a single RGB input.",longDescription:"Enter an RGB or RGBA color value and get all equivalent representations: HEX code, HSL, HSLA, raw channel values, and CSS custom property declarations. The tool accepts both the rgb(r, g, b) function format and comma-separated values (255, 87, 51). Essential for designers and developers who need to convert colors between different design tools, code bases, or style systems.",howToUse:`1. Paste an RGB color value into the input (e.g., rgb(22, 119, 255) or 22, 119, 255).
2. All equivalent color formats appear in the output as JSON.
3. Copy the HEX, HSL, or CSS variable representation you need.
4. Tip: RGBA values — the alpha channel from rgba() is noted, but the conversion treats the color as fully opaque for HEX and HSL output.`},"hsl-to-rgb":{description:"Convert HSL color values to HEX and RGB formats — with CSS variables and full color representation in one output.",longDescription:"Enter an HSL or HSLA color value and get the equivalent HEX code, RGB, RGBA, and CSS custom property declarations. HSL (Hue, Saturation, Lightness) is popular in CSS and design tools because it is more intuitive for color manipulation than RGB — adjusting saturation or lightness is straightforward. This tool is useful for converting design tool exports (Figma, Sketch) to HEX or RGB for use in code.",howToUse:`1. Paste an HSL color into the input (e.g., hsl(213, 100%, 54%) or 213, 100, 54).
2. The HEX, RGB, RGBA, HSLA, and CSS variable equivalents appear in the output.
3. Copy the format you need for your CSS file or design system.
4. Tip: Hue is 0–360 (degrees on the color wheel), Saturation and Lightness are 0–100 (percentages).`},"css-minify":{description:"Minify CSS by removing comments, whitespace, and redundant semicolons — reduce stylesheet size for faster page loads.",longDescription:"Compress CSS by stripping all comments, collapsing whitespace, removing spaces around selectors and declarations, and eliminating the last semicolon before closing braces. The result is a compact CSS string that is functionally identical to the original but significantly smaller in size. Useful for production deployments, embedding styles in HTML pages, or reducing CDN transfer costs.",howToUse:`1. Paste your CSS code into the input panel.
2. Minified CSS is generated as a compact single-line output.
3. All /* comments */ are removed.
4. Copy the minified CSS for use in your production build or <style> tag.
5. Tip: For larger projects, integrate a CSS build tool (PostCSS, esbuild) to minify as part of your CI pipeline.`},"css-beautify":{description:"Format and pretty-print minified or messy CSS — add consistent indentation and line breaks for readable, maintainable stylesheets.",longDescription:"Take minified, auto-generated, or poorly formatted CSS and produce a clean, well-indented version with one declaration per line, properly placed braces, and consistent spacing. This makes CSS easier to read, debug, and maintain in version control. Useful after copying styles from browser DevTools, minified vendor stylesheets, or generated CSS from design tools.",howToUse:`1. Paste your minified or messy CSS into the input panel.
2. Formatted CSS appears in the output with one property per line.
3. Selectors and braces are on their own lines.
4. Copy the output into your stylesheet or editor.
5. Tip: Use this to inspect and understand auto-generated CSS from tools like Tailwind or CSS-in-JS libraries.`},"css-to-scss":{description:"Convert CSS custom properties (CSS variables) to SCSS variables — migrate from vanilla CSS to a SCSS-based design system.",longDescription:"Transform CSS :root variable declarations (--variable-name: value) into SCSS variable syntax ($variable_name: value) and replace var(--variable-name) usages throughout the stylesheet with the corresponding $variable_name references. Dashes in variable names are converted to underscores for SCSS compatibility. This provides a quick starting point for migrating a CSS custom properties system to SCSS, though nesting and mixins must still be added manually.",howToUse:`1. Paste your CSS with :root variables into the input panel.
2. The output replaces :root { --var: value } with $var: value declarations.
3. var(--var) usages become $var references in the output.
4. Copy the SCSS into your .scss file and add nesting manually.
5. Tip: Dashes in CSS variable names (--primary-color) become underscores in SCSS ($primary_color).`},"css-to-tailwind":{description:"Convert CSS declarations to Tailwind CSS utility class names — quickly find the right Tailwind classes for your styles.",longDescription:"Enter CSS property declarations and get the equivalent Tailwind CSS utility class names. Supports common layout properties (display, position, overflow), flexbox (flex-direction, align-items, justify-content), sizing (width, height), and typography (text-align, font-weight). Properties that don't have a direct Tailwind equivalent are listed as comments so you can handle them manually. Ideal for developers migrating from CSS to Tailwind or learning which Tailwind class corresponds to a given CSS property.",howToUse:`1. Paste CSS declarations (one per line, without selectors) into the input panel.
2. Matching Tailwind classes are output as a class="..." attribute string.
3. Unmatched properties appear as commented-out CSS below.
4. Copy the class list and add it to your HTML element.
5. Tip: For values with custom pixel amounts (e.g., padding: 12px), use Tailwind's arbitrary value syntax (p-[12px]) manually.`}},y={"json-to-typescript":{description:"แปลง JSON เป็น TypeScript Interface แบบมี type ครบถ้วน — รองรับ nested object, array, optional field และ union type",longDescription:"วางข้อมูล JSON แล้วรับ TypeScript interface ที่พร้อมใช้งานจริงในไม่กี่วินาที ระบบจะวิเคราะห์ type ของแต่ละ field โดยอัตโนมัติ ไม่ว่าจะเป็น string, number, boolean, array หรือ object ซ้อนกันลึกหลายชั้น ค่า null จะถูกแปลงเป็น optional field (เพิ่ม ?) และ array ที่มีหลาย type จะกลายเป็น union type Object ที่ซ้อนกันจะถูกสร้างเป็น interface ย่อยแยกชื่อ เพื่อให้ code มีโครงสร้างชัดเจน เหมาะสำหรับนักพัฒนาที่ทำงานกับ REST API, ข้อมูลจาก third-party หรือกำลัง migrate จาก JavaScript มาสู่ TypeScript",howToUse:`1. วาง JSON ลงในช่องซ้าย
2. TypeScript interface จะถูกสร้างขึ้นทันทีในช่องขวา
3. Object ระดับบนสุดจะกลายเป็น interface ชื่อ "Root" และ object ที่ซ้อนกันจะกลายเป็น interface ย่อย เช่น RootAddress
4. คัดลอก output แล้วนำไปใช้ใน TypeScript project ได้เลย
5. เคล็ดลับ: Array of objects เช่น [{...}] จะสร้าง interface ย่อยสำหรับ element แต่ละตัวโดยอัตโนมัติ`},"json-to-javascript":{description:"แปลง JSON เป็น const variable declaration ใน JavaScript — พร้อมนำไปวางใน .js หรือ Node.js ได้ทันที",longDescription:"แปลงข้อมูล JSON ให้กลายเป็น const declaration รูปแบบ JavaScript มาตรฐาน ด้วย indentation 2 ช่อง ผลลัพธ์นำไปใช้งานได้ทันทีใน Node.js script, ไฟล์ JavaScript ฝั่ง frontend หรือ config module ต่างๆ เหมาะมากเมื่อต้องการฝัง static data, mock data หรือ config object ลงใน JavaScript โดยตรง โดยไม่ต้อง import ไฟล์ JSON แยกต่างหาก",howToUse:`1. วาง JSON object หรือ array ลงในช่องซ้าย
2. Output จะเป็น const data = { ... };
3. คัดลอกและนำไปวางในไฟล์ .js หรือ .mjs
4. เปลี่ยนชื่อ "data" เป็นชื่อ variable ที่ต้องการ
5. เคล็ดลับ: ใช้เมื่อต้องการ embed ข้อมูลใน JS โดยตรง แทนการ import JSON`},"json-to-yaml":{description:"แปลง JSON เป็น YAML — เหมาะสำหรับ Kubernetes manifest, Docker Compose, GitHub Actions และไฟล์ config ต่างๆ",longDescription:"แปลงข้อมูล JSON ให้กลายเป็น YAML ที่อ่านง่ายและสะอาดตา โดยรักษา data type ทุกชนิดไว้ครบถ้วน ทั้ง string, number, boolean, array และ nested object ผลลัพธ์ใช้ indentation 2 ช่องและหลีกเลี่ยง quote ที่ไม่จำเป็น ตามมาตรฐาน YAML เป็นเครื่องมือสำคัญสำหรับ DevOps engineer และนักพัฒนาที่ต้องเชื่อม API response แบบ JSON กับ tool ที่ใช้ YAML เช่น Helm, Ansible หรือ CI/CD pipeline",howToUse:`1. วาง JSON ลงในช่องซ้าย
2. YAML จะถูกสร้างขึ้นทันทีในช่องขวา
3. ตรวจสอบว่า nested object ถูก indent ถูกต้อง (2 ช่องต่อระดับ)
4. คัดลอก YAML ไปใช้ใน config file หรือ manifest ได้เลย
5. เคล็ดลับ: JSON array จะกลายเป็น YAML list (บรรทัดที่ขึ้นต้นด้วย -)`},"json-to-xml":{description:"แปลง JSON เป็น XML ที่มีรูปแบบถูกต้อง — เหมาะสำหรับ SOAP API, RSS feed และระบบ enterprise แบบเก่า",longDescription:"แปลง JSON object และ array ให้กลายเป็น XML document ที่มีโครงสร้างถูกต้อง พร้อม declaration <?xml?> ไว้ที่ต้น JSON object ซ้อนกันจะกลายเป็น XML element ซ้อนกัน และ JSON array จะถูกขยายเป็น element พี่น้องที่ซ้ำกัน เครื่องมือนี้ช่วยเชื่อม JSON กับระบบที่ต้องการ XML เช่น SOAP web service, enterprise middleware, EDI system หรือ CMS รุ่นเก่า",howToUse:`1. วาง JSON ลงในช่องซ้าย
2. XML document จะถูกสร้างโดยมี element <root> ห่อข้อมูลทั้งหมด
3. JSON key กลายเป็นชื่อ XML tag, nested object กลายเป็น child element
4. Array กลายเป็น element ซ้ำกันที่มีชื่อ tag เดียวกัน
5. เคล็ดลับ: แก้ไขชื่อ <root> เป็นชื่อ root element ที่ต้องการได้`},"json-to-csv":{description:"แปลง JSON array เป็น CSV — ส่งออกข้อมูลไปยัง Excel, Google Sheets หรือเครื่องมือ spreadsheet อื่นๆ ได้ทันที",longDescription:"แปลง JSON array ให้กลายเป็น CSV rows โดยดึง header มาจาก key ของ object โดยอัตโนมัติ แต่ละ item ใน array จะกลายเป็น 1 row ค่าที่มี comma หรือขึ้นบรรทัดใหม่จะถูก quote ตามมาตรฐาน RFC 4180 เหมาะสำหรับ pipeline ส่งออกข้อมูล, สร้าง report จาก API response หรือเตรียม dataset สำหรับ import ลงในฐานข้อมูลหรือเครื่องมือ BI",howToUse:`1. วาง JSON array (ที่มี object เป็น item) ลงในช่องซ้าย
2. Column header จะถูกดึงมาจาก key ของ object โดยอัตโนมัติ
3. Object แต่ละตัวใน array กลายเป็น 1 row ใน CSV
4. คัดลอก output ไปวางใน Excel, Google Sheets หรือบันทึกเป็นไฟล์ .csv
5. เคล็ดลับ: Object ทุกตัวควรมี key เดียวกันเพื่อให้ column สม่ำเสมอ`},"json-to-sql":{description:"สร้าง SQL CREATE TABLE และ INSERT statement จาก JSON array — สร้างโครงสร้างฐานข้อมูลจากข้อมูลจริงได้ทันที",longDescription:"แปลง JSON array ให้กลายเป็น SQL script ที่พร้อมใช้งาน ระบบจะสร้าง CREATE TABLE statement โดยอนุมาน column type จากข้อมูลจริง (TEXT, NUMERIC, BOOLEAN) และสร้าง INSERT statement 1 บรรทัดต่อ JSON object ค่า NULL และ key ที่หายไปถูกจัดการอย่างเหมาะสม ช่วยประหยัดเวลาได้มากเมื่อมีข้อมูลตัวอย่างจาก API และต้องการสร้าง table ในฐานข้อมูล relational โดยไม่ต้องเขียน SQL เอง",howToUse:`1. วาง JSON array of objects ลงในช่องซ้าย
2. ระบบจะอนุมาน column type จากค่าข้อมูล
3. CREATE TABLE block จะอยู่ด้านบน ตามด้วย INSERT statement
4. เปลี่ยน "table_name" เป็นชื่อ table จริงก่อน run
5. เคล็ดลับ: run CREATE TABLE ก่อน แล้วจึง execute INSERT statement`},"json-beautify":{description:"จัดรูปแบบ JSON ให้อ่านง่าย พร้อม indentation ที่ถูกต้อง — ยังช่วย validate ไวยากรณ์ JSON อีกด้วย",longDescription:"แปลง JSON ที่ compact หรือ minify แล้วให้กลายเป็น JSON ที่อ่านง่าย ด้วย indentation 2 ช่องต่อระดับ นอกจากนี้ยังทำหน้าที่ validate ไวยากรณ์ JSON ด้วย หากมีข้อผิดพลาดจะแสดง error message ที่ชัดเจน เป็นเครื่องมือที่นักพัฒนาใช้เป็นประจำสำหรับตรวจสอบ API response, debug JSON payload หรือดู config file",howToUse:`1. วาง JSON ที่ minify แล้วหรือรูปแบบยุ่งเหยิงลงในช่องซ้าย
2. JSON ที่จัดรูปแบบแล้วจะปรากฏทันทีในช่องขวา
3. หาก JSON มี syntax ผิดพลาด จะแสดง error message
4. คัดลอก output ไปใช้ใน editor, เอกสาร หรือ log
5. เคล็ดลับ: ใช้ validate JSON ก่อนส่งเป็น request body ของ API`},"json-minify":{description:"บีบอัด JSON โดยลบ whitespace และขึ้นบรรทัดใหม่ — ลดขนาด payload สำหรับ API response และการจัดเก็บ",longDescription:"ลบ whitespace, ขึ้นบรรทัดใหม่ และ indentation ทั้งหมดออกจาก JSON เพื่อให้ได้รูปแบบที่ compact ที่สุด JSON ที่ minify แล้วเหมาะสำหรับ API response ที่สำคัญเรื่อง bandwidth, ค่าใน localStorage, environment variable หรือสถานการณ์ใดก็ตามที่ต้องการลดขนาด JSON output ยังคงเหมือนเดิมทุกประการ มีเพียงรูปแบบที่ถูกลบออกเท่านั้น",howToUse:`1. วาง JSON ที่จัดรูปแบบแล้วลงในช่องซ้าย
2. JSON ที่ minify แล้วจะปรากฏเป็น single line ในช่องขวา
3. คัดลอกและใช้ใน API call, header หรือ storage
4. เคล็ดลับ: รวมกับ Base64 Encode หากต้องการ embed JSON ใน URL หรือ header`},"json-to-js-object":{description:"แปลง JSON เป็น JavaScript object literal แบบไม่ใส่ quote ที่ key — ได้ syntax ที่ดูเป็นธรรมชาติกว่าสำหรับ JS source file",longDescription:"JSON บังคับให้ key ทุกตัวต้องเป็น quoted string แต่ JavaScript object literal อนุญาตให้ key ที่เป็น valid identifier ไม่ต้องใส่ quote ได้ converter นี้แปลง JSON ให้กลายเป็น JS object syntax โดยลบ quote ออกจาก key ที่ไม่จำเป็น แต่ยังคง quote ไว้สำหรับ string value เหมาะสำหรับ config file, mock data หรือสถานการณ์ที่ต้องการ JS object syntax แทน JSON",howToUse:`1. วาง JSON ลงในช่องซ้าย
2. Output จะเป็น const data = { ... }; ที่ key ที่เป็น valid identifier จะไม่มี quote
3. Key ที่มีอักขระพิเศษหรือช่องว่างยังคงถูก quote ไว้
4. คัดลอกและวางลงในไฟล์ .js โดยตรง
5. เคล็ดลับ: นี่คือ JavaScript ที่ valid แต่ไม่ใช่ JSON ที่ valid อย่าใช้ในที่ที่ต้องการ JSON จริงๆ`},"yaml-to-json":{description:"แปลง YAML config file เป็น JSON — parse Docker Compose, Kubernetes, GitHub Actions และ config แบบ YAML อื่นๆ ได้ทันที",longDescription:"แปลง YAML document ใดก็ได้ให้กลายเป็น JSON ที่จัดรูปแบบแล้ว รองรับ YAML spec เต็มรูปแบบ รวมถึง multi-line string, anchor และ alias, complex mapping และ nested sequence เป็นเครื่องมือสำคัญสำหรับนักพัฒนาที่ต้องการประมวลผล YAML config ด้วย code, ส่งข้อมูล YAML ไปยัง JSON-only API หรือตรวจสอบโครงสร้าง YAML ที่ซับซ้อน",howToUse:`1. วาง YAML ลงในช่องซ้าย
2. JSON output จะถูกสร้างขึ้นโดยอัตโนมัติ
3. ตรวจสอบว่า YAML anchor (&anchor, *alias) ถูก resolve ถูกต้องใน output
4. คัดลอก JSON เพื่อใช้ใน API, code หรือการแปลงต่อไป
5. เคล็ดลับ: หากได้รับ error ให้ตรวจสอบว่าไม่มี tab character ใน YAML เพราะ YAML ต้องใช้ space เท่านั้น`},"yaml-to-xml":{description:"แปลง YAML เป็น XML — เชื่อม YAML config กับระบบที่ต้องการ XML input",longDescription:"แปลงข้อมูล YAML ให้กลายเป็น XML document ที่มีโครงสร้างถูกต้อง YAML mapping กลายเป็น XML element ที่ซ้อนกัน และ sequence กลายเป็น element ที่ซ้ำกัน พร้อม declaration <?xml?> ในผลลัพธ์ เหมาะสำหรับทีมที่ต้องการ migrate จาก YAML config ไปยังระบบที่รับเฉพาะ XML เช่น SOAP service, legacy enterprise system หรือเครื่องมือ reporting แบบ XML",howToUse:`1. วาง YAML ลงในช่องซ้าย
2. XML output จะถูกสร้างพร้อม element wrapper <root>
3. YAML mapping กลายเป็น XML element ที่ซ้อนกัน, sequence กลายเป็น tag ที่ซ้ำกัน
4. คัดลอก XML และนำไปใช้ใน integration หรือบันทึกเป็นไฟล์ .xml
5. เคล็ดลับ: หากต้องการ XML ที่ตรงตาม schema เฉพาะ ควร validate output ด้วย XML validator`},"yaml-to-typescript":{description:"สร้าง TypeScript interface จากข้อมูล YAML — สร้าง typed schema สำหรับ config file แบบ YAML",longDescription:"แปลง YAML document ให้กลายเป็น TypeScript interface definition โดย parse YAML เป็น JSON ก่อน แล้วจึงอนุมาน TypeScript type จากโครงสร้าง เหมาะสำหรับ TypeScript project ที่ต้องการสร้าง type-safe wrapper รอบๆ YAML config file เช่น app config schema, environment variable definition หรือ API spec structure",howToUse:`1. วาง YAML document ลงในช่องซ้าย
2. TypeScript interface จะถูกสร้างขึ้นใน output
3. YAML mapping ระดับบนสุดจะกลายเป็น interface "Root"
4. คัดลอก interface ไปใช้ในไฟล์ .ts ของ project
5. เคล็ดลับ: ใช้ร่วมกับ js-yaml library เพื่อ load และ type-check config ตอน runtime`},"xml-to-json":{description:"แปลง XML เป็น JSON — modernize SOAP API, parse RSS feed และประมวลผลข้อมูล XML แบบเก่าได้ง่ายๆ",longDescription:"แปลง XML ให้กลายเป็น JSON โดยรักษา attribute (prefix ด้วย @_), nested element และ text content ไว้ครบถ้วน ใช้ fast-xml-parser ที่จัดการ XML ที่ซับซ้อนได้ถูกต้อง รวมถึง namespace, CDATA section และ mixed content จำเป็นสำหรับนักพัฒนาที่ modernize SOAP-based service, consume RSS/Atom feed หรือ integrate กับระบบ enterprise ที่ output XML",howToUse:`1. วาง XML document ลงในช่องซ้าย
2. JSON output จะถูกสร้างขึ้น โดย XML attribute จะปรากฏเป็น key แบบ @_attributeName
3. Nested element กลายเป็น nested JSON object, element ที่ซ้ำกันกลายเป็น array
4. คัดลอก JSON เพื่อประมวลผลต่อหรือใช้ใน API
5. เคล็ดลับ: XML ที่มี namespace prefix (เช่น ns:element) จะคง prefix ไว้ใน JSON key`},"xml-to-yaml":{description:"แปลง XML เป็น YAML ที่อ่านง่าย — migrate XML config ไปยัง YAML-based tooling สมัยใหม่",longDescription:"Parse XML document และสร้าง YAML output ที่อ่านง่ายกว่า เหมาะสำหรับทีมที่กำลัง transition จาก XML-based config system (Maven, Ant, Spring XML เก่า) มายัง YAML-based alternative (Kubernetes, Docker Compose, GitHub Actions) XML attribute จะถูกรักษาไว้ และ nested element จะกลายเป็น YAML mapping ที่ indent อย่างเหมาะสม",howToUse:`1. วาง XML ลงในช่องซ้าย
2. YAML output จะถูกสร้างพร้อม indentation ที่ถูกต้อง
3. XML attribute จะปรากฏเป็น key ที่มี prefix @_ (ตาม fast-xml-parser)
4. คัดลอก YAML และปรับใช้ใน config file
5. เคล็ดลับ: อาจต้องลบ @_ prefix ออกจาก attribute key ด้วยตนเอง ขึ้นอยู่กับการใช้งาน`},"xml-beautify":{description:"จัดรูปแบบ XML ให้อ่านง่ายด้วย indentation ที่ถูกต้อง — แก้ไข XML ที่ minify แล้วหรือรูปแบบยุ่งเหยิงได้ทันที",longDescription:"แปลง XML ที่ minify แล้ว, single-line หรือ indent ไม่ถูกต้องให้กลายเป็น XML ที่จัดรูปแบบสวยงามด้วย indentation 2 ช่องต่อระดับ Self-closing tag และ void element ถูกจัดการอย่างถูกต้อง เหมาะสำหรับอ่าน API response, debug XML payload หรือเตรียม XML document สำหรับเอกสารและ code review",howToUse:`1. วาง XML ที่ minify แล้วหรือรูปแบบยุ่งเหยิงลงในช่องซ้าย
2. XML ที่จัดรูปแบบแล้วจะปรากฏพร้อม indentation ที่เหมาะสม
3. Declaration <?xml?> จะถูกรักษาไว้ที่ต้น
4. คัดลอก XML ที่จัดรูปแบบแล้วไปใช้ใน editor หรือเอกสาร
5. เคล็ดลับ: จัดรูปแบบก่อนแก้ไข XML ด้วยตนเอง จะทำงานได้ง่ายกว่ามาก`},"csv-to-json":{description:"แปลง CSV เป็น JSON array — parse header, อนุมาน data type และจัดการ quoted field ได้โดยอัตโนมัติ",longDescription:'แปลงข้อมูล CSV ให้กลายเป็น JSON array of objects แต่ละ row กลายเป็น object และ column header กลายเป็น key ระบบอนุมาน data type อัตโนมัติ: ตัวเลขกลายเป็น number, "true"/"false" กลายเป็น boolean และ field ว่างกลายเป็น null Field ที่ quote แล้วซึ่งมี comma หรือขึ้นบรรทัดใหม่ถูก parse ถูกต้องตามมาตรฐาน CSV เหมาะสำหรับ data processing pipeline, import spreadsheet data เข้า web app หรือเตรียมข้อมูลสำหรับ API',howToUse:`1. วาง CSV data (ที่มี header row) ลงในช่องซ้าย
2. JSON output จะถูกสร้างเป็น array of objects
3. Row แรกจะถูกใช้เป็น header (ชื่อ column)
4. Data type จะถูกอนุมานโดยอัตโนมัติ (number, boolean, null)
5. เคล็ดลับ: หาก CSV ใช้ semicolon (;) เป็นตัวคั่น ให้แทนที่ด้วย comma ก่อน`},"typescript-to-javascript":{description:"ลบ TypeScript type annotation และสร้าง JavaScript ที่สะอาด — ลบ interface, generic, type cast และ access modifier",longDescription:'แปลง TypeScript source code เป็น JavaScript ธรรมดาโดยลบ type annotation, interface และ type declaration, generic type parameter, "as" type cast, non-null assertion (!), readonly keyword และ access modifier (public, private, protected) ออก converter ใช้ regex-based stripping ดังนั้น generic ที่ซับซ้อนอาจต้องแก้ไขด้วยตนเอง เหมาะสำหรับแชร์ code กับ project ที่ไม่ใช้ TypeScript หรือ publish JavaScript package',howToUse:`1. วาง TypeScript code ลงในช่องซ้าย
2. JavaScript output จะถูกสร้างโดยลบ type ออกแล้ว
3. ตรวจสอบ output ว่ายังมี type syntax ที่ต้องลบออกด้วยตนเองหรือไม่
4. อ่าน warning ที่แสดงใต้ output panel
5. เคล็ดลับ: สำหรับ production ควรใช้ TypeScript compiler (tsc) หรือ esbuild เพื่อ transpile ที่แม่นยำกว่า`},"javascript-to-typescript":{description:"เพิ่ม TypeScript type annotation เบื้องต้นให้ JavaScript — แปลง require() เป็น import และเพิ่ม type hint",longDescription:"แปลง JavaScript เป็น TypeScript แบบ best-effort โดยเปลี่ยน CommonJS require() เป็น ES module import และเพิ่ม type hint เบื้องต้นให้ arrow function ผลลัพธ์เป็นจุดเริ่มต้นสำหรับ adopt TypeScript ใน JavaScript project ยังต้องเพิ่ม specific type ด้วยตนเองเพื่อ type safety เต็มรูปแบบ เหมาะสำหรับการเข้าใจว่าต้องเปลี่ยนอะไรบ้างและจัดการ boilerplate ออกก่อน",howToUse:`1. วาง JavaScript code ลงในช่องซ้าย
2. Output จะมี import statement และ type hint เบื้องต้น
3. อ่าน warning เกี่ยวกับการ refine type ด้วยตนเอง — นี่เป็นจุดเริ่มต้น ไม่ใช่การแปลงที่สมบูรณ์
4. เปิด output ใน TypeScript project และเพิ่ม specific type
5. เคล็ดลับ: ใช้ TypeScript language server (เช่นใน VS Code) เพื่อดูว่า type ไหนยังต้องระบุ`},"markdown-to-html":{description:"แปลง Markdown เป็น HTML page ที่สมบูรณ์ — รองรับ GitHub Flavored Markdown รวมถึง table, task list และ code block",longDescription:"แปลง Markdown document ให้กลายเป็น HTML page เต็มรูปแบบพร้อม style sheet ในตัว รองรับ GitHub Flavored Markdown (GFM) ครบ: heading, bold/italic, strikethrough, inline code, fenced code block, blockquote, ordered/unordered list, task list, table และ horizontal rule ผลลัพธ์เป็นไฟล์ HTML ที่ครบในตัวเอง พร้อมเปิดในเบราว์เซอร์หรือฝังในระบบเอกสาร",howToUse:`1. วาง Markdown ลงในช่องซ้าย
2. HTML page เต็มรูปแบบจะถูกสร้างขึ้น (พร้อม <html>, <head> และ <body>)
3. บันทึก output เป็นไฟล์ .html แล้วเปิดในเบราว์เซอร์ได้
4. หากต้องการเฉพาะ HTML fragment ให้คัดลอกเฉพาะส่วนเนื้อหาใน <body>
5. เคล็ดลับ: ใช้ fenced code block (\`\`\`language) เพื่อแสดง code ใน output อย่างสวยงาม`},"html-to-markdown":{description:"แปลง HTML เป็น Markdown ที่สะอาด — เหมาะสำหรับย้าย web content ไปยัง README, wiki หรือ platform เอกสาร",longDescription:"แปลง HTML markup ให้กลายเป็น Markdown ที่อ่านง่ายโดยใช้ Turndown ซึ่งเป็น HTML-to-Markdown converter ที่แข็งแกร่ง รองรับ heading (h1–h6), paragraph, bold, italic, inline code, code block, blockquote, ordered/unordered list, link, image และ table output ใช้ ATX-style heading (#, ##) และ fenced code block เข้ากันได้กับ GitHub, GitLab, Notion, Confluence และ platform เอกสารส่วนใหญ่",howToUse:`1. วาง HTML (full page หรือ fragment) ลงในช่องซ้าย
2. Markdown output จะถูกสร้างขึ้นทันที
3. Output ใช้ # สำหรับ heading, - สำหรับ list item และ \`\`\` สำหรับ code block
4. คัดลอกและวางใน README.md, wiki หรือเครื่องมือเอกสาร
5. เคล็ดลับ: ลบ <script>, <style> และ <nav> tag ออกจาก HTML ก่อน เพื่อให้ Markdown output สะอาดขึ้น`},"html-beautify":{description:"จัดรูปแบบ HTML ด้วย indentation ที่ถูกต้อง — แปลง HTML ที่ minify แล้วให้อ่านง่ายและ maintain ได้",longDescription:"แปลง HTML ที่ minify แล้วหรือ indent ไม่ถูกต้องให้กลายเป็น HTML ที่จัดรูปแบบสวยงามด้วย indentation 2 ช่องต่อระดับ Void element (br, img, input ฯลฯ) ถูกจัดการถูกต้องโดยไม่เพิ่ม closing tag ช่วยให้นักพัฒนาอ่านและแก้ไข HTML ได้ง่ายขึ้น ทำ code review หรือเตรียม HTML สำหรับ version control",howToUse:`1. วาง HTML ที่ minify แล้วหรือรูปแบบยุ่งเหยิงลงในช่องซ้าย
2. HTML ที่จัดรูปแบบแล้วจะปรากฏพร้อม indentation ที่เหมาะสม
3. Void element (br, img, input, meta, link) จะไม่มี closing tag
4. คัดลอก output ไปใช้ใน editor หรือ version control
5. เคล็ดลับ: สำหรับ HTML formatting ระดับ production ควรใช้ Prettier ใน dev environment`},"html-minify":{description:"บีบอัด HTML โดยลบ whitespace และ comment — ลดขนาดหน้าเว็บเพื่อโหลดเร็วขึ้น",longDescription:"บีบอัด HTML โดยลบ HTML comment ออก, รวม whitespace หลายตัวให้เป็นช่องเดียว และลบ whitespace ระหว่าง tag ผลลัพธ์เป็น HTML compact ที่มีขนาดเล็กลงและโหลดได้เร็วขึ้น เนื้อหา attribute และ inline script/style ทั้งหมดยังคงอยู่ครบถ้วน",howToUse:`1. วาง HTML document ลงในช่องซ้าย
2. HTML ที่ minify แล้วจะปรากฏเป็น compact string ในช่องขวา
3. HTML comment (<!-- -->) ทั้งหมดจะถูกลบออก
4. คัดลอกและใช้ใน build pipeline หรือระบบ delivery
5. เคล็ดลับ: สำหรับ minification ขั้นสูง (attribute quoting, optional tag removal) ใช้ html-minifier-terser`},"base64-encode":{description:"เข้ารหัสข้อความเป็น Base64 — ใช้ใน HTTP Basic Auth, email attachment, data URI และ API token",longDescription:"แปลง UTF-8 text ใดก็ได้เป็น Base64 encoding ทันที Base64 เป็นสิ่งจำเป็นในหลายบริบท: HTTP Basic Authentication header (username:password), embed binary data ใน JSON หรือ XML, data URI สำหรับ inline image และ font, email MIME attachment และการ encode API key หรือ secret สำหรับการส่งข้อมูล รองรับ Unicode อย่างถูกต้อง",howToUse:`1. พิมพ์หรือวางข้อความ (รวมถึง Unicode/emoji) ลงในช่องซ้าย
2. Base64 encoded string จะปรากฏทันทีในช่องขวา
3. คัดลอก output ไปใช้ใน Authorization header, data URI หรือ payload
4. เคล็ดลับ: สำหรับ HTTP Basic Auth ให้ encode "username:password" แล้วเพิ่ม "Basic " ไว้ข้างหน้า header value`},"base64-decode":{description:"ถอดรหัส Base64 string กลับเป็นข้อความธรรมดา — แปลงกลับจาก token, payload หรือ API response",longDescription:"แปลง Base64 encoded string กลับเป็น UTF-8 text ต้นฉบับ รองรับทั้ง standard Base64 (ใช้ + และ /) และ URL-safe Base64 (ใช้ - และ _) decoder จัดการ Unicode content ได้ถูกต้อง เป็นประโยชน์สำหรับ decode JWT payload, ตรวจสอบ HTTP Basic Auth credential, อ่าน Base64 encoded API response หรือ debug encoded data ระหว่างการส่งข้อมูล",howToUse:`1. วาง Base64 string ลงในช่องซ้าย
2. ข้อความที่ decode แล้วจะปรากฏในช่องขวา
3. หาก string มี whitespace จะถูก trim โดยอัตโนมัติ
4. URL-safe Base64 (อักขระ - และ _) ก็รองรับด้วย
5. เคล็ดลับ: JWT token มี 3 ส่วน Base64 คั่นด้วยจุด — decode แต่ละส่วนแยกกัน หรือใช้เครื่องมือ JWT Decoder`},"url-encode":{description:"Percent-encode URL และ query string value — ส่งผ่าน special character, ช่องว่าง และ non-ASCII ใน URL อย่างปลอดภัย",longDescription:"Encode string โดยใช้ percent-encoding (URL encoding) เพื่อให้นำไปใช้ใน URL query parameter, path segment หรือ form submission ได้อย่างปลอดภัย ช่องว่างกลายเป็น %20, & กลายเป็น %26, = กลายเป็น %3D และอักขระที่ไม่ใช่ ASCII (รวมถึงภาษาไทย, จีน, emoji) จะถูก encode เป็น UTF-8 byte sequence ในรูปแบบ percent",howToUse:`1. วาง URL หรือ string ที่ต้องการ encode ลงในช่องซ้าย
2. Percent-encoded output จะปรากฏทันที
3. ใช้ output ใน query parameter, path segment หรือ form data
4. เคล็ดลับ: encode เฉพาะส่วน value ของ query parameter ไม่ใช่ทั้ง URL เพราะการ encode & และ = จะทำให้ URL structure เสีย`},"url-decode":{description:"Decode URL ที่ percent-encode แล้วให้กลับเป็นข้อความที่อ่านได้ — แปลง %20, %26 และ escape sequence อื่นๆ",longDescription:"แปลง URL string ที่ percent-encode แล้วให้กลับเป็นรูปแบบที่อ่านได้ เช่น %20 → ช่องว่าง, %26 → &, %3D → = และ multi-byte sequence สำหรับอักขระที่ไม่ใช่ ASCII เช่น ภาษาไทยหรือจีน เป็นประโยชน์มากสำหรับ debug API call, อ่าน URL ที่ encode แล้วจาก browser, ทำความเข้าใจ redirect parameter และตรวจสอบ log file ที่มี URL แบบ encode",howToUse:`1. วาง URL หรือ string ที่ percent-encode แล้วลงในช่องซ้าย
2. ข้อความที่ decode แล้วจะปรากฏในช่องขวา
3. คัดลอก string ที่ decode แล้วเพื่อ debug หรือแสดงผล
5. เคล็ดลับ: หาก URL ดูผิดปกติ (เช่น แสดง %2F แทน /) ให้วางที่นี่เพื่ออ่าน path ที่ decode แล้ว`},"jwt-decode":{description:"Decode และตรวจสอบ JWT token — ดู header, payload claim, issued-at, expiry และสถานะหมดอายุ",longDescription:"Decode JSON Web Token (JWT) และแสดงส่วนประกอบทั้งสาม: header (algorithm และ token type), payload (claim เช่น sub, name, iat, exp) และ raw signature เครื่องมือยังคำนวณ date ที่อ่านได้สำหรับ iat และ exp รวมถึงแจ้งว่า token หมดอายุแล้วหรือไม่ หมายเหตุ: เครื่องมือนี้ไม่ verify signature — decode เท่านั้น อย่าพึ่งพา client-side JWT decode สำหรับการตัดสินใจด้านความปลอดภัย",howToUse:`1. วาง JWT (string eyJ... ทั้งหมด) ลงในช่องซ้าย
2. Header, payload และ signature ที่ decode แล้วจะแสดงในรูปแบบ JSON
3. ส่วน _meta จะแสดง algorithm, วันที่ issuedAt, วันที่ expiresAt และ flag isExpired
4. ใช้ดู claim เช่น user ID, role หรือเวลาหมดอายุระหว่าง debug
5. คำเตือน: เครื่องมือนี้ไม่ verify signature — JWT ที่ decode แล้วไม่ใช่หลักฐานความถูกต้อง`},"html-entities-encode":{description:"Encode อักขระพิเศษ HTML เป็น entity — แสดง user input, code snippet และ HTML ดิบบนหน้าเว็บอย่างปลอดภัย",longDescription:`แปลงอักขระที่มีความหมายพิเศษใน HTML — <, >, &, ", ' — เป็น HTML entity เทียบเท่า (&lt;, &gt;, &amp;, &quot;, &#039;) นี่คือวิธีที่ถูกต้องในการแสดง user-generated content, code sample หรือ HTML tag ดิบบนหน้าเว็บโดยไม่ให้ browser ตีความเป็น markup จำเป็นสำหรับการป้องกัน XSS (Cross-Site Scripting) เมื่อ render user input ฝั่ง server`,howToUse:`1. วางข้อความที่มีอักขระพิเศษลงในช่องซ้าย
2. Output ที่ encode เป็น HTML entity แล้วจะปรากฏทางขวา
3. คัดลอกและ embed output ใน HTML template ของคุณอย่างปลอดภัย
4. เคล็ดลับ: encode user-generated content เสมอก่อน render ใน HTML เพื่อป้องกัน XSS attack`},"html-entities-decode":{description:"Decode HTML entity กลับเป็นอักขระธรรมดา — แปลง &lt;, &gt;, &amp; และ entity อื่นๆ เป็นข้อความอ่านได้",longDescription:"แปลง HTML entity (&lt;, &gt;, &amp;, &quot;, &#039;, &apos;, &nbsp;) กลับเป็นอักขระต้นฉบับ เหมาะสำหรับอ่าน HTML-encoded content ที่เก็บใน database, API หรือ CMS system รวมถึงช่วย decode double-encoded HTML entity ที่บางครั้งปรากฏใน content ที่ scrape หรือ export มา",howToUse:`1. วางข้อความที่ encode เป็น HTML entity แล้วลงในช่องซ้าย
2. ข้อความธรรมดาที่ decode แล้วจะปรากฏทางขวา
3. Entity ทั่วไปเช่น &amp;, &lt;, &gt;, &quot; ล้วนถูก decode แล้ว
4. เคล็ดลับ: หากเห็น &amp;amp; (double encoding) ให้วาง output กลับผ่านเครื่องมือนี้อีกครั้งเพื่อ decode ชั้นที่สอง`},"decimal-to-binary":{description:"แปลงเลขฐาน 10 เป็นฐาน 2 (binary) พร้อมแสดงเลขฐาน 8 และฐาน 16 ให้ด้วย",longDescription:"ป้อนเลขจำนวนเต็มฐาน 10 แล้วดู binary (ฐาน 2) พร้อม octal (ฐาน 8) และ hexadecimal (ฐาน 16) ที่แสดงควบคู่ เป็นเครื่องมือพื้นฐานสำหรับนักศึกษา computer science, นักพัฒนา embedded system หรือใครก็ตามที่ทำงานกับ bit manipulation, permission (chmod), memory address หรือแนวคิด low-level programming",howToUse:`1. พิมพ์เลขจำนวนเต็มฐาน 10 ลงในช่องซ้าย (เช่น 255)
2. Binary output จะแสดงพร้อม prefix 0b
3. Octal (0o) และ hexadecimal (0x) แสดงเป็น reference เพิ่มเติม
4. เคล็ดลับ: เลข 255 = 0b11111111 = 0xFF ซึ่งเป็นค่าสูงสุดของ unsigned byte 8-bit`},"binary-to-decimal":{description:"แปลงเลขฐาน 2 (binary) เป็นฐาน 10 พร้อมแสดง octal และ hexadecimal",longDescription:"ป้อนเลข binary (ใช้ 0 และ 1 เท่านั้น) แล้วแปลงเป็นเลขฐาน 10 เครื่องมือยังแสดง octal และ hexadecimal ด้วย prefix 0b เป็น optional และถูก strip ออกโดยอัตโนมัติ เหมาะสำหรับทำความเข้าใจ binary arithmetic, decode binary data, ทำงานกับ bitwise operation หรือศึกษา computer architecture",howToUse:`1. พิมพ์หรือวางเลข binary ลงในช่อง (เช่น 11111111 หรือ 0b11111111)
2. ผลลัพธ์ decimal จะแสดงที่ด้านบนของ output
3. Octal และ hexadecimal จะแสดงเป็น reference เพิ่มเติม
4. เคล็ดลับ: Binary ที่ยาวกว่า 32 bit อาจเกิน safe integer range ของ JavaScript`},"decimal-to-hex":{description:"แปลงเลขฐาน 10 เป็น hexadecimal (ฐาน 16) — ใช้บ่อยใน web color, memory address และ low-level programming",longDescription:"ป้อนเลขจำนวนเต็มฐาน 10 แล้วรับ hexadecimal พร้อม prefix 0x Hexadecimal ใช้กันอย่างแพร่หลายใน web development (CSS color code), systems programming (memory address, register value), cryptography (hash output) และ debugging output ยังแสดง binary representation เป็น reference ด้วย",howToUse:`1. พิมพ์เลขฐาน 10 ลงในช่องซ้าย (เช่น 255)
2. Hex output จะแสดงพร้อม prefix 0x (เช่น 0xFF)
3. Binary representation แสดงด้านล่างเป็น reference
4. เคล็ดลับ: CSS hex color ใช้ 6 hex digit — เช่น #1677FF ใช้เครื่องมือ Color Converter สำหรับการแปลง color แบบเต็มรูปแบบ`},"hex-to-decimal":{description:"แปลง hexadecimal เป็นเลขฐาน 10 — รองรับ prefix 0x และ hex digit ตัวใหญ่/ตัวเล็ก",longDescription:"ป้อน hexadecimal value (มีหรือไม่มี prefix 0x) แล้วแปลงเป็นเลขฐาน 10 เครื่องมือยังแสดง binary representation ด้วย เหมาะสำหรับอ่านค่า memory dump, color code, network protocol field หรือข้อมูลที่ hex-encode แล้วที่ต้องการค่า decimal",howToUse:`1. พิมพ์เลข hex ลงในช่อง (เช่น FF หรือ 0xFF หรือ ff)
2. ผลลัพธ์ decimal จะแสดงใน output
3. Binary representation แสดงเป็น reference
4. เคล็ดลับ: สำหรับ CSS hex color ใช้ HEX to RGB/HSL converter เพื่อรับรายละเอียด color เต็มรูปแบบ`},"timestamp-to-date":{description:"แปลง Unix timestamp (วินาทีหรือมิลลิวินาที) เป็นวันที่อ่านได้ในทุก timezone — พร้อม ISO 8601, UTC และเวลาท้องถิ่น",longDescription:"ป้อน Unix timestamp แล้วดูวันที่และเวลาที่ตรงกันในหลายรูปแบบ: ISO 8601, string ที่อ่านได้, date-only, time-only และ UTC offset เครื่องมือตรวจจับอัตโนมัติว่า timestamp เป็นวินาทีหรือมิลลิวินาที (ตามขนาด) และสามารถเลือก timezone ใดก็ได้จาก option panel จำเป็นสำหรับ debug API log, ตรวจสอบ JWT expiry time และทำงานกับ time-series data",howToUse:`1. วาง Unix timestamp ลงในช่องซ้าย (เช่น 1716239022 สำหรับวินาที หรือ 1716239022000 สำหรับ ms)
2. เครื่องมือตรวจจับวินาทีหรือมิลลิวินาทีโดยอัตโนมัติ
3. เลือก timezone จาก dropdown ใน options panel
4. Output แสดงวันเวลาใน timezone ที่เลือกและ UTC
5. เคล็ดลับ: Field exp และ iat ใน JWT คือ Unix timestamp หน่วยวินาที — วางที่นี่เพื่ออ่านวันที่`},"date-to-timestamp":{description:"แปลง date string เป็น Unix timestamp — รองรับ ISO 8601 และรูปแบบวันที่อื่นๆ อีกมาก",longDescription:"ป้อน date string ในรูปแบบ ISO 8601 (2024-01-15T10:30:00Z) หรือรูปแบบอื่นๆ (2024-01-15, January 15 2024) แล้วรับ Unix timestamp ทั้งในหน่วยวินาทีและมิลลิวินาที output ยังแสดงวันที่ใน timezone ที่เลือกและ UTC เหมาะสำหรับสร้าง API request parameter, กำหนด expiry time หรือทำงานกับ date-based filter ในฐานข้อมูล",howToUse:`1. พิมพ์หรือวาง date string ลงในช่อง (เช่น 2024-01-15T10:30:00Z)
2. Unix timestamp หน่วยวินาทีและมิลลิวินาทีจะแสดงใน output
3. เลือก timezone จาก options เพื่อดู local time representation
4. เคล็ดลับ: ใช้ ISO 8601 พร้อม timezone suffix (Z สำหรับ UTC หรือ +07:00 สำหรับเวลาไทย) เพื่อผลลัพธ์ที่แม่นยำที่สุด`},"hex-to-rgb":{description:"แปลง HEX color เป็น RGB, RGBA, HSL, HSLA และ CSS custom property — ทุกรูปแบบในคลิกเดียว",longDescription:"ป้อน HEX color code (แบบ 3 หลักหรือ 6 หลัก) แล้วรับ color format เทียบเท่าทั้งหมดทันที: RGB, RGBA, HSL, HSLA, ค่า channel แต่ละตัว และ CSS custom property declaration พร้อมใช้ (--color-rgb, --color-hsl) เป็นเครื่องมือสำคัญสำหรับ frontend developer และ UI designer ที่ทำงานกับ design token, Tailwind config, CSS variable หรือระบบ color ข้ามรูปแบบ",howToUse:`1. พิมพ์หรือวาง HEX color ลงในช่องซ้าย (เช่น #1677FF หรือ #F53)
2. Color format ทั้งหมดจะปรากฏในช่องขวาในรูปแบบ JSON
3. คัดลอก format ที่ต้องการ (rgb(), hsl() หรือ CSS variable)
4. Field css_variables ให้ :root variable declaration พร้อมวาง
5. เคล็ดลับ: HEX code 3 หลัก (#F53) จะถูกขยายเป็น 6 หลัก (#FF5533) ก่อนแปลง`},"rgb-to-hex":{description:"แปลง RGB/RGBA เป็น HEX, HSL, HSLA และ CSS variable — ทุก color format จาก RGB input เดียว",longDescription:"ป้อน RGB หรือ RGBA color value แล้วรับทุก representation ที่เทียบเท่า: HEX code, HSL, HSLA, ค่า channel แต่ละตัว และ CSS custom property declaration รองรับทั้งรูปแบบ function rgb(r, g, b) และค่า comma-separated (255, 87, 51) เหมาะสำหรับ designer และ developer ที่ต้องแปลง color ระหว่าง design tool, codebase หรือ style system ต่างๆ",howToUse:`1. วาง RGB color value ลงในช่องซ้าย (เช่น rgb(22, 119, 255) หรือ 22, 119, 255)
2. Color format เทียบเท่าทั้งหมดจะปรากฏใน output ในรูปแบบ JSON
3. คัดลอก HEX, HSL หรือ CSS variable ที่ต้องการ
4. เคล็ดลับ: ค่า alpha จาก rgba() จะถูกระบุ แต่การแปลงจะถือว่า color มี opacity เต็ม 100% สำหรับ HEX และ HSL output`},"hsl-to-rgb":{description:"แปลง HSL color เป็น HEX และ RGB — พร้อม CSS variable และ color representation ครบถ้วนใน output เดียว",longDescription:"ป้อน HSL หรือ HSLA color value แล้วรับ HEX code, RGB, RGBA และ CSS custom property declaration ที่เทียบเท่า HSL (Hue, Saturation, Lightness) เป็นที่นิยมใน CSS และ design tool เพราะ intuitive กว่า RGB สำหรับการ manipulate color — ปรับ saturation หรือ lightness ได้ตรงไปตรงมา เหมาะสำหรับแปลง export จาก design tool (Figma, Sketch) เป็น HEX หรือ RGB สำหรับใช้ใน code",howToUse:`1. วาง HSL color ลงในช่องซ้าย (เช่น hsl(213, 100%, 54%) หรือ 213, 100, 54)
2. HEX, RGB, RGBA, HSLA และ CSS variable ที่เทียบเท่าจะปรากฏใน output
3. คัดลอก format ที่ต้องการสำหรับ CSS file หรือ design system
4. เคล็ดลับ: Hue คือ 0–360 (องศาบน color wheel), Saturation และ Lightness คือ 0–100 (เปอร์เซ็นต์)`},"css-minify":{description:"บีบอัด CSS โดยลบ comment, whitespace และ semicolon ที่ไม่จำเป็น — ลดขนาด stylesheet เพื่อโหลดหน้าเว็บเร็วขึ้น",longDescription:"บีบอัด CSS โดยลบ comment ทั้งหมด, รวม whitespace, ลบ space รอบๆ selector และ declaration และลบ semicolon สุดท้ายก่อน closing brace ผลลัพธ์เป็น CSS compact ที่ทำงานเหมือนกันทุกประการแต่มีขนาดเล็กกว่า เหมาะสำหรับ production deployment, embed style ใน HTML page หรือลดค่า CDN transfer",howToUse:`1. วาง CSS code ลงในช่องซ้าย
2. CSS ที่ minify แล้วจะถูกสร้างเป็น compact single-line output
3. Comment /* */ ทั้งหมดจะถูกลบออก
4. คัดลอก CSS ที่ minify แล้วไปใช้ใน production build หรือ <style> tag
5. เคล็ดลับ: สำหรับ project ขนาดใหญ่ ควรรวม CSS build tool (PostCSS, esbuild) ไว้ใน CI pipeline`},"css-beautify":{description:"จัดรูปแบบ CSS ให้อ่านง่ายพร้อม indentation และ line break ที่เหมาะสม — สร้าง stylesheet ที่ดูแลรักษาได้",longDescription:"แปลง CSS ที่ minify แล้ว, auto-generated หรือรูปแบบยุ่งเหยิงให้กลายเป็น CSS ที่จัดรูปแบบสวยงาม มี property ละบรรทัด, brace วางอย่างเหมาะสม และ spacing สม่ำเสมอ ทำให้ CSS อ่านได้ง่ายขึ้น debug ได้ง่ายขึ้น และ maintain ใน version control ได้ดีขึ้น เหมาะหลังจาก copy style จาก browser DevTools, vendor stylesheet ที่ minify แล้ว หรือ CSS ที่สร้างจาก design tool",howToUse:`1. วาง CSS ที่ minify แล้วหรือรูปแบบยุ่งเหยิงลงในช่องซ้าย
2. CSS ที่จัดรูปแบบแล้วจะปรากฏใน output พร้อม property ละบรรทัด
3. Selector และ brace จะอยู่ในบรรทัดของตัวเอง
4. คัดลอก output ไปใช้ใน stylesheet หรือ editor
5. เคล็ดลับ: ใช้ inspect และทำความเข้าใจ CSS ที่ auto-generate จาก Tailwind หรือ CSS-in-JS library`},"css-to-scss":{description:"แปลง CSS custom property (CSS variable) เป็น SCSS variable — migrate จาก vanilla CSS ไปสู่ SCSS design system",longDescription:"แปลง CSS :root variable declaration (--variable-name: value) เป็น SCSS variable syntax ($variable_name: value) และแทนที่การใช้ var(--variable-name) ทั่วทั้ง stylesheet ด้วย $variable_name ที่ตรงกัน Dash ในชื่อ variable จะถูกแปลงเป็น underscore สำหรับ SCSS เป็น starting point ที่ดีสำหรับ migrate CSS custom properties system ไปสู่ SCSS แม้ว่า nesting และ mixin จะต้องเพิ่มด้วยตนเอง",howToUse:`1. วาง CSS ที่มี :root variable ลงในช่องซ้าย
2. Output จะแทนที่ :root { --var: value } ด้วย $var: value declaration
3. การใช้ var(--var) จะกลายเป็น $var reference ใน output
4. คัดลอก SCSS ไปใช้ในไฟล์ .scss แล้วเพิ่ม nesting ด้วยตนเอง
5. เคล็ดลับ: Dash ในชื่อ CSS variable (--primary-color) จะกลายเป็น underscore ใน SCSS ($primary_color)`},"css-to-tailwind":{description:"แปลง CSS declaration เป็น Tailwind CSS utility class — ค้นหา Tailwind class ที่ถูกต้องสำหรับ style ของคุณ",longDescription:"ป้อน CSS property declaration แล้วรับ Tailwind CSS utility class ที่เทียบเท่า รองรับ property ทั่วไป: layout (display, position, overflow), flexbox (flex-direction, align-items, justify-content), sizing (width, height) และ typography (text-align, font-weight) Property ที่ไม่มี Tailwind class ตรงๆ จะแสดงเป็น comment เพื่อให้จัดการด้วยตนเอง เหมาะสำหรับนักพัฒนาที่ migrate จาก CSS ไป Tailwind หรือกำลังเรียนรู้ว่า Tailwind class ตัวไหนตรงกับ CSS property ใด",howToUse:`1. วาง CSS declaration (ทีละบรรทัด ไม่มี selector) ลงในช่องซ้าย
2. Tailwind class ที่ match จะ output เป็น string class="..."
3. Property ที่ไม่ match จะปรากฏเป็น CSS comment ด้านล่าง
4. คัดลอก class list และเพิ่มใน HTML element ของคุณ
5. เคล็ดลับ: สำหรับค่า pixel ที่กำหนดเอง (เช่น padding: 12px) ใช้ arbitrary value ของ Tailwind (p-[12px]) ด้วยตนเอง`}},g={"json-to-typescript":{description:"将 JSON 对象转换为完整类型的 TypeScript 接口 — 支持嵌套对象、数组、可选字段和联合类型",longDescription:"粘贴任意 JSON 数据，即可在几秒内生成可直接用于生产环境的 TypeScript 接口。系统会自动推断每个字段的类型，包括字符串、数字、布尔值、数组以及多层嵌套对象。null 值会被标记为可选字段（添加 ?），数组元素类型会被精确分析，包括混合类型的联合类型。嵌套对象会被生成为单独命名的接口，便于代码组织。非常适合构建 REST API 客户端、使用第三方 API 或将 JavaScript 项目迁移至 TypeScript 的开发者。",howToUse:`1. 将 JSON 数据粘贴到左侧输入框
2. 右侧面板会自动生成 TypeScript 接口
3. 顶层对象会生成名为"Root"的接口，嵌套对象会成为子接口（例如 RootAddress）
4. 复制输出内容，直接粘贴到 TypeScript 项目中使用
5. 提示：对象数组（[{...}]）会自动为每个元素的结构生成带类型的接口`},"json-to-javascript":{description:"将 JSON 转换为 JavaScript const 变量声明 — 可直接粘贴到 .js 或 Node.js 文件中",longDescription:"将 JSON 数据转换为带有 2 空格缩进的标准 JavaScript const 声明。结果可直接用于 Node.js 脚本、前端 JavaScript 文件或配置模块。当你需要在 JavaScript 代码中直接嵌入静态 API 响应数据、模拟数据或配置对象，而不想引入外部 JSON 文件时，这个工具特别有用。",howToUse:`1. 将 JSON 对象或数组粘贴到左侧
2. 输出为 const data = { ... }; 格式的声明
3. 复制并粘贴到你的 .js 或 .mjs 文件中
4. 将"data"改为你项目中合适的变量名
5. 提示：当你想避免 JSON import 并将数据内联保留时使用此工具`},"json-to-yaml":{description:"将 JSON 转换为 YAML 格式 — 适用于 Kubernetes 清单、Docker Compose、GitHub Actions 等配置文件",longDescription:"将 JSON 数据转换为清晰易读的 YAML。保留所有数据类型，包括字符串、数字、布尔值、数组和嵌套对象。输出使用 2 空格缩进，并在遵循标准 YAML 规范的前提下省略不必要的引号。对于需要在基于 JSON 的 API 响应或配置生成器与 Helm、Ansible、CI/CD 流水线等基于 YAML 的基础设施工具之间架桥的 DevOps 工程师和开发者来说非常有价值。",howToUse:`1. 将 JSON 粘贴到左侧输入框
2. YAML 输出会立即显示在右侧面板
3. 检查嵌套对象是否正确缩进（每层 2 个空格）
4. 复制 YAML 直接用于配置文件或清单
5. 提示：JSON 数组会变成 YAML 列表（以 - 开头的行）`},"json-to-xml":{description:"将 JSON 转换为格式良好的 XML — 适用于 SOAP API、RSS 订阅和遗留企业系统集成",longDescription:"将 JSON 对象和数组转换为带有 <?xml?> 声明的正确结构化 XML 文档。嵌套的 JSON 对象会变成嵌套的 XML 元素，JSON 数组会展开为同名标签的重复兄弟元素。此工具可以将现代 JSON 系统与 SOAP Web 服务、企业中间件、EDI 系统和旧版 CMS 平台等 XML 消费系统连接起来。",howToUse:`1. 将 JSON 粘贴到左侧
2. 生成的 XML 文档会用 <root> 元素包裹所有数据
3. JSON 的键变成 XML 标签名，嵌套对象变成子元素
4. 数组生成使用相同标签名的重复元素
5. 提示：如需特定的根元素名，可手动将 <root> 标签改为所需名称`},"json-to-csv":{description:"将 JSON 数组转换为 CSV 格式 — 可直接导出到 Excel、Google 表格或其他电子表格工具",longDescription:"将 JSON 数组展平为 CSV 行，自动从对象键中提取列标题。数组中的每个对象成为一行，包含逗号或换行符的字段会按照 RFC 4180 CSV 标准正确处理引号。适用于数据导出流水线、从 API 响应生成报表，或为数据库和 BI 工具准备导入数据集。",howToUse:`1. 将 JSON 数组（对象列表）粘贴到左侧
2. 列标题会自动从对象的键中提取
3. 数组中的每个对象变成 CSV 中的一行
4. 复制 CSV 输出粘贴到 Excel、Google 表格，或保存为 .csv 文件
5. 提示：所有对象应具有相同的键，以保证列的一致性`},"json-to-sql":{description:"从 JSON 数组生成 SQL CREATE TABLE 和 INSERT 语句 — 立即从真实数据构建数据库模式",longDescription:"将 JSON 数组转换为可直接运行的 SQL 脚本。工具会自动生成 CREATE TABLE 语句，并从数据推断列类型（TEXT、NUMERIC、BOOLEAN），然后为每个 JSON 对象生成一条 INSERT 语句。可以妥善处理 NULL 值和缺失键。当你有示例 API 数据并想快速建立关系数据库表，而无需手写 SQL 时，这个工具能节省大量时间。",howToUse:`1. 将 JSON 对象数组粘贴到左侧
2. 工具会从数据值推断列类型
3. 顶部生成 CREATE TABLE 块，后跟 INSERT 语句
4. 运行前将"table_name"替换为实际的表名
5. 提示：先运行 CREATE TABLE，再执行 INSERT 语句`},"json-beautify":{description:"格式化并美化压缩或紧凑的 JSON，添加适当缩进 — 同时验证 JSON 语法",longDescription:"将任何已压缩或格式混乱的 JSON 字符串立即转换为带有 2 空格缩进的清晰易读版本。同时会验证 JSON 语法，如果输入存在问题，会显示清晰的错误信息。这是开发者检查 API 响应、调试 JSON 载荷或查看配置文件时每天必用的工具。",howToUse:`1. 将压缩或混乱的 JSON 粘贴到左侧
2. 格式化后的 JSON 会立即出现在右侧面板
3. 如果有语法错误，会显示错误信息
4. 复制美化后的 JSON 用于编辑器、文档或日志
5. 提示：在将 JSON 作为 API 请求体发送前，用此工具进行验证`},"json-minify":{description:"删除所有空白和换行来压缩 JSON — 减少 API 响应和存储的载荷大小",longDescription:"去除 JSON 中所有不必要的空白、换行和缩进，生成最紧凑的表示形式。压缩后的 JSON 非常适合对带宽敏感的 API 响应、localStorage 值、环境变量载荷，或任何需要最小化 JSON 大小的场景。输出与输入在功能上完全相同，只删除了格式，不删除数据。",howToUse:`1. 将格式化（美化）的 JSON 粘贴到左侧
2. 压缩后的单行 JSON 会立即显示
3. 复制并用于 API 调用、请求头或压缩存储
4. 提示：如果需要将 JSON 嵌入 URL 或请求头值，可以与 Base64 编码结合使用`},"json-to-js-object":{description:"将 JSON 转换为键不带引号的 JavaScript 对象字面量 — 更自然的 JS 源文件嵌入语法",longDescription:"JSON 要求所有键必须是带引号的字符串，但原生 JavaScript 对象字面量允许有效标识符的键不带引号。此转换器将 JSON 转换为 JS 对象语法，在可能的情况下去掉键上不必要的引号，同时保留字符串值的引号。结果是地道的 JavaScript，在源代码中看起来更自然。适用于配置文件、模拟数据，以及任何想要使用 JS 对象语法而非 JSON 的场景。",howToUse:`1. 将 JSON 粘贴到左侧
2. 输出是 const data = { ... };，有效标识符的键不带引号
3. 包含特殊字符或空格的键仍保留引号
4. 直接复制粘贴到你的 .js 文件中
5. 提示：这是有效的 JavaScript 但不是有效的 JSON，不要在需要严格 JSON 的地方使用`},"yaml-to-json":{description:"将 YAML 配置文件转换为 JSON — 立即解析 Docker Compose、Kubernetes、GitHub Actions 等 YAML 配置",longDescription:"将任意有效的 YAML 文档转换为格式良好的 JSON 对象。支持完整的 YAML 规范，包括多行字符串、锚点和别名、复杂映射以及嵌套序列。对于需要以编程方式处理 YAML 配置文件、将 YAML 数据传递给仅支持 JSON 的 API，或仅检查复杂 YAML 文档解析后结构的开发者来说不可或缺。",howToUse:`1. 将 YAML 内容粘贴到左侧
2. JSON 输出会自动生成
3. 验证 YAML 锚点（&anchor、*alias）是否在输出中正确解析
4. 复制 JSON 用于 API、代码或进一步转换
5. 提示：如果出现错误，检查是否有制表符 — YAML 缩进需要使用空格，不能使用制表符`},"yaml-to-xml":{description:"将 YAML 文档转换为 XML 格式 — 连接 YAML 配置与需要 XML 输入的系统",longDescription:"将 YAML 数据转换为结构正确的 XML 文档。YAML 映射变成嵌套 XML 元素，序列变成重复元素，输出中包含 <?xml?> 声明。当你需要将 YAML 配置数据输入到 SOAP 服务、遗留企业系统或基于 XML 的报表工具等仅支持 XML 的消费者时，此工具非常有用。",howToUse:`1. 将 YAML 粘贴到左侧
2. 生成带 <root> 包裹元素的 XML 输出
3. YAML 映射变成嵌套 XML 元素，序列变成重复标签
4. 复制 XML 用于集成或保存为 .xml 文件
5. 提示：如果需要严格的模式合规性，请使用 XML 验证器验证输出`},"yaml-to-typescript":{description:"从 YAML 数据生成 TypeScript 接口 — 为 YAML 配置文件创建带类型的模式",longDescription:"将 YAML 文档转换为 TypeScript 接口定义，首先将 YAML 解析为 JSON，然后从结构推断 TypeScript 类型。对于在 TypeScript 项目中需要为 YAML 配置文件创建类型安全包装器的情况（如应用配置模式、环境变量定义或 API 规范结构）特别有用。",howToUse:`1. 将 YAML 文档粘贴到左侧
2. TypeScript 接口会在输出中生成
3. 顶层 YAML 映射会变成"Root"接口
4. 将接口复制到项目的 .ts 文件中
5. 提示：结合 js-yaml 等 YAML 解析库在运行时加载和类型检查配置`},"xml-to-json":{description:"将 XML 转换为 JSON — 轻松现代化 SOAP API、解析 RSS 订阅和处理遗留 XML 数据",longDescription:"将 XML 转换为 JSON，同时保留属性（以 @_ 为前缀）、嵌套元素和文本内容。使用 fast-xml-parser，可正确处理复杂 XML，包括命名空间、CDATA 部分和混合内容。对于需要现代化 SOAP 服务、处理 RSS/Atom 订阅、解析 XML 配置或与输出 XML 的企业系统集成的开发者来说不可或缺。",howToUse:`1. 将 XML 文档粘贴到左侧
2. 生成 JSON 输出，XML 属性显示为 @_属性名 键
3. 嵌套元素变成嵌套 JSON 对象，重复元素变成数组
4. 复制 JSON 用于进一步处理或 API 使用
5. 提示：带命名空间前缀的 XML（如 ns:element）会在 JSON 键中保留前缀`},"xml-to-yaml":{description:"将 XML 转换为清晰的 YAML 格式 — 适合将 XML 配置迁移到现代 YAML 工具",longDescription:"解析 XML 文档并生成更易读的 YAML 输出，使数据在现代 DevOps 和配置工作流中更易处理。对于从基于 XML 的配置系统（Maven、Ant、旧版 Spring 配置）迁移到基于 YAML 的替代方案（Kubernetes、Docker Compose、GitHub Actions）的团队很有帮助。XML 属性会被保留，嵌套元素变成缩进的 YAML 映射。",howToUse:`1. 将 XML 粘贴到左侧
2. 生成适当缩进的 YAML 输出
3. XML 属性显示为带 @_ 前缀的键（与 fast-xml-parser 约定一致）
4. 复制 YAML 并在配置文件中使用
5. 提示：根据使用场景，可能需要手动删除属性键中的 @_ 前缀`},"xml-beautify":{description:"用适当的缩进格式化 XML 文档 — 立即使压缩或格式混乱的 XML 变得可读",longDescription:"将压缩、单行或缩进不当的 XML 转换为每个嵌套层级使用一致 2 空格缩进的整洁格式版本。自闭合标签和 void 元素处理正确。适用于读取 API 响应、调试 XML 载荷，或为文档和代码审查准备 XML 文档。",howToUse:`1. 将压缩或混乱的 XML 粘贴到左侧
2. 带有适当缩进的格式化 XML 会显示在输出中
3. <?xml?> 声明保留在顶部
4. 将格式化后的 XML 复制到编辑器或文档中
5. 提示：手动编辑 XML 之前先格式化，操作起来会容易得多`},"csv-to-json":{description:"将 CSV 文件转换为 JSON 数组 — 自动解析标题、推断数据类型并处理带引号字段",longDescription:'将 CSV 数据转换为结构化的 JSON 对象数组，每行变成一个对象，列标题变成键。智能推断数据类型：数字字符串变成数字，"true"/"false"变成布尔值，空字段变成 null。包含逗号或换行符的带引号字段按照 CSV 标准正确解析。适用于数据处理流水线、将电子表格数据导入 Web 应用，或为 API 准备数据。',howToUse:`1. 将 CSV 数据（带标题行）粘贴到左侧
2. JSON 输出生成为对象数组
3. 第一行被视为标题（列名）
4. 数据类型自动推断（数字、布尔值、null）
5. 提示：如果 CSV 使用分号(;)作为分隔符，请先将其替换为逗号`},"typescript-to-javascript":{description:"去除 TypeScript 类型注解生成纯净 JavaScript — 删除接口、泛型、类型转换和访问修饰符",longDescription:'通过删除类型注解、接口和类型声明、泛型类型参数、"as"类型转换、非空断言(!)、readonly 关键字和访问修饰符（public、private、protected）将 TypeScript 源代码转换为纯 JavaScript。转换器使用基于正则表达式的方式，因此复杂的泛型可能需要手动调整。适用于与非 TypeScript 项目共享代码，或从 TypeScript 源代码发布 JavaScript 包。',howToUse:`1. 将 TypeScript 代码粘贴到左侧
2. 生成去除类型的 JavaScript 输出
3. 检查输出中是否还有需要手动删除的类型语法
4. 查看输出面板下方显示的警告
5. 提示：在生产环境中，建议使用官方 TypeScript 编译器（tsc）或 esbuild 进行精确转译`},"javascript-to-typescript":{description:"为 JavaScript 添加基础 TypeScript 类型注解 — 将 require() 转换为 import 并添加类型提示",longDescription:"通过将 CommonJS require() 调用转换为 ES 模块 import，并为箭头函数添加基础类型提示，尽力将 JavaScript 转换为 TypeScript。结果是在 JavaScript 项目中采用 TypeScript 的起点，你仍需手动添加具体类型以实现完整的类型安全。此工具最适合了解需要改变什么，并快速处理样板代码。",howToUse:`1. 将 JavaScript 代码粘贴到左侧
2. 输出包含 import 语句和基础类型提示
3. 阅读关于手动类型细化的警告 — 这是起点，不是完整转换
4. 在 TypeScript 项目中打开输出并添加具体类型
5. 提示：使用 TypeScript 语言服务器（例如在 VS Code 中）查看哪些地方还需要类型注解`},"markdown-to-html":{description:"将 Markdown 转换为完整的带样式 HTML 页面 — 支持包含表格、任务列表和代码块的 GitHub 风味 Markdown",longDescription:"将 Markdown 文档转换为带有内置样式表的完整 HTML 页面。支持完整的 GitHub 风味 Markdown（GFM）规范：标题、粗体/斜体、删除线、内联代码、围栏代码块、块引用、有序/无序列表、任务列表、表格和水平线。输出是一个独立的 HTML 文件，带有简洁的无衬线字体样式，可直接在浏览器中打开或嵌入文档系统。",howToUse:`1. 将 Markdown 内容粘贴到左侧
2. 生成完整的 HTML 页面（包含 <html>、<head> 和 <body>）
3. 将输出保存为 .html 文件可在浏览器中打开
4. 如果只需要 HTML 片段，复制 <body> 中的内容即可
5. 提示：使用围栏代码块（\`\`\`语言名）在输出中显示语法高亮的代码`},"html-to-markdown":{description:"将 HTML 转换为清晰的 Markdown 格式 — 适合将 Web 内容迁移到 README 文件、Wiki 或文档平台",longDescription:"使用强大的 HTML 转 Markdown 转换器 Turndown 将 HTML 标记转换为清晰易读的 Markdown。处理标题（h1-h6）、段落、粗体、斜体、内联代码、代码块、块引用、有序/无序列表、链接、图片和表格。输出使用 ATX 风格标题（#、##）和围栏代码块，与 GitHub、GitLab、Notion、Confluence 和大多数现代文档平台兼容。",howToUse:`1. 将 HTML（完整页面或片段）粘贴到左侧
2. Markdown 输出会立即生成
3. 输出中标题用 #，列表项用 -，代码块用 \`\`\`
4. 复制粘贴到 README.md、Wiki 或文档工具中
5. 提示：先从 HTML 中删除 <script>、<style> 和 <nav> 标签，可获得更整洁的 Markdown 输出`},"html-beautify":{description:"用正确嵌套格式化 HTML 代码 — 将压缩的 HTML 转换为可读且易维护的标记",longDescription:"将压缩或缩进不当的 HTML 转换为每个嵌套层级使用一致 2 空格缩进的整洁格式版本。void 元素（br、img、input 等）被正确处理，不添加闭合标签。帮助开发者更轻松地阅读和编辑 HTML、进行代码审查，或为版本控制准备 HTML。",howToUse:`1. 将压缩或混乱的 HTML 粘贴到左侧
2. 带有适当缩进的格式化 HTML 会显示在输出中
3. void 元素（br、img、input、meta、link）没有闭合标签
4. 将输出复制到编辑器或版本控制系统
5. 提示：对于生产级 HTML 格式化，建议在本地开发环境中使用 Prettier`},"html-minify":{description:"删除空白和注释来压缩 HTML — 减少页面体积提升加载速度",longDescription:"通过删除 HTML 注释、将多个空白字符压缩为单个空格，以及删除标签之间的空白来压缩 HTML。结果是一个紧凑的 HTML 字符串，文件大小显著减小，可提升带宽敏感环境中的页面加载性能。保留所有有意义的内容、属性和内联脚本/样式。",howToUse:`1. 将 HTML 文档粘贴到左侧
2. 压缩后的 HTML 以紧凑字符串形式生成在输出中
3. 所有 HTML 注释（<!-- -->）被删除
4. 复制并用于构建流水线或分发系统
5. 提示：对于高级压缩（属性引号优化、可选标签删除），请使用 html-minifier-terser 等专用工具`},"base64-encode":{description:"将文本编码为 Base64 格式 — 用于 HTTP Basic Auth、邮件附件、数据 URI 和 API 令牌",longDescription:"立即将任意 UTF-8 文本转换为 Base64 编码。Base64 编码在许多 Web 和系统场景中不可或缺：HTTP Basic Authentication 头（用户名:密码）、在 JSON 或 XML 载荷中嵌入二进制数据、内联图片和字体的数据 URI、邮件 MIME 附件，以及对 API 密钥或密码进行编码以便传输。通过安全的 encodeURIComponent→btoa 方式正确处理 Unicode 字符。",howToUse:`1. 在左侧输入或粘贴任意文本（包括 Unicode/表情符号）
2. Base64 编码字符串会立即显示在右侧
3. 复制输出用于 Authorization 头、数据 URI 或载荷
4. 提示：对于 HTTP Basic Auth，编码"用户名:密码"并在头部值前加上"Basic "`},"base64-decode":{description:"将 Base64 字符串解码回纯文本 — 反向解码来自令牌、载荷或 API 响应的 Base64 编码",longDescription:"将 Base64 编码字符串转换回原始 UTF-8 文本。支持标准 Base64（使用 + 和 /）以及 URL 安全的 Base64（使用 - 和 _）。使用安全的 atob→decodeURIComponent 方式正确处理 Unicode 内容。适用于解码 JWT 载荷、检查 HTTP Basic Auth 凭据、读取 Base64 编码的 API 响应，或调试传输中的编码数据。",howToUse:`1. 将 Base64 字符串粘贴到左侧
2. 解码后的文本显示在输出中
3. 字符串中的空白会自动删除
4. 也支持 URL 安全的 Base64（- 和 _ 字符）
5. 提示：JWT 令牌有 3 个由点分隔的 Base64 部分 — 分别解码每个部分，或使用 JWT 解码器工具`},"url-encode":{description:"对 URL 和查询字符串值进行百分比编码 — 在 URL 中安全传递特殊字符、空格和非 ASCII 字符",longDescription:"使用百分比编码（URL 编码）对字符串进行编码，以便安全地包含在 URL 查询参数、路径段或表单提交中。空格变为 %20，& 变为 %26，= 变为 %3D，非 ASCII 字符（包括中文、泰语、表情符号）以百分比格式编码为 UTF-8 字节序列。这是在不破坏 URL 结构的情况下在 URL 中传递用户生成数据或特殊字符的正确方式。",howToUse:`1. 将要编码的 URL 或字符串粘贴到左侧
2. 百分比编码输出立即显示
3. 将编码后的输出用于查询参数、路径段或表单数据
4. 提示：只编码查询参数的值部分，不要编码整个 URL — 编码 & 和 = 分隔符会破坏 URL 结构`},"url-decode":{description:"将百分比编码的 URL 解码回可读文本 — 反向转换 %20、%26 及其他转义序列",longDescription:"将百分比编码的 URL 字符串转换回原始可读形式。转换 %20→空格、%26→&、%3D→= 以及中文、泰语等非 ASCII 字符的多字节序列。对于调试 API 调用、读取浏览器地址栏中的编码 URL、理解重定向参数以及检查包含编码 URL 的日志文件非常有价值。",howToUse:`1. 将百分比编码的 URL 或字符串粘贴到左侧
2. 解码后的可读文本显示在右侧面板
3. 复制解码后的字符串用于调试或显示
5. 提示：如果 URL 看起来异常（例如显示 %2F 而不是 /），粘贴到这里读取解码后的路径`},"jwt-decode":{description:"解码并检查 JWT 令牌 — 查看标头、载荷声明、签发时间、过期时间和是否已过期",longDescription:"解码 JSON Web Token（JWT）并显示其三个组成部分：标头（算法和令牌类型）、载荷（sub、name、iat、exp 等声明）和原始签名。工具还为 iat（签发时间）和 exp（过期时间）字段计算可读的日期，并标记令牌是否已过期。注意：此工具不验证签名，仅做解码。请不要依赖客户端 JWT 解码来做安全决策。",howToUse:`1. 将 JWT（完整的 eyJ... 字符串）粘贴到左侧
2. 解码后的标头、载荷和签名以 JSON 格式显示
3. _meta 部分显示算法、issuedAt 日期、expiresAt 日期和 isExpired 标志
4. 在调试时用于检查用户 ID、角色或过期时间等声明
5. 警告：此工具不验证签名 — 解码后的 JWT 不是真实性证明`},"html-entities-encode":{description:"将 HTML 特殊字符编码为实体 — 在网页上安全显示用户输入、代码片段和原始 HTML",longDescription:`将 HTML 中具有特殊含义的字符（<、>、&、"、'）转换为对应的 HTML 实体（&lt;、&gt;、&amp;、&quot;、&#039;）。这是在网页上显示用户生成内容、代码示例或原始 HTML 标签而不让浏览器将其解释为标记的正确方式。在服务器端渲染用户输入时，对于防止跨站脚本（XSS）漏洞至关重要。`,howToUse:`1. 将包含特殊字符的文本粘贴到左侧
2. HTML 实体编码后的输出显示在右侧
3. 将输出安全地嵌入到 HTML 模板中
4. 提示：在将用户生成内容渲染到 HTML 之前，始终进行编码以防止 XSS 攻击`},"html-entities-decode":{description:"将 HTML 实体解码回普通字符 — 将 &lt;、&gt;、&amp; 等转换为可读文本",longDescription:"将 HTML 实体（&lt;、&gt;、&amp;、&quot;、&#039;、&apos;、&nbsp;）转换回原始字符。适用于读取存储在数据库、API 或 CMS 系统中的 HTML 编码内容。也有助于解码有时出现在抓取或导出内容中的双重编码 HTML 实体。",howToUse:`1. 将 HTML 实体编码的文本粘贴到左侧
2. 解码后的纯文本显示在右侧
3. 常见实体如 &amp;、&lt;、&gt;、&quot; 都会被解码
4. 提示：如果看到 &amp;amp;（双重编码），将输出再次粘贴到此工具以解码第二层`},"decimal-to-binary":{description:"将十进制数转换为二进制（base-2），同时显示八进制和十六进制表示",longDescription:"输入十进制整数，立即查看其二进制（base-2）表示以及八进制（base-8）和十六进制（base-16）等效值。这是计算机科学学生、嵌入式系统开发者，以及处理位操作、权限（chmod）、内存地址或低级编程概念的人的基础工具。",howToUse:`1. 在左侧输入十进制整数（例如 255）
2. 带 0b 前缀的二进制输出显示出来
3. 八进制（0o）和十六进制（0x）作为额外参考显示
4. 提示：十进制 255 = 0b11111111 = 0xFF，这是 8 位无符号字节的最大值`},"binary-to-decimal":{description:"将二进制数转换为十进制，包含八进制和十六进制输出",longDescription:"输入二进制数（仅使用 0 和 1），将其转换为十进制等效值。工具还显示八进制和十六进制表示。0b 前缀是可选的，会自动去除。适用于理解二进制算术、解码二进制数据、处理位运算或学习计算机架构。",howToUse:`1. 在输入框中输入或粘贴二进制数（例如 11111111 或 0b11111111）
2. 十进制结果显示在输出顶部
3. 八进制和十六进制等效值作为额外参考显示
4. 提示：超过 32 位的二进制数可能超出 JavaScript 的安全整数范围`},"decimal-to-hex":{description:"将十进制数转换为十六进制（base-16） — 常用于网页颜色、内存地址和低级编程",longDescription:"输入任意十进制整数，获得带 0x 前缀的十六进制表示。十六进制在 Web 开发（CSS 颜色代码）、系统编程（内存地址、寄存器值）、密码学（哈希输出）和调试中广泛使用。输出还包含二进制表示以供参考。",howToUse:`1. 在左侧输入十进制数（例如 255）
2. 带 0x 前缀的十六进制输出显示（例如 0xFF）
3. 二进制表示在下方作为参考显示
4. 提示：CSS 十六进制颜色使用 6 位十六进制数 — 例如 #1677FF。完整颜色转换请使用颜色转换工具`},"hex-to-decimal":{description:"将十六进制数转换为十进制 — 支持 0x 前缀和大小写十六进制数字",longDescription:"输入十六进制值（带或不带 0x 前缀）并将其转换为十进制等效值。工具还显示二进制表示。适用于读取内存转储值、颜色代码、网络协议字段，或任何需要十进制等效值的十六进制编码数据。",howToUse:`1. 在输入框中输入十六进制数（例如 FF 或 0xFF 或 ff）
2. 十进制结果显示在输出中
3. 二进制表示作为参考包含在内
4. 提示：对于 CSS 十六进制颜色，使用 HEX 转 RGB/HSL 转换器获取完整颜色详情`},"timestamp-to-date":{description:"将 Unix 时间戳（秒或毫秒）转换为任意时区的可读日期 — 显示 ISO 8601、UTC 和本地时间",longDescription:"输入 Unix 时间戳，立即以多种格式查看对应的日期和时间：ISO 8601、可读字符串、仅日期、仅时间和 UTC 偏移。转换器自动检测时间戳是秒还是毫秒（基于数量级）。你可以从选项面板选择任意时区查看特定地区的时间。对于调试 API 日志、检查 JWT 过期时间和处理时间序列数据至关重要。",howToUse:`1. 将 Unix 时间戳粘贴到左侧（秒例如 1716239022，毫秒例如 1716239022000）
2. 工具自动检测秒或毫秒
3. 从选项面板的时区下拉菜单选择时区
4. 输出显示所选时区和 UTC 的日期时间
5. 提示：JWT 的 exp 和 iat 字段是秒单位的 Unix 时间戳 — 粘贴到这里查看日期`},"date-to-timestamp":{description:"将可读日期字符串转换为 Unix 时间戳 — 支持 ISO 8601 和多种日期格式",longDescription:"输入 ISO 8601 格式（2024-01-15T10:30:00Z）或多种其他格式（2024-01-15、January 15 2024）的日期字符串，获得以秒和毫秒表示的 Unix 时间戳。输出还包含所选时区和 UTC 中表示的日期。适用于构造 API 请求参数、设置过期时间，或处理数据库和搜索查询中基于日期的过滤器。",howToUse:`1. 在输入框中输入或粘贴日期字符串（例如 2024-01-15T10:30:00Z）
2. 以秒和毫秒表示的 Unix 时间戳显示在输出中
3. 从选项中选择时区以查看本地时间表示
4. 提示：为获得最佳结果，使用带时区后缀的 ISO 8601 格式（UTC 用 Z，北京时间用 +08:00）`},"hex-to-rgb":{description:"将 HEX 颜色代码转换为 RGB、RGBA、HSL、HSLA 和 CSS 自定义属性 — 一键获取所有格式",longDescription:"输入 HEX 颜色代码（3 位简写或 6 位完整格式），立即查看所有等效颜色格式：RGB、RGBA、HSL、HSLA、各通道原始值，以及即用型 CSS 自定义属性声明（--color-rgb、--color-hsl）。对于使用设计令牌、Tailwind 配置、CSS 变量或跨格式颜色系统的前端开发者和 UI 设计师来说不可或缺。",howToUse:`1. 在左侧输入或粘贴 HEX 颜色代码（例如 #1677FF 或 #F53）
2. 所有颜色格式输出以 JSON 格式显示在右侧面板
3. 复制所需的特定格式（rgb()、hsl() 或 CSS 变量）
4. css_variables 字段提供即用型 :root 变量声明
5. 提示：3 位 HEX 代码（#F53）在转换前会自动扩展为 6 位（#FF5533）`},"rgb-to-hex":{description:"将 RGB/RGBA 颜色转换为 HEX 代码、HSL、HSLA 和 CSS 变量 — 单个 RGB 输入获取所有颜色格式",longDescription:"输入 RGB 或 RGBA 颜色值，获取所有等效表示：HEX 代码、HSL、HSLA、各通道原始值和 CSS 自定义属性声明。接受 rgb(r, g, b) 函数格式和逗号分隔的值（255, 87, 51）两种形式。对于需要在不同设计工具、代码库或样式系统之间转换颜色的设计师和开发者必不可少。",howToUse:`1. 将 RGB 颜色值粘贴到左侧（例如 rgb(22, 119, 255) 或 22, 119, 255）
2. 所有等效颜色格式以 JSON 形式显示在输出中
3. 复制所需的 HEX、HSL 或 CSS 变量表示
4. 提示：rgba() 的 alpha 值会被注明，但对于 HEX 和 HSL 输出，颜色被视为完全不透明`},"hsl-to-rgb":{description:"将 HSL 颜色转换为 HEX 和 RGB 格式 — 一个输出包含 CSS 变量和完整颜色表示",longDescription:"输入 HSL 或 HSLA 颜色值，获取等效的 HEX 代码、RGB、RGBA 和 CSS 自定义属性声明。HSL（色相、饱和度、亮度）在 CSS 和设计工具中很受欢迎，因为它比 RGB 更直观——调整饱和度或亮度更加直接。适用于将设计工具导出（Figma、Sketch）转换为代码中使用的 HEX 或 RGB。",howToUse:`1. 将 HSL 颜色粘贴到左侧（例如 hsl(213, 100%, 54%) 或 213, 100, 54）
2. HEX、RGB、RGBA、HSLA 和 CSS 变量等效值显示在输出中
3. 复制 CSS 文件或设计系统所需的格式
4. 提示：色相为 0-360（颜色轮上的角度），饱和度和亮度为 0-100（百分比）`},"css-minify":{description:"删除注释、空白和多余分号来压缩 CSS — 减小样式表体积提升页面加载速度",longDescription:"通过删除所有注释、压缩空白、删除选择器和声明周围的空格，以及删除闭合括号前的最后一个分号来压缩 CSS。结果是功能上与原始 CSS 完全相同但体积显著更小的紧凑 CSS。适用于生产环境部署、在 HTML 页面中嵌入样式或降低 CDN 传输成本。",howToUse:`1. 将 CSS 代码粘贴到左侧
2. 压缩后的 CSS 以紧凑的单行输出生成
3. 所有 /* 注释 */ 都被删除
4. 将压缩后的 CSS 复制用于生产构建或 <style> 标签
5. 提示：对于大型项目，将 CSS 构建工具（PostCSS、esbuild）集成到 CI 流水线中`},"css-beautify":{description:"格式化并美化压缩或混乱的 CSS — 添加一致的缩进和换行创建可读且易维护的样式表",longDescription:"将压缩、自动生成或格式混乱的 CSS 转换为整洁格式的版本，每行一个声明，括号放置合适，间距一致。从浏览器 DevTools 复制样式后、压缩的第三方样式表，或设计工具生成的 CSS，使用此工具使代码更易读、调试和在版本控制中维护。",howToUse:`1. 将压缩或混乱的 CSS 粘贴到左侧
2. 每个属性占一行的格式化 CSS 显示在输出中
3. 选择器和括号在各自的行上
4. 将输出复制到样式表或编辑器中
5. 提示：用于检查和理解 Tailwind 或 CSS-in-JS 库自动生成的 CSS`},"css-to-scss":{description:"将 CSS 自定义属性（CSS 变量）转换为 SCSS 变量 — 从原生 CSS 迁移到基于 SCSS 的设计系统",longDescription:"将 CSS :root 变量声明（--variable-name: value）转换为 SCSS 变量语法（$variable_name: value），并将整个样式表中的 var(--variable-name) 用法替换为对应的 $variable_name 引用。CSS 变量名中的连字符会转换为 SCSS 的下划线。这为将 CSS 自定义属性系统迁移到 SCSS 提供了良好的起点，但嵌套和混入仍需手动添加。",howToUse:`1. 将带有 :root 变量的 CSS 粘贴到左侧
2. 输出中 :root { --var: value } 被替换为 $var: value 声明
3. var(--var) 的用法在输出中变为 $var 引用
4. 将 SCSS 复制到 .scss 文件并手动添加嵌套
5. 提示：CSS 变量名中的连字符（--primary-color）在 SCSS 中变为下划线（$primary_color）`},"css-to-tailwind":{description:"将 CSS 声明转换为 Tailwind CSS 工具类 — 快速找到样式对应的正确 Tailwind 类",longDescription:"输入 CSS 属性声明，获取等效的 Tailwind CSS 工具类名称。支持常见的布局属性（display、position、overflow）、flexbox（flex-direction、align-items、justify-content）、尺寸（width、height）和排版（text-align、font-weight）。没有直接对应 Tailwind 类的属性会以注释形式列出，以便手动处理。适合从 CSS 迁移到 Tailwind 的开发者，或学习哪个 Tailwind 类对应哪个 CSS 属性。",howToUse:`1. 将 CSS 声明（每行一个，不带选择器）粘贴到左侧
2. 匹配的 Tailwind 类输出为 class="..." 属性字符串
3. 不匹配的属性以注释形式显示在下方
4. 复制类列表并添加到 HTML 元素中
5. 提示：对于自定义像素值（例如 padding: 12px），请手动使用 Tailwind 的任意值语法（p-[12px]）`}},T={"json-to-typescript":{description:"JSONオブジェクトを完全に型付きのTypeScriptインターフェースに変換 — ネストオブジェクト、配列、オプションフィールド、ユニオン型に対応",longDescription:"JSONデータを貼り付けるだけで、本番環境で使えるTypeScriptインターフェースを瞬時に生成します。文字列・数値・真偽値・配列・深くネストされたオブジェクトなど、あらゆる型を自動推論します。null値はオプションフィールド（?付き）として扱われ、配列の要素型は正確に解析されユニオン型として表現されます。ネストされたオブジェクトはコードの整理のために別名のインターフェースとして生成されます。REST APIクライアントの構築、サードパーティAPIの利用、JavaScriptからTypeScriptへの移行に最適です。",howToUse:`1. 左側の入力欄にJSONデータを貼り付けます
2. 右側のパネルにTypeScriptインターフェースが自動生成されます
3. トップレベルのオブジェクトは「Root」インターフェースになり、ネストされたオブジェクトは子インターフェース（例: RootAddress）になります
4. 出力をコピーしてTypeScriptプロジェクトに直接貼り付けます
5. ヒント: オブジェクトの配列（[{...}]）は各要素の形に基づいた型付きインターフェースを自動生成します`},"json-to-javascript":{description:"JSONをJavaScriptのconst変数宣言に変換 — .jsまたはNode.jsファイルにそのまま貼り付けられます",longDescription:"JSONデータを標準的なJavaScriptのconst宣言（2スペースインデント）に変換します。結果はNode.jsスクリプト、フロントエンドのJavaScriptファイル、または設定モジュールにそのまま使用できます。外部のJSONファイルをインポートせずに、静的なAPIレスポンスデータ、モックデータ、または設定オブジェクトをJavaScriptコードベースに直接埋め込む場合に特に便利です。",howToUse:`1. 左側にJSONオブジェクトまたは配列を貼り付けます
2. 出力は const data = { ... }; 形式の宣言になります
3. コピーして.jsまたは.mjsファイルに貼り付けます
4. 「data」を任意の変数名に変更してください
5. ヒント: JSONインポートを避けてデータをインラインに保ちたい場合に使用します`},"json-to-yaml":{description:"JSONをYAML形式に変換 — Kubernetesマニフェスト、Docker Compose、GitHub Actionsなどの設定ファイルに最適",longDescription:"JSONデータを読みやすいクリーンなYAMLに変換します。文字列・数値・真偽値・配列・ネストオブジェクトなど、すべてのデータ型を正確に保持します。出力は2スペースインデントを使用し、標準的なYAML規則に従って不要なクォートを省略します。JSON APIレスポンスやJSON設定生成ツールをHelm、Ansible、CI/CDパイプラインなどのYAMLベースのインフラツールと連携させる必要があるDevOpsエンジニアや開発者にとって非常に有用です。",howToUse:`1. 左側の入力欄にJSONを貼り付けます
2. 右パネルにYAML出力が即座に表示されます
3. ネストされたオブジェクトが正しくインデントされているか確認します（1レベルあたり2スペース）
4. YAMLをコピーして設定ファイルやマニフェストに直接使用します
5. ヒント: JSON配列はYAMLリスト（-で始まる行）になります`},"json-to-xml":{description:"JSONを整形されたXMLに変換 — SOAP API、RSSフィード、レガシーエンタープライズシステムとの連携に",longDescription:"JSONオブジェクトと配列を、<?xml?>宣言付きの正しく構造化されたXMLドキュメントに変換します。ネストされたJSONオブジェクトはネストされたXML要素に、JSON配列は同じタグ名を持つ繰り返しの兄弟要素に展開されます。SOAP Webサービス、エンタープライズミドルウェア、EDIシステム、古いCMSプラットフォームなどのXML消費システムとのブリッジとして機能します。",howToUse:`1. 左側にJSONを貼り付けます
2. XMLドキュメントは<root>要素でデータをラップして生成されます
3. JSONキーはXMLタグ名になり、ネストオブジェクトは子要素になります
4. 配列は同じタグ名の繰り返し要素になります
5. ヒント: 必要に応じて<root>タグを任意のルート要素名に変更してください`},"json-to-csv":{description:"JSON配列をCSV形式に変換 — Excel、Googleスプレッドシート、その他の表計算ツールに直接エクスポート",longDescription:"JSON配列をCSVの行に変換し、オブジェクトのキーから列ヘッダーを自動抽出します。配列の各要素が1行になり、カンマや改行を含むフィールドはRFC 4180 CSV標準に従って正しくクォートされます。データエクスポートパイプライン、APIレスポンスからのレポート生成、データベースやBIツールへのインポート用データセットの準備に最適です。",howToUse:`1. 左側にJSON配列（オブジェクトのリスト）を貼り付けます
2. 列ヘッダーはオブジェクトのキーから自動抽出されます
3. 配列の各オブジェクトが1行のCSVになります
4. 出力をコピーしてExcel、Googleスプレッドシートに貼り付けるか、.csvファイルとして保存します
5. ヒント: 一貫した列を持つためにすべてのオブジェクトが同じキーを持つことが望ましいです`},"json-to-sql":{description:"JSON配列からSQL CREATE TABLEとINSERT文を生成 — 実データからデータベーススキーマを即座に構築",longDescription:"JSON配列を実行可能なSQLスクリプトに変換します。データからカラム型（TEXT、NUMERIC、BOOLEAN）を推論してCREATE TABLE文を自動生成し、JSONオブジェクトごとに1つのINSERT文を作成します。NULL値と欠損キーを適切に処理します。サンプルAPIデータがあり、手書きSQLなしで即座にリレーショナルデータベーステーブルをセットアップしたい場合に非常に時間の節約になります。",howToUse:`1. 左側にJSONオブジェクトの配列を貼り付けます
2. データ値からカラム型が推論されます
3. 上部にCREATE TABLEブロックが生成され、その後にINSERT文が続きます
4. 実行前に「table_name」を実際のテーブル名に変更します
5. ヒント: まずCREATE TABLEを実行し、次にINSERT文を実行します`},"json-beautify":{description:"minify済みまたはコンパクトなJSONを整形・インデント — JSON構文の検証も行います",longDescription:"minify済みやコンパクトなJSON文字列を、2スペースインデントのきれいで読みやすいバージョンに即座に変換します。JSON構文の検証も行い、入力に問題がある場合は明確なエラーメッセージが表示されます。APIレスポンスの検査、JSONペイロードのデバッグ、設定ファイルのレビューのために開発者が日常的に使用する必須ツールです。",howToUse:`1. 左側にminify済みまたは乱れたJSONを貼り付けます
2. フォーマット済みのJSONが右パネルに即座に表示されます
3. 構文エラーがあればエラーメッセージが表示されます
4. 整形されたJSONをエディタ、ドキュメント、ログ用にコピーします
5. ヒント: APIリクエストボディとして送信する前にJSONを検証するのに使います`},"json-minify":{description:"JSONからすべての空白と改行を削除して圧縮 — APIレスポンスやストレージのペイロードサイズを削減",longDescription:"JSONから不要な空白・改行・インデントをすべて取り除き、最もコンパクトな表現を生成します。minify済みJSONは、帯域幅が重要なAPIレスポンス、localStorageの値、環境変数ペイロード、またはJSONサイズを最小化する必要がある場面に最適です。出力はデータが同一で、フォーマットのみが除去されます。",howToUse:`1. 左側に整形済み（プリティプリント）JSONを貼り付けます
2. minify済みの1行JSONが即座に表示されます
3. APIコール、ヘッダー、または圧縮ストレージにコピーして使用します
4. ヒント: URLやヘッダー値にJSONを埋め込む必要がある場合は、Base64エンコードと組み合わせます`},"json-to-js-object":{description:"JSONをキーに引用符なしのJavaScriptオブジェクトリテラルに変換 — JSソースファイルへの埋め込みに自然な構文",longDescription:"JSONではすべてのキーが引用符付き文字列である必要がありますが、ネイティブなJavaScriptオブジェクトリテラルでは有効な識別子のキーに引用符を付ける必要がありません。このコンバーターはJSONをJS オブジェクト構文に変換し、有効なキーから不要な引用符を除去しながら、文字列値には適切に引用符を保持します。設定ファイル、モックデータ、またはJSONではなくJSオブジェクト構文が必要な場面に便利です。",howToUse:`1. 左側にJSONを貼り付けます
2. 有効な識別子のキーには引用符のない const data = { ... }; が出力されます
3. 特殊文字やスペースを含むキーは引用符が保持されます
4. .jsファイルに直接コピーして貼り付けます
5. ヒント: これは有効なJavaScriptですが有効なJSONではありません。厳密なJSONが必要な場所では使用しないでください`},"yaml-to-json":{description:"YAML設定ファイルをJSONに変換 — Docker Compose、Kubernetes、GitHub ActionsなどのYAMLベースの設定を即座にパース",longDescription:"任意の有効なYAMLドキュメントを整形されたJSONオブジェクトに変換します。マルチライン文字列、アンカーとエイリアス、複雑なマッピング、ネストされたシーケンスを含むフルYAML仕様をサポートします。YAML設定ファイルをプログラムで処理する必要がある開発者、YAML データをJSON専用APIに渡す場合、または複雑なYAMLドキュメントの解析済み構造を検査する場合に不可欠です。",howToUse:`1. 左側にYAMLコンテンツを貼り付けます
2. JSON出力が自動生成されます
3. YAMLアンカー（&anchor、*alias）が出力で正しく解決されているか確認します
4. APIや後続の変換処理に使用するためにJSONをコピーします
5. ヒント: エラーが発生した場合、タブ文字を確認してください — YAMLはインデントにタブではなくスペースを必要とします`},"yaml-to-xml":{description:"YAMLドキュメントをXML形式に変換 — YAML設定とXML入力を必要とするシステムをつなぐ",longDescription:"YAMLデータを適切に構造化されたXMLドキュメントに変換します。YAMLマッピングはネストされたXML要素になり、シーケンスは繰り返しの要素になります。出力には<?xml?>宣言が含まれます。SOAP サービス、レガシーエンタープライズシステム、XMLベースのレポートツールなどのXML専用コンシューマーにYAML設定データを渡す必要がある場合に便利です。",howToUse:`1. 左側にYAMLを貼り付けます
2. <root>ラッパー要素付きのXML出力が生成されます
3. YAMLマッピングはネストされたXML要素になり、シーケンスは繰り返しタグになります
4. XMLをコピーしてインテグレーションで使用するか.xmlファイルとして保存します
5. ヒント: 厳格なスキーマ準拠が必要な場合は、XMLバリデーターでXML出力を検証します`},"yaml-to-typescript":{description:"YAMLデータからTypeScriptインターフェースを生成 — YAML設定ファイルから型付きスキーマを作成",longDescription:"YAMLドキュメントをTypeScriptインターフェース定義に変換します。まずYAMLをJSONとして解析し、次に構造からTypeScript型を推論します。TypeScriptプロジェクトでYAML設定ファイルの型安全なラッパーを作成する場合（アプリ設定スキーマ、環境変数定義、APIスペック構造など）に特に便利です。",howToUse:`1. 左側にYAMLドキュメントを貼り付けます
2. TypeScriptインターフェースが出力に生成されます
3. トップレベルのYAMLマッピングは「Root」インターフェースになります
4. プロジェクトの.tsファイルにインターフェースをコピーします
5. ヒント: ランタイムで設定を読み込んで型チェックするには、js-yamlのようなYAMLパーシングライブラリと組み合わせてください`},"xml-to-json":{description:"XMLをJSONに変換 — SOAP APIのモダン化、RSSフィードのパース、レガシーXMLデータの処理が簡単に",longDescription:"XMLを属性（@_プレフィックス付き）、ネストされた要素、テキストコンテンツを保持しながらJSONに変換します。名前空間、CDATAセクション、混在コンテンツを正しく処理するfast-xml-parserを使用しています。SOAPベースのサービスのモダン化、RSS/Atomフィードの処理、XML設定のパース、またはXMLを出力するエンタープライズシステムとの統合を行う開発者に不可欠です。",howToUse:`1. 左側にXMLドキュメントを貼り付けます
2. XML属性は @_属性名 キーとして示されたJSON出力が生成されます
3. ネストされた要素はネストされたJSONオブジェクトになり、繰り返し要素は配列になります
4. さらなる処理やAPIでの使用のためにJSONをコピーします
5. ヒント: 名前空間プレフィックス（例: ns:element）はJSONキーに保持されます`},"xml-to-yaml":{description:"XMLをクリーンなYAML形式に変換 — XMLベースの設定を現代のYAMLツールに移行するのに最適",longDescription:"XMLドキュメントを解析し、より人間が読みやすいYAML出力を生成します。XMLベースの設定システム（Maven、Ant、旧Springの設定）からYAMLベースの代替（Kubernetes、Docker Compose、GitHub Actions）への移行を検討しているチームに役立ちます。XML属性は保持され、ネストされた要素は適切にインデントされたYAMLマッピングになります。",howToUse:`1. 左側にXMLを貼り付けます
2. 適切なインデント付きのYAML出力が生成されます
3. XML属性は @_ プレフィックス付きのキーとして表示されます
4. YAMLをコピーして設定ファイルに適用します
5. ヒント: 用途によってはAttribute keyの @_ プレフィックスを手動で削除する必要があるかもしれません`},"xml-beautify":{description:"XMLを適切なインデントで整形 — minify済みまたは乱れたXMLを即座に読みやすくします",longDescription:"minify済み、1行形式、または不適切にインデントされたXMLを、ネストレベルごとに一貫した2スペースインデントのきれいに整形されたバージョンに変換します。自己閉じタグとvoid要素を正しく処理します。APIレスポンスの読み取り、XMLペイロードのデバッグ、またはドキュメントやコードレビュー用のXMLドキュメント準備に便利です。",howToUse:`1. 左側にminify済みまたは乱れたXMLを貼り付けます
2. 適切なインデント付きの整形済みXMLが出力に表示されます
3. <?xml?>宣言は先頭に保持されます
4. 整形済みXMLをエディタやドキュメントにコピーします
5. ヒント: 手動でXMLを編集する前に整形すると、はるかに作業しやすくなります`},"csv-to-json":{description:"CSVファイルをJSON配列に変換 — ヘッダーの自動パース、データ型推論、クォートフィールドの処理に対応",longDescription:"CSVデータを構造化されたJSONオブジェクトの配列に変換します。各行がオブジェクトになり、列ヘッダーがキーになります。データ型を自動推論し、数値文字列はnumber、「true」/「false」はboolean、空フィールドはnullになります。カンマや改行を含むクォートフィールドもCSV標準に従って正しく解析されます。データ処理パイプライン、スプレッドシートデータのWebアプリへのインポート、APIへのデータ準備に不可欠です。",howToUse:`1. 左側にCSVデータ（ヘッダー行付き）を貼り付けます
2. JSON出力はオブジェクトの配列として生成されます
3. 最初の行がヘッダー（列名）として扱われます
4. データ型は自動推論されます（数値、真偽値、null）
5. ヒント: CSVがセミコロン(;)区切りの場合、先にカンマに置換してください`},"typescript-to-javascript":{description:"TypeScript型アノテーションを取り除きクリーンなJavaScriptを生成 — インターフェース、ジェネリクス、型キャスト、アクセス修飾子を削除",longDescription:"TypeScriptソースコードを型アノテーション、インターフェースと型宣言、ジェネリック型パラメーター、「as」型キャスト、非null表明(!)、readonlyキーワード、アクセス修飾子（public、private、protected）を除去してプレーンなJavaScriptに変換します。正規表現ベースの変換のため、複雑なジェネリクスは手動調整が必要な場合があります。TypeScript以外のプロジェクトとのコード共有、またはTypeScriptソースからJavaScriptパッケージを公開する場合に便利です。",howToUse:`1. 左側にTypeScriptコードを貼り付けます
2. 型が除去されたJavaScript出力が生成されます
3. 手動での削除が必要な残存型構文がないか出力を確認します
4. 出力パネルの下に表示される警告を確認します
5. ヒント: 本番環境では、正確なトランスパイルのために公式のTypeScriptコンパイラ（tsc）またはesbuildを使用することをお勧めします`},"javascript-to-typescript":{description:"JavaScriptに基本的なTypeScript型アノテーションを追加 — require()をimportに変換し、型ヒントを追加",longDescription:"CommonJSのrequire()をESモジュールのimportに変換し、アロー関数に基本的な型ヒントを追加することで、JavaScriptをTypeScriptにベストエフォートで変換します。結果はJavaScriptプロジェクトへのTypeScript導入の出発点であり、完全な型安全性のためには引き続き具体的な型を手動で追加する必要があります。何を変更する必要があるかを理解し、定型的な部分を素早く処理するのに最適です。",howToUse:`1. 左側にJavaScriptコードを貼り付けます
2. 出力にはimport文と基本的な型ヒントが含まれます
3. 型の手動調整に関する警告を読んでください — これは出発点であり完全な変換ではありません
4. TypeScriptプロジェクトで出力を開き、具体的な型を追加します
5. ヒント: VS CodeのTypeScript言語サーバーを使用して、まだ型注釈が必要な箇所を確認します`},"markdown-to-html":{description:"Markdownを完全なスタイル付きHTMLページに変換 — テーブル、タスクリスト、コードブロックを含むGitHub Flavored Markdownに対応",longDescription:"Markdownドキュメントを組み込みスタイルシート付きの完全なHTMLページに変換します。見出し、太字/斜体、打ち消し線、インラインコード、フェンスコードブロック、引用、順序付き/順序なしリスト、タスクリスト、テーブル、水平線を含むGitHub Flavored Markdown（GFM）の全仕様をサポートします。ブラウザで直接開くことができる自己完結したHTMLファイルが出力されます。",howToUse:`1. 左側にMarkdownコンテンツを貼り付けます
2. <html>、<head>、<body>を含む完全なHTMLページが生成されます
3. 出力を.htmlファイルとして保存してブラウザで開けます
4. HTMLフラグメントのみが必要な場合は<body>内のコンテンツだけをコピーします
5. ヒント: コードブロックにはバッククォート（\`\`\`language）を使用して出力を美しく表示します`},"html-to-markdown":{description:"HTMLをクリーンなMarkdown形式に変換 — READMEファイル、Wiki、ドキュメントプラットフォームへのWebコンテンツ移行に最適",longDescription:"Turndownを使用してHTMLマークアップを読みやすいMarkdownに変換します。見出し（h1〜h6）、段落、太字、斜体、インラインコード、コードブロック、引用、順序付き/順序なしリスト、リンク、画像、テーブルに対応しています。ATXスタイルの見出し（#、##）とフェンスコードブロックを使用し、GitHub、GitLab、Notion、Confluenceなどの多くの現代的なドキュメントプラットフォームと互換性があります。",howToUse:`1. 左側にHTML（全ページまたはフラグメント）を貼り付けます
2. Markdown出力が即座に生成されます
3. 出力では見出しに#、リスト項目に-、コードブロックに\`\`\`が使用されます
4. README.md、Wiki、ドキュメントツールにコピーして貼り付けます
5. ヒント: よりクリーンなMarkdown出力のために、先に<script>、<style>、<nav>タグを削除してください`},"html-beautify":{description:"適切なネスト付きでHTMLコードを整形 — minify済みHTMLを読みやすく保守しやすいマークアップに変換",longDescription:"minify済みまたは不適切にインデントされたHTMLを、ネストレベルごとに一貫した2スペースインデントのきれいに整形されたバージョンに変換します。void要素（br、img、inputなど）は閉じタグなしで正しく処理されます。開発者がHTMLをより読みやすく編集し、コードレビューを実施し、バージョン管理のためにHTMLを準備するのに役立ちます。",howToUse:`1. 左側にminify済みまたは乱れたHTMLを貼り付けます
2. 適切なインデント付きの整形済みHTMLが出力に表示されます
3. void要素（br、img、input、meta、link）には閉じタグがありません
4. エディタやバージョン管理システムに出力をコピーします
5. ヒント: 本番品質のHTMLフォーマットには、ローカル開発環境でPrettierを使用することを検討してください`},"html-minify":{description:"HTMLから空白とコメントを削除して圧縮 — ページサイズを削減してロード時間を改善",longDescription:"HTMLコメントを削除し、複数の空白を1つのスペースに圧縮し、タグ間の空白を除去してHTMLを圧縮します。すべての意味のあるコンテンツ、属性、インラインスクリプト/スタイルを保持しながら、ファイルサイズを大幅に削減します。帯域幅に敏感な環境でのページロードパフォーマンス改善に効果的です。",howToUse:`1. 左側にHTMLドキュメントを貼り付けます
2. minify済みHTMLがコンパクトな文字列として出力に生成されます
3. すべてのHTMLコメント(<!-- -->)が削除されます
4. ビルドパイプラインや配信システムにコピーして使用します
5. ヒント: 高度なminification（属性クォート、オプションタグ削除）にはhtml-minifier-terserなどの専用ツールを使用してください`},"base64-encode":{description:"テキストをBase64形式にエンコード — HTTP Basic Auth、メール添付、データURI、APIトークンに使用",longDescription:"あらゆるUTF-8テキストを即座にBase64エンコードします。Base64エンコードはHTTP Basic Authentication（ユーザー名:パスワード）、JSONやXMLペイロードへのバイナリデータ埋め込み、インライン画像やフォントのデータURI、メールMIME添付ファイル、送信のためのAPIキーやシークレットのエンコードなど、多くのWebおよびシステムコンテキストで不可欠です。UnicodeはencodeURIComponent→btoaアプローチで正しく処理されます。",howToUse:`1. 左側にテキスト（Unicode/絵文字を含む）を入力または貼り付けます
2. Base64エンコードされた文字列が右側に即座に表示されます
3. 出力をコピーしてAuthorizationヘッダー、データURI、またはペイロードで使用します
4. ヒント: HTTP Basic Authでは「username:password」をエンコードし、ヘッダー値の前に「Basic 」を付加します`},"base64-decode":{description:"Base64文字列をプレーンテキストに復号 — トークン、ペイロード、APIレスポンスのBase64エンコードを逆変換",longDescription:"Base64エンコードされた文字列を元のUTF-8テキストに変換します。標準的なBase64（+と/を使用）とURLセーフなBase64（-と_を使用）の両方をサポートします。atob→decodeURIComponentアプローチを使用してUnicodeコンテンツを正しく処理します。JWTペイロードのデコード、HTTP Basic Auth認証情報の確認、Base64エンコードされたAPIレスポンスの読み取り、または転送中のエンコードされたデータのデバッグに便利です。",howToUse:`1. 左側にBase64文字列を貼り付けます
2. デコードされたテキストが出力に表示されます
3. 文字列に空白が含まれている場合、自動的にトリムされます
4. URLセーフなBase64（-と_の文字）も処理されます
5. ヒント: JWTトークンはドットで区切られた3つのBase64部分を持ちます — それぞれ個別にデコードするか、JWTデコーダーツールを使用してください`},"url-encode":{description:"URLとクエリ文字列をパーセントエンコード — 特殊文字、スペース、非ASCII文字をURLで安全に渡す",longDescription:"URLクエリパラメーター、パスセグメント、またはフォームサブミッションに安全に含められるようにパーセントエンコード（URLエンコード）を使用して文字列をエンコードします。スペースは%20、&は%26、=は%3Dになり、非ASCII文字（タイ語、中国語、絵文字を含む）はパーセント形式のUTF-8バイトシーケンスとしてエンコードされます。URL構造を壊さずにユーザー生成データや特殊文字をURLで渡す正しい方法です。",howToUse:`1. 左側にエンコードしたいURLまたは文字列を貼り付けます
2. パーセントエンコードされた出力が即座に表示されます
3. エンコードされた出力をクエリパラメーター、パスセグメント、またはフォームデータで使用します
4. ヒント: クエリパラメーターの値部分のみをエンコードし、URL全体はエンコードしないでください — &と=の区切り文字をエンコードするとURL構造が壊れます`},"url-decode":{description:"パーセントエンコードされたURLを人間が読めるテキストに復号 — %20、%26などのエスケープシーケンスを逆変換",longDescription:"パーセントエンコードされたURL文字列を元の読みやすい形式に変換します。%20→スペース、%26→&、%3D→=、およびタイ語や中国語などの非ASCII文字のマルチバイトシーケンスを変換します。APIコールのデバッグ、ブラウザのアドレスバーからエンコードされたURLの読み取り、リダイレクトパラメーターの理解、エンコードされたURLを含むログファイルの検査に非常に役立ちます。",howToUse:`1. 左側にパーセントエンコードされたURLまたは文字列を貼り付けます
2. デコードされた人間が読めるテキストが右パネルに表示されます
3. デコードされた文字列をデバッグや表示用にコピーします
5. ヒント: URLが異常に見える場合（例: /の代わりに%2Fが表示される）、ここに貼り付けてデコードされたパスを確認します`},"jwt-decode":{description:"JWTトークンをデコードして検査 — ヘッダー、ペイロードクレーム、発行日時、有効期限、期限切れ状態を確認",longDescription:"JSON Web Token（JWT）をデコードして3つのコンポーネント（アルゴリズムとトークンタイプのヘッダー、sub、name、iat、expなどのクレームのペイロード、生の署名）を表示します。iat（発行日時）とexp（有効期限）フィールドの人間が読めるデータも計算し、トークンが現在期限切れかどうかも示します。注意: このツールは署名を検証しません — デコードのみです。セキュリティ上の決定にクライアント側のJWTデコードに依存しないでください。",howToUse:`1. 左側にJWT（完全なeyJ...文字列）を貼り付けます
2. デコードされたヘッダー、ペイロード、署名がJSON形式で表示されます
3. _metaセクションにはアルゴリズム、issuedAt日時、expiresAt日時、isExpiredフラグが表示されます
4. デバッグ中にユーザーID、ロール、有効期限などのクレームを確認するのに使用します
5. 警告: このツールは署名を検証しません — デコードされたJWTは正当性の証明ではありません`},"html-entities-encode":{description:"HTMLの特殊文字をエンティティにエンコード — ユーザー入力、コードスニペット、生のHTMLをWebページで安全に表示",longDescription:`HTMLで特別な意味を持つ文字（<、>、&、"、'）をHTMLエンティティ（&lt;、&gt;、&amp;、&quot;、&#039;）に変換します。ユーザー生成コンテンツ、コードサンプル、生のHTMLタグをブラウザがマークアップとして解釈せずにWebページに表示する正しい方法です。サーバーサイドでユーザー入力をレンダリングする際のXSS（クロスサイトスクリプティング）脆弱性を防ぐために不可欠です。`,howToUse:`1. 左側に特殊文字を含むテキストを貼り付けます
2. HTMLエンティティエンコードされた出力が右側に表示されます
3. HTMLテンプレートに出力を安全に埋め込みます
4. ヒント: XSS攻撃を防ぐためにHTMLにレンダリングする前にユーザー生成コンテンツを常にエンコードしてください`},"html-entities-decode":{description:"HTMLエンティティを通常の文字に復号 — &lt;、&gt;、&amp;などを読みやすいテキストに変換",longDescription:"HTMLエンティティ（&lt;、&gt;、&amp;、&quot;、&#039;、&apos;、&nbsp;）を元の文字に変換します。データベース、API、またはCMSシステムに保存されたHTMLエンコードされたコンテンツの読み取りに便利です。スクレイピングまたはエクスポートされたコンテンツに時々現れる二重エンコードされたHTMLエンティティのデコードにも役立ちます。",howToUse:`1. 左側にHTMLエンティティエンコードされたテキストを貼り付けます
2. デコードされたプレーンテキストが右側に表示されます
3. &amp;、&lt;、&gt;、&quot;などの一般的なエンティティはすべてデコードされます
4. ヒント: &amp;amp;（二重エンコード）が見られる場合、出力をこのツールに再度貼り付けて2番目の層をデコードしてください`},"decimal-to-binary":{description:"10進数を2進数（バイナリ）に変換 — 8進数と16進数の表現もボーナスとして表示",longDescription:"10進数の整数を入力すると、2進数表現と8進数（基数8）および16進数（基数16）の同等表現が即座に表示されます。コンピューターサイエンスの学生、組み込みシステム開発者、またはビット操作、パーミッション（chmod）、メモリアドレス、低レベルプログラミングの概念を扱う人にとって基本的なツールです。",howToUse:`1. 左側に10進数の整数を入力します（例: 255）
2. 0bプレフィックス付きの2進数出力が表示されます
3. 8進数（0o）と16進数（0x）が追加のリファレンスとして表示されます
4. ヒント: 10進数255 = 0b11111111 = 0xFF、これは8ビット符号なしバイトの最大値です`},"binary-to-decimal":{description:"2進数（バイナリ）を10進数に変換 — 8進数と16進数の出力も含む",longDescription:"2進数（0と1のみ使用）を10進数の同等値に変換します。8進数と16進数の表現も表示されます。0bプレフィックスはオプションで自動的に取り除かれます。2進数演算の理解、バイナリデータのデコード、ビット演算の実行、またはコンピューターアーキテクチャの学習に便利です。",howToUse:`1. 入力に2進数を入力または貼り付けます（例: 11111111 または 0b11111111）
2. 10進数の結果が出力の上部に表示されます
3. 8進数と16進数の同等値が追加のリファレンスとして表示されます
4. ヒント: 32ビットより長い2進数はJavaScriptの安全な整数範囲を超える可能性があります`},"decimal-to-hex":{description:"10進数を16進数（HEX）に変換 — Webカラー、メモリアドレス、低レベルプログラミングによく使用",longDescription:"10進数の整数を入力すると、0xプレフィックス付きの16進数表現が得られます。16進数はWeb開発（CSSカラーコード）、システムプログラミング（メモリアドレス、レジスタ値）、暗号化（ハッシュ出力）、デバッグで広く使用されています。参照用に2進数表現も含まれます。",howToUse:`1. 左側に10進数を入力します（例: 255）
2. 0xプレフィックス付きの16進数出力が表示されます（例: 0xFF）
3. 2進数表現が参照として下部に表示されます
4. ヒント: CSSの16進数カラーは6桁の16進数を使用します — 例: #1677FF。完全なカラー変換にはカラーコンバーターツールを使用してください`},"hex-to-decimal":{description:"16進数を10進数に変換 — 0xプレフィックスと大文字/小文字の16進数桁をサポート",longDescription:"16進数の値（0xプレフィックスあり・なし両方）を入力し、10進数の同等値に変換します。2進数表現も表示されます。メモリダンプ値の読み取り、カラーコード、ネットワークプロトコルフィールド、または10進数の同等値が必要な16進数エンコードされたデータの処理に便利です。",howToUse:`1. 入力に16進数を入力します（例: FF または 0xFF または ff）
2. 10進数の結果が出力に表示されます
3. 2進数表現が参照として含まれます
4. ヒント: CSSの16進数カラーには、完全なカラー詳細を取得するためにHEX→RGB/HSLコンバーターを使用してください`},"timestamp-to-date":{description:"Unixタイムスタンプ（秒またはミリ秒）を任意のタイムゾーンの人間が読める日付に変換 — ISO 8601、UTC、現地時刻を表示",longDescription:"Unixタイムスタンプを入力すると、ISO 8601、人間が読める文字列、日付のみ、時刻のみ、UTCオフセットなど複数の形式で対応する日付と時刻が即座に表示されます。タイムスタンプが秒かミリ秒かを（大きさに基づいて）自動検出します。オプションパネルから任意のタイムゾーンを選択して特定の地域の時間を確認できます。APIログのデバッグ、JWTの有効期限の確認、時系列データの処理に不可欠です。",howToUse:`1. 左側にUnixタイムスタンプを貼り付けます（秒の場合は例: 1716239022、ミリ秒の場合は1716239022000）
2. ツールは秒とミリ秒を自動検出します
3. オプションパネルのタイムゾーンドロップダウンからタイムゾーンを選択します
4. 出力には選択したタイムゾーンとUTCの日時が表示されます
5. ヒント: JWTのexpとiatフィールドは秒単位のUnixタイムスタンプです — ここに貼り付けて日付を確認します`},"date-to-timestamp":{description:"人間が読める日付文字列をUnixタイムスタンプに変換 — ISO 8601と多くの日付形式をサポート",longDescription:"ISO 8601形式（2024-01-15T10:30:00Z）または多くの他の形式（2024-01-15、January 15 2024）の日付文字列を入力し、秒とミリ秒の両方のUnixタイムスタンプを取得します。出力には選択したタイムゾーンとUTCの日付も表示されます。APIリクエストパラメーターの構築、有効期限の設定、またはデータベースや検索クエリの日付ベースのフィルターの処理に便利です。",howToUse:`1. 入力に日付文字列を入力または貼り付けます（例: 2024-01-15T10:30:00Z）
2. 秒とミリ秒のUnixタイムスタンプが出力に表示されます
3. オプションからタイムゾーンを選択して現地時刻の表現を確認します
4. ヒント: 最良の結果のために、タイムゾーンサフィックス付きのISO 8601形式（UTCには Z、タイムゾーン指定には +07:00 など）を使用してください`},"hex-to-rgb":{description:"HEXカラーコードをRGB、RGBA、HSL、HSLA、CSSカスタムプロパティに変換 — すべての形式を1クリックで",longDescription:"HEXカラーコード（3桁のショートハンドまたは6桁のフル）を入力すると、すべての同等カラー形式が即座に表示されます: RGB、RGBA、HSL、HSLA、各チャンネルの生の値、すぐに使えるCSSカスタムプロパティ宣言（--color-rgb、--color-hsl）。デザイントークン、Tailwind設定、CSS変数、またはクロスフォーマットカラーシステムで作業するフロントエンド開発者やUIデザイナーに不可欠です。",howToUse:`1. 左側にHEXカラーコードを入力または貼り付けます（例: #1677FF または #F53）
2. すべてのカラー形式の出力がJSON形式で右パネルに表示されます
3. 必要な特定の形式（rgb()、hsl()、またはCSS変数）をコピーします
4. css_variablesフィールドにはすぐに貼り付けられる:rootの変数宣言が含まれます
5. ヒント: 3桁のHEXコード（#F53）は変換前に自動的に6桁（#FF5533）に展開されます`},"rgb-to-hex":{description:"RGB/RGBAカラーをHEXコード、HSL、HSLA、CSS変数に変換 — 単一のRGB入力からすべてのカラー形式を取得",longDescription:"RGBまたはRGBAのカラー値を入力すると、すべての同等表現が得られます: HEXコード、HSL、HSLA、各チャンネルの生の値、CSSカスタムプロパティ宣言。rgb(r, g, b)関数形式とカンマ区切りの値（255, 87, 51）の両方を受け付けます。異なるデザインツール、コードベース、またはスタイルシステム間でカラーを変換する必要があるデザイナーや開発者に不可欠です。",howToUse:`1. 左側にRGBカラー値を貼り付けます（例: rgb(22, 119, 255) または 22, 119, 255）
2. すべての同等カラー形式がJSON形式の出力に表示されます
3. 必要なHEX、HSL、またはCSS変数の表現をコピーします
4. ヒント: rgba()のアルファ値は注記されますが、HEXとHSL出力ではカラーは完全に不透明として扱われます`},"hsl-to-rgb":{description:"HSLカラーをHEXとRGB形式に変換 — CSS変数と完全なカラー表現を1つの出力で",longDescription:"HSLまたはHSLAのカラー値を入力し、同等のHEXコード、RGB、RGBA、CSSカスタムプロパティ宣言を取得します。HSL（色相、彩度、明度）はRGBよりもカラー操作がより直感的なため、CSSやデザインツールで人気があります。Figma、SketchなどのデザインツールエクスポートをコードでのHEXまたはRGBに変換する場合に便利です。",howToUse:`1. 左側にHSLカラーを貼り付けます（例: hsl(213, 100%, 54%) または 213, 100, 54）
2. HEX、RGB、RGBA、HSLA、CSS変数の同等値が出力に表示されます
3. CSSファイルやデザインシステムに必要な形式をコピーします
4. ヒント: 色相は0〜360（カラーホイール上の角度）、彩度と明度は0〜100（パーセンテージ）です`},"css-minify":{description:"コメント、空白、不要なセミコロンを削除してCSSを圧縮 — スタイルシートのサイズを削減してページロードを高速化",longDescription:"すべてのコメントを削除し、空白を圧縮し、セレクターと宣言周りのスペースを除去し、閉じ括弧の前の最後のセミコロンを削除してCSSを圧縮します。結果は元と機能的に同一ですが、大幅にサイズが小さいコンパクトなCSSです。本番環境のデプロイ、HTMLページへのスタイル埋め込み、またはCDN転送コストの削減に便利です。",howToUse:`1. 左側にCSSコードを貼り付けます
2. minify済みCSSがコンパクトな1行出力として生成されます
3. すべての/* コメント */が削除されます
4. minify済みCSSをコピーして本番ビルドや<style>タグで使用します
5. ヒント: 大規模なプロジェクトでは、CIパイプラインの一部としてCSSビルドツール（PostCSS、esbuild）を統合してください`},"css-beautify":{description:"minify済みまたは乱れたCSSを整形してインデントを追加 — 読みやすく保守しやすいスタイルシートを作成",longDescription:"minify済み、自動生成、または乱れたCSSを、1行に1つのプロパティ、適切に配置された括弧、一貫したスペースで整形された美しいバージョンに変換します。ブラウザのDevToolsからスタイルをコピーした後、minify済みのベンダースタイルシート、またはデザインツールから生成されたCSSを読みやすくデバッグしやすく保守しやすくします。",howToUse:`1. 左側にminify済みまたは乱れたCSSを貼り付けます
2. 1プロパティ1行の整形済みCSSが出力に表示されます
3. セレクターと括弧は独自の行にあります
4. スタイルシートやエディタに出力をコピーします
5. ヒント: TailwindやCSS-in-JSライブラリから自動生成されたCSSを検査して理解するのに使用します`},"css-to-scss":{description:"CSSカスタムプロパティ（CSS変数）をSCSS変数に変換 — バニラCSSからSCSSベースのデザインシステムへの移行に",longDescription:"CSS :rootの変数宣言（--variable-name: value）をSCSS変数構文（$variable_name: value）に変換し、スタイルシート全体のvar(--variable-name)の使用を対応する$variable_name参照に置き換えます。CSS変数名のダッシュはSCSSの互換性のためにアンダースコアに変換されます。CSSカスタムプロパティシステムをSCSSに移行するための出発点を提供しますが、ネストとミックスインは手動で追加する必要があります。",howToUse:`1. 左側に:root変数付きのCSSを貼り付けます
2. 出力では:root { --var: value } が $var: value 宣言に置き換えられます
3. var(--var)の使用は出力で $var 参照になります
4. SCSSを.scssファイルにコピーし、ネストを手動で追加します
5. ヒント: CSS変数名のダッシュ（--primary-color）はSCSSではアンダースコア（$primary_color）になります`},"css-to-tailwind":{description:"CSS宣言をTailwind CSSユーティリティクラスに変換 — スタイルに対応する正しいTailwindクラスを素早く見つける",longDescription:"CSSプロパティ宣言を入力すると、同等のTailwind CSSユーティリティクラス名が得られます。一般的なレイアウトプロパティ（display、position、overflow）、フレックスボックス（flex-direction、align-items、justify-content）、サイズ（width、height）、タイポグラフィ（text-align、font-weight）をサポートします。直接対応するTailwindクラスがないプロパティはコメントとして表示されるので手動で処理できます。CSSからTailwindへの移行、またはどのTailwindクラスがどのCSSプロパティに対応するかを学習するのに最適です。",howToUse:`1. 左側にCSS宣言（セレクターなしで1行に1つ）を貼り付けます
2. マッチしたTailwindクラスが class="..." 属性文字列として出力されます
3. マッチしないプロパティはコメントアウトされたCSSとして下部に表示されます
4. クラスリストをコピーしてHTML要素に追加します
5. ヒント: カスタムピクセル値（例: padding: 12px）にはTailwindの任意値構文（p-[12px]）を手動で使用してください`}},c={en:h,th:y,zh:g,ja:T};function f(e,o){var t,i;return((t=c[o])==null?void 0:t[e])??((i=c.en)==null?void 0:i[e])}function b(e){const{locale:o}=l();if(!e)return{description:"",longDescription:"",howToUse:""};const t=f(e.id,o);return{description:(t==null?void 0:t.description)??e.description,longDescription:(t==null?void 0:t.longDescription)??e.longDescription,howToUse:(t==null?void 0:t.howToUse)??e.howToUse}}const L={json:"📄",code:"⚡",markup:"🏷️",encoding:"🔐",color:"🎨",data:"📊",utility:"🔧"};function A({converter:e,compact:o=!1}){const t=u(),{description:i}=b(e);return n.jsxs("div",{className:"converter-card",onClick:()=>t(r.converter(e.id)),role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),t(r.converter(e.id)))},"aria-label":`Open ${e.name} converter`,children:[n.jsx("div",{className:"card-icon",children:L[e.category]??"🔧"}),n.jsxs("div",{className:"card-body",children:[n.jsx("div",{className:"card-name",children:e.shortName}),!o&&n.jsx("div",{className:"card-desc",children:i})]}),n.jsx(S,{className:"card-arrow"})]})}function C({slot:e,format:o="responsive",className:t="",style:i}){s.useRef(null);const{enabled:a,slots:p}=m.adsense,d=p[e];return s.useEffect(()=>{},[d,a]),{...i},n.jsx("div",{})}export{C as A,A as C,b as u};
