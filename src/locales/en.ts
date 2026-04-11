const en = {
  home: "Home",
  
  // ── Nav ──────────────────────────────────────────────────────────────────
  allTools: 'All Tools',
  github: 'GitHub',

  // ── Home ─────────────────────────────────────────────────────────────────
  privacyNote: "Runs 100% in your browser — no data is sent anywhere",
  heroBadge: '⚡ 35+ Free Developer Tools',
  heroTitle1: 'Convert anything.',
  heroTitle2: 'In seconds.',
  heroSubtitle: 'Free online code and data converters for developers. JSON, TypeScript, YAML, Markdown, Base64, colors, and more — all running locally in your browser.',
  statConverters: 'Converters',
  statLatency: 'Server latency',
  statClientSide: 'Client-side',
  statFree: 'Forever',
  searchPlaceholder: 'Search converters... (e.g. JSON, Base64, TypeScript)',
  mostPopular: '🔥 Most Popular',

  // ── Converter Page ────────────────────────────────────────────────────────
  input: 'Input',
  output: 'Output',
  convert: 'Convert',
  autoConvertOn: 'Auto-convert ON',
  copy: 'Copy',
  copied: 'Copied!',
  clear: 'Clear',
  example: 'Example',
  download: 'Download',
  converting: 'Converting...',
  conversionError: 'Conversion Error',
  conversionFailed: 'Conversion Failed',
  relatedTools: '🔗 Related Tools',
  about: 'About',
  outputPlaceholder: 'Output will appear here...',
  notFound: 'Converter not found.',
  browseAll: 'Browse All Tools',
  searchResults: (n: number, q: string) => `${n} result${n !== 1 ? 's' : ''} for "${q}"`,
  noResults: 'No converters found. Try "JSON", "Base64", or "TypeScript".',
  howToUseTitle: "How to use",

  // ── Timezone ─────────────────────────────────────────────────────────────
  timezone: 'Timezone',
  timezoneSearch: 'Search timezone...',

  // ── Theme / Language ──────────────────────────────────────────────────────
  lightMode: 'Light mode',
  darkMode: 'Dark mode',
  language: 'Language',

  // ── Footer ────────────────────────────────────────────────────────────────
  footerNote: 'All conversions run locally in your browser. No data is sent to any server.',
  footerPrivacy: 'Privacy Policy',
  footerTerms: 'Terms of Service',
  footerContact: 'Contact',
  footerAbout: 'About',

  // ── Privacy Policy ────────────────────────────────────────────────────────
  privacyTitle: 'Privacy Policy',
  privacyLastUpdated: 'Last updated',
  privacyIntroTitle: '1. Introduction',
  privacyIntroText: 'DevConvert ("we", "us", or "our") operates the DevConvert website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We are committed to protecting your privacy and handling any personal information we obtain about you with care and respect.',

  privacyDataTitle: '2. Data We Collect',
  privacyDataText: 'DevConvert is designed with privacy first. All code and data conversions are performed entirely in your browser — no input or output data is ever transmitted to our servers.',
  privacyDataLocal: 'Locally stored preferences (never sent to servers):',
  privacyDataLocalItems: [
    'Theme preference (dark/light mode) — stored in localStorage',
    'Language preference (EN/TH/ZH/JA) — stored in localStorage',
  ],
  privacyDataAnalytics: 'We may use Google Analytics to collect anonymous usage statistics such as page views and feature usage. This data does not identify you personally.',

  privacyAdsTitle: '3. Google AdSense & Advertising',
  privacyAdsText: 'We use Google AdSense to display advertisements on our Service. Google AdSense uses cookies and web beacons to serve ads based on prior visits to our website or other websites. Google\'s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.',
  privacyAdsOptOut: 'You may opt out of personalized advertising by visiting Google\'s Ads Settings at',
  privacyAdsPolicy: 'For more information about Google\'s privacy practices, please visit the Google Privacy & Terms page at',

  privacyCookiesTitle: '4. Cookies',
  privacyCookiesText: 'We use the following types of cookies:',
  privacyCookiesItems: [
    'Essential cookies: Required for the Service to function (theme and language preferences stored in localStorage).',
    'Analytics cookies: Google Analytics cookies to understand how visitors interact with our Service.',
    'Advertising cookies: Google AdSense cookies to display relevant advertisements.',
  ],
  privacyCookiesControl: 'You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our Service.',

  privacyThirdPartyTitle: '5. Third-Party Services',
  privacyThirdPartyText: 'Our Service may contain links to or use the following third-party services, each with their own privacy policies:',
  privacyThirdPartyItems: [
    { name: 'Google Analytics', url: 'https://policies.google.com/privacy', desc: 'Anonymous usage analytics' },
    { name: 'Google AdSense', url: 'https://policies.google.com/privacy', desc: 'Advertising' },
  ],

  privacyChildrenTitle: '6. Children\'s Privacy',
  privacyChildrenText: 'Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.',

  privacyGdprTitle: '7. Your Rights (GDPR)',
  privacyGdprText: 'If you are located in the European Economic Area (EEA), you have certain data protection rights. Since we do not collect personal data directly, most GDPR rights are inherently satisfied. However, you may:',
  privacyGdprItems: [
    'Clear your locally stored preferences at any time by clearing your browser\'s localStorage.',
    'Opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.',
    'Opt out of personalized ads via Google\'s Ad Settings.',
  ],

  privacyChangesTitle: '8. Changes to This Policy',
  privacyChangesText: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.',

  privacyContactTitle: '9. Contact Us',
  privacyContactText: 'If you have any questions about this Privacy Policy, please contact us at:',

  // ── about ──────────────────────────────────────────────────────
  aboutTitle: "About",
  aboutTitleDescription: "DevConvert is a free, open collection of developer utilities built to save time on repetitive conversion tasks. No login, no installation, no data leaving your browser.",
  aboutWhatIs: "What is DevConvert?",
  aboutWahtIsDescription: "DevConvert is a browser-based toolkit offering 35+ conversion tools for developers and engineers. Whether you need to convert JSON to TypeScript interfaces, encode a string in Base64, decode a JWT token, convert colors between HEX, RGB, and HSL, or transform Markdown into HTML — DevConvert handles it instantly, right in your browser.",
  aboutWhyBuild: "Why we built it",
  aboutWhyBuildDescription: "Every developer knows the pain of switching between a dozen browser tabs just to do a simple conversion. We built DevConvert to be the one tab you keep open — fast, reliable, and always free. All processing runs locally in your browser using JavaScript, so your code and data never leave your machine.",
  aboutPrivacy: "Privacy first",
  aboutPrivacyDescription: "We take privacy seriously. DevConvert performs all conversions client-side — nothing you type is ever sent to a server. The only data stored locally are your theme and language preferences, saved in your browser's localStorage.",
  aboutUcanDo: "What you can do with DevConvert",
  aboutUcanDoDescription: "Convert between data formats like JSON, YAML, XML, and CSV. Generate TypeScript interfaces from JSON. Encode and decode Base64, URLs, and HTML entities. Decode JWT tokens. Convert between color formats. Transform Markdown to HTML and back. Beautify or minify JSON, HTML, and CSS. Convert Unix timestamps to human-readable dates. And much more — with new tools added regularly.",
  aboutAlwaysFree: "Always free",
  aboutAlwaysFreeDescription: "DevConvert is and will always be free to use. The project is supported by non-intrusive display advertising. If you find it useful, the best way to support it is simply to share it with a fellow developer.",
  aboutContact: "Contact",
  aboutContactDescription: "Have a suggestion, found a bug, or want to request a new converter? We'd love to hear from you.",

  // ── Terms of Service ──────────────────────────────────────────────────────
  termsTitle: 'Terms of Service',
  termsLastUpdated: 'Last updated',
  termsIntroTitle: '1. Acceptance of Terms',
  termsIntroText: 'By accessing or using DevConvert ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service. We reserve the right to update these terms at any time without prior notice.',

  termsServiceTitle: '2. Description of Service',
  termsServiceText: 'DevConvert provides free, browser-based developer tools including code converters, data format converters, encoding/decoding utilities, and color format converters. All processing occurs locally in your browser. We do not store, transmit, or process any of the data you enter into the Service on our servers.',

  termsUseTitle: '3. Acceptable Use',
  termsUseText: 'You agree to use the Service only for lawful purposes. You must not:',
  termsUseItems: [
    'Use the Service in any way that violates applicable local, national, or international laws or regulations.',
    'Attempt to reverse-engineer, decompile, or extract the source code of the Service.',
    'Use automated scripts or bots to scrape or abuse the Service.',
    'Use the Service to process data that infringes on third-party intellectual property rights.',
    'Attempt to interfere with or disrupt the integrity or performance of the Service.',
  ],

  termsIpTitle: '4. Intellectual Property',
  termsIpText: 'The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of DevConvert and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of DevConvert.',
  termsIpUser: 'You retain all rights to any content you enter into the Service. Since all processing occurs locally in your browser, we have no access to or claim over your data.',

  termsDisclaimerTitle: '5. Disclaimer of Warranties',
  termsDisclaimerText: 'The Service is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, either express or implied, including but not limited to:',
  termsDisclaimerItems: [
    'Accuracy or completeness of conversion results.',
    'Fitness for a particular purpose.',
    'Non-infringement of third-party rights.',
    'Uninterrupted, error-free, or secure operation of the Service.',
  ],
  termsDisclaimerAdvice: 'You should always review and test conversion output before using it in production environments. DevConvert conversion tools are provided as a convenience and should not replace thorough code review.',

  termsLiabilityTitle: '6. Limitation of Liability',
  termsLiabilityText: 'To the fullest extent permitted by applicable law, DevConvert shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or other intangible losses, resulting from:',
  termsLiabilityItems: [
    'Your access to or use of (or inability to access or use) the Service.',
    'Any errors or inaccuracies in conversion results.',
    'Unauthorized access to or alteration of your data.',
    'Any other matter related to the Service.',
  ],

  termsAdsTitle: '7. Advertising',
  termsAdsText: 'The Service is supported by advertising provided by Google AdSense. By using the Service, you acknowledge that advertisements may be displayed. We are not responsible for the content of third-party advertisements. Your interactions with advertisers found in the Service are solely between you and such advertisers.',

  termsLinksTitle: '8. Third-Party Links',
  termsLinksText: 'The Service may contain links to third-party websites or services that are not owned or controlled by DevConvert. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.',

  termsTerminationTitle: '9. Termination',
  termsTerminationText: 'We reserve the right to suspend or terminate your access to the Service at any time, without prior notice or liability, for any reason, including if you breach these Terms of Service.',

  termsGoverningTitle: '10. Governing Law',
  termsGoverningText: 'These Terms shall be governed by and construed in accordance with applicable law, without regard to its conflict of law provisions.',

  termsChangesTitle: '11. Changes to Terms',
  termsChangesText: 'We reserve the right to modify or replace these Terms at any time. We will provide notice by updating the date at the top of these Terms. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised Terms.',

  termsContactTitle: '12. Contact Us',
  termsContactText: 'If you have any questions about these Terms of Service, please contact us at:',

  // ── WhyDevConvert ─────────────────────────────────────────────────────────────
  whyTitleDivider: "Why DevConvert?",
  whyTitle: 'Built for developers,\nby developers.',
  whySubtitle: 'Every feature is designed to save time on daily tasks. No bloat, no ads, no strings attached.',
  whyFeat1Title: 'Your data is 100% safe',
  whyFeat1Body: 'All conversions happen directly in your browser. No code or data is ever sent to any server. Perfect for sensitive data that should never leave your machine.',
  whyFeat2Title: 'Instant as you type',
  whyFeat2Body: 'Real-time conversion the moment you paste. No button to press, no loading, no waiting on the network. Results appear within 50ms.',
  whyFeat3Title: '35+ tools in one place',
  whyFeat3Body: 'Covers every dev task: JSON, TypeScript, YAML, XML, CSV, SQL, Markdown, HTML, Base64, JWT, colors, CSS, and more. No need to jump between sites.',
  whyFeat4Title: 'Multi-language UI',
  whyFeat4Body: 'The interface supports Thai, English, Japanese, and Chinese, making it accessible for developers worldwide.',
  whyFeat5Title: 'Professional-grade editor',
  whyFeat5Body: 'Powered by Monaco Editor (the same engine as VS Code) — syntax highlighting, auto-indent, and code folding for every format.',
  whyFeat6Title: 'Download results instantly',
  whyFeat6Body: 'Copy the output or download as a .ts, .json, .yaml, .xml file immediately. Ready to use in your project with no extra editing.',

  // ── HowItWorks ────────────────────────────────────────────────────────────────
  howTitleDivider: "How It Works",
  howTitle: 'Easy in 3 Steps',
  howSubtitle: 'No login, no install, no config — open and convert right away.',
  howStep1Label: 'STEP 01',
  howStep1Title: 'Paste your data',
  howStep1Body: 'Paste JSON, YAML, TypeScript, CSV, or any other data into the input panel on the left, or type it directly.',
  howStep1Hint: 'Supports direct paste from clipboard',
  howStep2Label: 'STEP 02',
  howStep2Title: 'Choose your format',
  howStep2Body: 'Select the target format from the dropdown: TypeScript, JSON, YAML, XML, SQL, Markdown, and many more.',
  howStep2Hint: 'Converts automatically as soon as you select',
  howStep3Label: 'STEP 03',
  howStep3Title: 'Copy or download',
  howStep3Body: 'Copy the output instantly or download as a file. Use it in your project right away — no further editing needed.',
  howStep3Hint: 'Save as .ts, .json, .yaml and more',

  // ── ToolCategories ────────────────────────────────────────────────────────────
  catTitleDivider: "All Tools",
  catTitle: 'Covers every format\ndevelopers need.',
  catSubtitle: 'Whether you work with REST APIs, DevOps pipelines, frontend, or data engineering — there\'s the right tool for every job.',
  catJsonLabel: 'JSON',
  catJsonDesc: 'JSON ↔ TypeScript, YAML, XML, CSV, SQL',
  catYamlLabel: 'YAML / XML',
  catYamlDesc: 'Convert between YAML, XML, JSON and TypeScript',
  catCodeLabel: 'Code',
  catCodeDesc: 'TypeScript ↔ JavaScript, CSS ↔ SCSS, Tailwind',
  catMarkupLabel: 'Markup',
  catMarkupDesc: 'Markdown ↔ HTML, Format and Minify',
  catEncodingLabel: 'Encoding',
  catEncodingDesc: 'Base64, URL, JWT, HTML Entities, number bases',
  catColorLabel: 'Color',
  catColorDesc: 'HEX ↔ RGB ↔ HSL with CSS variables',

  // ── PrivacyPerformance ────────────────────────────────────────────────────────
  ppTitleDivider: "Privacy-first & Fast",
  ppTitle: 'Your data never leaves\nyour browser.',
  ppBody: 'DevConvert has no backend server. Every conversion runs 100% in your browser\'s JavaScript. No logs, no tracking, no code sent anywhere. Ideal for enterprise work or confidential data.',
  ppCheck1: 'No account or login required',
  ppCheck2: 'Works offline after the first load',
  ppCheck3: 'Open-source and auditable',
  ppCheck4: 'No ads, no tracking',
  ppStat1Label: 'Server latency',
  ppStat1Sub: 'Everything runs on your machine',
  ppStat2Label: 'Runs in browser',
  ppStat2Sub: 'No backend, no API calls',
  ppStat3Label: 'Tools',
  ppStat3Sub: 'Covers all popular formats',
  ppStat4Label: 'Unlimited usage',
  ppStat4Sub: 'Free forever, no rate limits',

  // ── UseCases ──────────────────────────────────────────────────────────────────
  useCaseTitleDivider: "For Every Role",
  useCaseTitle: 'Whoever you are,\nthere\'s a tool for you.',
  ucRole1: 'Frontend Developer',
  ucRole1Case1: 'Convert API responses (JSON) to TypeScript interfaces instantly',
  ucRole1Case2: 'Convert HEX colors from Figma to RGB/HSL for CSS',
  ucRole1Case3: 'Convert CSS to Tailwind utility classes',
  ucRole2: 'DevOps / Backend',
  ucRole2Case1: 'Convert JSON config to YAML for Kubernetes / Docker Compose',
  ucRole2Case2: 'Decode JWT tokens to inspect claims and expiry',
  ucRole2Case3: 'Convert timestamps to readable dates in any timezone',
  ucRole3: 'Data Engineer',
  ucRole3Case1: 'Convert CSV to JSON array for database import',
  ucRole3Case2: 'Generate SQL CREATE TABLE + INSERT from JSON sample data',
  ucRole3Case3: 'Convert XML from legacy APIs to easy-to-use JSON',
  ucRole4: 'Technical Writer',
  ucRole4Case1: 'Convert Markdown to HTML for blogs or documentation',
  ucRole4Case2: 'Format JSON for readability before copying into docs',
  ucRole4Case3: 'Convert HTML from a CMS to Markdown for GitHub',

  // ── Knowledge Section ─────────────────────────────────────────────────────
  knowledgeSectionTitle: 'Format Conversion — What Every Dev Should Know',
  knowledgeCards: [
    {
      title: 'Why Format Conversion Exists',
      body: 'Modern systems rarely share the same data language. APIs speak JSON, configs prefer YAML, enterprise tools demand XML, and pipelines output CSV. Format conversion is not a convenience — it\'s the connective tissue of the entire software stack.',
    },
    {
      title: 'Always Validate After Converting',
      body: 'Never trust converted output blindly. Run the result through a schema validator or linter before committing it to your codebase. A single misplaced quote or wrong data type can silently break an entire downstream pipeline in production.',
    },
    {
      title: 'Not All Conversions Are Lossless',
      body: 'XML to JSON loses element ordering and mixed content. YAML to JSON drops all comments. JSON to CSV flattens nested objects, losing hierarchy. Know exactly what gets discarded before you convert — especially if the data feeds a critical downstream process.',
    },
    {
      title: 'Encoding Pitfalls to Watch Out For',
      body: 'UTF-8 is the universal standard, but legacy systems still emit ISO-8859-1 or Windows-1252. Mixing encodings mid-pipeline causes mojibake — garbled characters that corrupt data silently. Always declare encoding explicitly when reading from or writing converted files to disk.',
    },
    {
      title: 'Automate Recurring Conversions',
      body: 'One-off conversions are fine, but recurring ones belong in your CI/CD pipeline. Tools like jq (JSON), yq (YAML), and xmllint (XML) are scriptable, auditable, and version-controllable. Automating converts a manual error-prone step into a reproducible, reviewable artefact.',
    },
    {
      title: 'Define Your Schema First',
      body: 'Define your target schema before converting. A JSON Schema, TypeScript interface, or XSD catches structural issues at conversion time rather than at runtime. Schema-first thinking also makes the conversion reversible — you always have a canonical reference to validate against.',
    },
  ],
  proTipsTitle: 'Pro Tips',
  proTips: [
    'Pretty-print before diffing — minified output hides structural changes.',
    'Strip nulls and empty strings before converting — downstream systems interpret them differently.',
    'Round-trip test: convert A→B, then B→A, and compare to original. Any diff reveals lossy fields.',
    'Keep raw source files in version control. Derived formats are regeneratable; originals are not.',
  ],

  // for blog
  "blogTitle": "Blog",
  "developerBlog": "Developer Insights",
  "blogDescription": "Level up your development skills with in-depth guides, practical tutorials, and real-world examples covering JSON, TypeScript, YAML, encoding techniques, CSS, and modern development workflows. Explore step-by-step explanations, best practices, performance tips, and common pitfalls to avoid. Whether you're building applications, transforming data, or optimizing your frontend and backend systems, this hub is designed to help you write cleaner code, solve problems faster, and stay up to date with the tools developers rely on every day.",
  "blogFeaturedArticles": "Featured Insights",
  "blogAllArticles": "All Articles",
  "totalArticles": "Articles covering all DevConvert tools",
  "blogs": [
    {
      "id": 1,
      "slug": "what-is-json",
      "category": "json",
      "publishedAt": "2025-01-10",
      "readingMinutes": 6,
      "coverEmoji": "📄",
      "relatedTools": ["json-beautify", "json-to-ts", "json-to-yaml", "json-to-csv"],
      "content": {
        "title": "What Is JSON? A Complete Guide for Developers",
        "description": "Learn what JSON is, why it became the universal data format for APIs, and how to work with it efficiently using real-world examples.",
        "sections": [
          {
            "heading": "What Is JSON?",
            "paragraphs": [
              "JSON (JavaScript Object Notation) is a lightweight, text-based data format used to store and exchange structured information. Originally derived from JavaScript object syntax, JSON has grown to become the de facto standard for data interchange across virtually every programming language and platform.",
              "JSON is built on two fundamental structures: a collection of name/value pairs (objects) and an ordered list of values (arrays). These simple building blocks are enough to represent nearly any real-world data structure — from a user profile to a complex nested configuration file."
            ]
          },
          {
            "heading": "Why JSON Became the Universal Standard",
            "paragraphs": [
              "Before JSON, XML dominated the web. XML was powerful but verbose — a simple list of names required a forest of opening and closing tags. JSON stripped away the ceremony and kept only the data. When REST APIs began replacing SOAP in the late 2000s, JSON was the natural fit: human-readable, compact, and natively parseable in any browser.",
              "Today, JSON is everywhere: REST APIs return it, configuration files use it (package.json, tsconfig.json), databases like MongoDB store documents in BSON (a binary form of JSON), and even AWS and Azure use JSON for infrastructure policies. Knowing JSON is not optional for a modern developer — it is foundational."
            ]
          },
          {
            "heading": "JSON Data Types and Syntax Rules",
            "paragraphs": [
              "JSON supports six data types: strings (in double quotes), numbers, booleans (true or false), null, objects (curly braces), and arrays (square brackets). A key rule: all object keys must be strings wrapped in double quotes. Unlike JavaScript object literals, JSON does not allow trailing commas, comments, or single quotes.",
              "Strict syntax is both JSON's strength and its biggest source of bugs. A single missing comma or extra bracket breaks the entire document. This is why JSON beautifiers and validators — like the JSON Beautify tool on DevConvert — are essential daily tools for any developer working with APIs or configuration files."
            ]
          },
          {
            "heading": "JSON in Practice: Common Use Cases",
            "paragraphs": [
              "API responses are the most common JSON encounter. When you fetch data from a REST API, the response body is almost always JSON. Frontend developers parse this JSON into JavaScript objects, extract the needed fields, and render them to the UI.",
              "Configuration files are another major use case. Node.js projects use package.json to declare dependencies and scripts. TypeScript projects use tsconfig.json to configure the compiler. ESLint, Prettier, and Babel all use JSON-based configs. Understanding JSON structure helps you debug configuration issues faster.",
              "JSON is also used for data storage in NoSQL databases, for serializing application state, for defining cloud infrastructure (AWS IAM policies, GCP service account files), and for inter-service communication in microservice architectures."
            ]
          },
          {
            "heading": "Working With JSON More Efficiently",
            "paragraphs": [
              "Use a JSON beautifier when dealing with minified API responses — compact JSON on a single line is impossible to read or debug. DevConvert's JSON Beautify tool instantly formats minified JSON with proper indentation.",
              "When building TypeScript applications, convert your JSON data to typed interfaces immediately. This gives you autocomplete, type safety, and compile-time error detection. DevConvert's JSON to TypeScript tool generates accurate interfaces from any JSON object, including nested structures and arrays.",
              "For data pipelines, converting JSON to CSV makes it easy to import data into Excel, Google Sheets, or database import tools. The JSON to CSV converter handles nested objects by flattening them, making your data spreadsheet-ready."
            ]
          }
        ]
      },
    },
    {
      "id": 2,
      "slug": "json-to-typescript-interfaces",
      "category": "typescript",
      "publishedAt": "2025-01-17",
      "readingMinutes": 7,
      "coverEmoji": "⚡",
      "relatedTools": ["json-to-ts", "yaml-to-ts", "ts-to-js"],
      "content": {
        "title": "JSON to TypeScript: Generate Typed Interfaces Automatically",
        "description": "Stop writing TypeScript interfaces by hand. Learn how to automatically generate accurate, nested type definitions from any JSON object in seconds.",
        "sections": [
          {
            "heading": "Why TypeScript Interfaces Matter",
            "paragraphs": [
              "When you fetch data from an API, you receive a plain JavaScript object with no type information. TypeScript's power lies in its ability to catch errors at compile time rather than runtime — but that power only activates when your data is properly typed. Without interfaces, TypeScript degrades to annotated JavaScript, and you lose autocomplete, refactor safety, and type narrowing.",
              "Writing interfaces by hand is tedious and error-prone. A typical API response might have 15 fields, nested objects, optional arrays, and union types. Transcribing all of that manually takes time and introduces human error — a missed question mark on an optional field, a wrong type on a number field. Automating this conversion is simply the smarter approach."
            ]
          },
          {
            "heading": "How JSON to TypeScript Conversion Works",
            "paragraphs": [
              "A JSON to TypeScript converter inspects each key-value pair in your JSON and infers the correct TypeScript type. String values become `string`, numbers become `number`, booleans become `boolean`, and null values are flagged as optional (`field?: type`). Arrays are inspected element by element to determine the element type, including union types when an array contains mixed values.",
              "Nested objects become their own named interfaces. For example, a JSON object with a nested `address` object will generate both a `Root` interface and an `Address` interface, with `Root.address` typed as `Address`. This produces clean, modular type definitions that match real-world TypeScript best practices — not a single flat interface with every property."
            ]
          },
          {
            "heading": "TypeScript Interface Best Practices",
            "paragraphs": [
              "Always use `interface` for object shapes that can be extended. Use `type` for union types, intersections, or when aliasing primitives. For API response types, prefer `interface` because your API contract is an implicit promise of extension compatibility.",
              "Mark genuinely optional fields with `?`. Do not mark everything optional just because the API sometimes returns null — that defeats the purpose of TypeScript. If a field can be null, type it as `string | null`, not just `string?`. The distinction is important: an optional field might not exist at all in the object, while a nullable field always exists but can be null.",
              "For large API responses, break interfaces into smaller composable pieces. A `UserResponse` interface that contains an `Address`, `Preferences`, and `SubscriptionPlan` sub-interface is far more maintainable than a 40-field flat interface. DevConvert's JSON to TypeScript tool does this automatically."
            ]
          },
          {
            "heading": "Handling Real-World JSON Complexity",
            "paragraphs": [
              "Real APIs rarely return perfectly consistent JSON. You might see arrays that are sometimes empty, fields that appear only in certain conditions, or values that can be multiple types. TypeScript handles these with union types: `string | number`, `string | null`, or even discriminated unions for polymorphic responses.",
              "When converting JSON that comes from an API you don't control, treat the generated interfaces as a starting point, not a final answer. Review generated interfaces and add `?` to fields that might be missing, or widen types where the API documentation indicates variability. The converter saves you 80% of the work; your domain knowledge provides the remaining 20%."
            ]
          },
          {
            "heading": "TypeScript vs JavaScript: When to Convert",
            "paragraphs": [
              "If you're working on a JavaScript project that will live longer than a few weeks, TypeScript is worth the migration cost. The upfront overhead of typing your data layer pays dividends immediately: IDEs provide accurate autocomplete, team members can understand data shapes without reading API docs, and bugs that would appear only in production are caught before deployment.",
              "DevConvert offers both JSON to TypeScript (for adding types to untyped data) and TypeScript to JavaScript (for stripping types when targeting environments that cannot use TypeScript directly). These two tools cover the full conversion lifecycle."
            ]
          }
        ]
      }
    },
    {
      "id": 3,
      "slug": "yaml-json-xml-comparison",
      "category": "yaml",
      "publishedAt": "2025-01-24",
      "readingMinutes": 8,
      "coverEmoji": "📊",
      "relatedTools": ["yaml-to-json", "json-to-yaml", "xml-to-json", "yaml-to-xml"],
      "content": {
        "title": "YAML vs JSON vs XML: Which Format Should You Use?",
        "description": "A practical comparison of the three dominant data serialization formats. Learn when to use YAML, JSON, or XML and how to convert between them without losing data.",
        "sections": [
          {
            "heading": "Three Formats, Three Philosophies",
            "paragraphs": [
              "YAML, JSON, and XML all solve the same problem: representing structured data as text. But they do it with completely different design philosophies. XML (1998) prioritizes document-like semantics with attributes and mixed content. JSON (2001) prioritizes machine-readability and JavaScript compatibility. YAML (2001) prioritizes human-readability and configuration ergonomics.",
              "In modern software development, you'll encounter all three. REST APIs speak JSON. Kubernetes and Docker Compose speak YAML. Enterprise Java systems and SOAP web services still use XML. Legacy data exports, RSS feeds, and SVG graphics are XML. Knowing when to use each — and how to convert between them — is a practical daily skill."
            ]
          },
          {
            "heading": "JSON: The API Standard",
            "paragraphs": [
              "JSON is the fastest to parse, the most universally supported, and the most compact of the three. Every programming language has a native JSON parser. Browser's `JSON.parse()` is built-in. JSON is the obvious choice for API responses, request payloads, and any machine-to-machine communication where file size and parse speed matter.",
              "JSON's weakness is human editing. Strict double quotes, no comments, no trailing commas, and no multiline strings make JSON config files painful to write by hand. This is why `package.json` and `tsconfig.json` have evolved workarounds (like JSONC — JSON with Comments) and why many tools prefer YAML for configuration."
            ]
          },
          {
            "heading": "YAML: The Configuration King",
            "paragraphs": [
              "YAML was designed to be read and written by humans. It uses indentation instead of brackets, allows comments with `#`, supports multiline strings natively, and permits unquoted strings in most cases. A Kubernetes deployment manifest in YAML is significantly more readable than the equivalent JSON.",
              "YAML's weakness is strictness. Indentation errors are silent killers — a two-space indent where four spaces are expected breaks your entire configuration without any bracket mismatch to highlight the error. YAML also has surprising edge cases: the string `no` is parsed as `false` in some parsers. Always validate YAML configs with a tool before deploying.",
              "Use YAML for: Kubernetes manifests, Docker Compose files, GitHub Actions workflows, Ansible playbooks, CI/CD pipeline configurations, and any config file that humans need to read and edit regularly."
            ]
          },
          {
            "heading": "XML: The Enterprise Veteran",
            "paragraphs": [
              "XML's age is both its burden and its strength. The burden: verbose, redundant tags that add noise without value. The strength: a massive ecosystem of tooling — XPath for querying, XSLT for transformation, XSD for schema validation, namespaces for avoiding key collisions. No other format has XML's query and transformation story.",
              "Use XML for: SOAP web services (still heavily used in banking and healthcare), RSS and Atom feeds, SVG graphics, Microsoft Office documents (DOCX, XLSX are ZIP files containing XML), and enterprise integration patterns that predate JSON's dominance.",
              "When migrating from XML to JSON, be aware of what gets lost: XML attributes become JSON properties (or get dropped if your converter isn't careful), mixed content (text and child elements interleaved) has no clean JSON equivalent, and XML namespaces require special handling."
            ]
          },
          {
            "heading": "Converting Between Formats: What to Watch For",
            "paragraphs": [
              "Not all conversions are lossless. YAML to JSON is nearly lossless, except comments are dropped (JSON has no comment syntax). JSON to YAML is fully lossless. XML to JSON loses attributes unless the converter uses a convention like `@attribute`. JSON to XML requires inventing element names for array items.",
              "DevConvert handles all six major conversion pairs — JSON↔YAML, JSON↔XML, YAML↔XML — with intelligent handling of edge cases. Always review the output when converting XML with attributes or YAML with complex anchors and aliases."
            ]
          }
        ]
      },
    },
    {
      "id": 4,
      "slug": "base64-url-encoding-explained",
      "category": "encoding",
      "publishedAt": "2025-02-07",
      "readingMinutes": 6,
      "coverEmoji": "🔐",
      "relatedTools": ["text-to-base64", "base64-to-text", "url-encode", "url-decode", "html-encode"],
      "content": {
        "title": "Base64 and URL Encoding: A Developer's Complete Reference",
        "description": "Understand Base64, URL encoding, and HTML entity encoding — what they are, when to use each, and the common mistakes developers make with encoding.",
        "sections": [
          {
            "heading": "What Is Base64 Encoding?",
            "paragraphs": [
              "Base64 is an encoding scheme that converts binary data into ASCII text by representing every 3 bytes of binary data as 4 ASCII characters drawn from a 64-character alphabet (A–Z, a–z, 0–9, +, /). The name '64' refers to this 64-character alphabet — each character encodes exactly 6 bits of information.",
              "Base64 was invented to solve a specific problem: older communication protocols (like email's SMTP) were designed for 7-bit ASCII text, not arbitrary binary data. If you tried to send a JPEG image or a PDF as raw bytes through such a system, the binary bytes would be misinterpreted as control characters and corrupt the data. Base64 encodes the binary as safe ASCII text, making it transport-safe."
            ]
          },
          {
            "heading": "Common Uses of Base64",
            "paragraphs": [
              "Email attachments: MIME (Multipurpose Internet Mail Extensions) uses Base64 to encode binary files attached to emails. This is why email attachments are encoded in Base64 before transmission.",
              "Data URIs: You can embed images directly in HTML or CSS using data URIs: `<img src='data:image/png;base64,iVBORw0KGgo...'>`. This eliminates a separate HTTP request for small images like icons.",
              "API authentication: HTTP Basic Authentication encodes credentials as `username:password` in Base64 and sends them in the `Authorization` header. Note that Base64 is not encryption — the credentials are trivially reversible. Always use HTTPS.",
              "JWT tokens: The header and payload of a JWT (JSON Web Token) are Base64URL-encoded (a variant that replaces `+` with `-` and `/` with `_` to be URL-safe). Decoding a JWT is simply reversing this Base64URL encoding — there is no secret key required to read the payload."
            ]
          },
          {
            "heading": "URL Encoding (Percent Encoding)",
            "paragraphs": [
              "URL encoding (officially called percent-encoding) converts characters that are illegal or have special meaning in URLs into a safe representation. It works by replacing each unsafe byte with a `%` followed by the two-digit hexadecimal representation of the byte value. A space becomes `%20`, an ampersand becomes `%26`, and `=` becomes `%3D`.",
              "Why is this needed? URLs are restricted to a subset of ASCII characters. Characters outside this subset — spaces, accented letters, Chinese characters, emoji, and special punctuation — must be encoded before inclusion in a URL. Query string values are especially prone to needing encoding because they often contain arbitrary user input.",
              "Always encode query parameter values, not the entire URL. Encoding the full URL (including `://` and path slashes) will break the URL. Encode only the values: `https://example.com/search?q=${encodeURIComponent(userInput)}`."
            ]
          },
          {
            "heading": "HTML Entity Encoding",
            "paragraphs": [
              "HTML entity encoding converts characters that have special meaning in HTML into safe entity references. The five characters that must be encoded in HTML content are `<` (`&lt;`), `>` (`&gt;`), `&` (`&amp;`), `\"` (`&quot;`), and `'` (`&#39;`).",
              "Failing to HTML-encode user input before rendering it in a page is the root cause of Cross-Site Scripting (XSS) — one of the most common and dangerous web security vulnerabilities. If a user enters `<script>alert('xss')</script>` and your application renders it unencoded, the script executes in every visitor's browser.",
              "Use DevConvert's HTML Encode tool to safely encode strings before embedding them in HTML templates. This is especially useful when generating HTML from server-side code where template engines might not auto-escape by default."
            ]
          },
          {
            "heading": "Base64 vs URL Encoding vs HTML Encoding: Choosing the Right One",
            "paragraphs": [
              "Use Base64 when: transmitting binary data over text-based protocols, embedding images in data URIs, or encoding credentials for HTTP Basic Auth. Remember Base64 increases data size by ~33%.",
              "Use URL encoding when: building query strings, encoding path segments containing special characters, or working with form data submitted via GET requests.",
              "Use HTML encoding when: rendering any user-generated content in an HTML page, generating HTML from code, or inserting dynamic values into HTML attributes."
            ]
          }
        ]
      },
    },
    {
      "id": 5,
      "slug": "jwt-token-decode-guide",
      "category": "encoding",
      "publishedAt": "2025-02-14",
      "readingMinutes": 5,
      "coverEmoji": "🔑",
      "relatedTools": ["jwt-decode", "text-to-base64", "base64-to-text"],
      "content": {
        "title": "JWT Tokens Explained: How to Decode and Inspect Them",
        "description": "Learn the structure of JSON Web Tokens, how to decode and inspect JWT claims, understand expiry and signature verification, and debug authentication issues faster.",
        "sections": [
          {
            "heading": "What Is a JWT?",
            "paragraphs": [
              "A JSON Web Token (JWT) is a compact, URL-safe token format used to represent claims between two parties. JWTs are commonly used for authentication and authorization in web applications and APIs. When a user logs in, the server issues a JWT that the client stores and sends with every subsequent request to prove identity.",
              "A JWT consists of three parts separated by dots: `header.payload.signature`. Each part is independently Base64URL-encoded. The header describes the algorithm used for signing. The payload contains the claims (data). The signature verifies authenticity."
            ]
          },
          {
            "heading": "Decoding vs Verifying: A Critical Distinction",
            "paragraphs": [
              "Decoding a JWT means reversing the Base64URL encoding to read the header and payload. Anyone can decode any JWT — no key required. DevConvert's JWT Decode tool does exactly this: it shows you the human-readable claims inside any token.",
              "Verifying a JWT means checking the cryptographic signature to confirm the token was issued by a trusted party and hasn't been tampered with. This requires the secret key (for HS256) or the public key (for RS256). Never trust a JWT payload on the client side without server-side verification.",
              "Use the JWT Decode tool for debugging — to check what claims a token contains, whether it's expired, and what data is being sent to your API. Never use client-side decoding as a security decision."
            ]
          },
          {
            "heading": "Common JWT Claims and What They Mean",
            "paragraphs": [
              "`iss` (issuer): Identifies the principal that issued the JWT. Often a URL like `https://auth.example.com`.",
              "`sub` (subject): The principal this JWT is about — typically a user ID.",
              "`aud` (audience): Who this token is intended for — your API's identifier.",
              "`exp` (expiration): A Unix timestamp after which the token must be rejected. Always check this.",
              "`iat` (issued at): When the token was created. Useful for detecting token age.",
              "`nbf` (not before): The token must not be accepted before this time.",
              "Custom claims: Applications often add fields like `roles`, `permissions`, `email`, or `plan` to communicate user attributes to services."
            ]
          },
          {
            "heading": "Common JWT Issues and How to Debug Them",
            "paragraphs": [
              "Token expired (`exp` in the past): The client needs to refresh the token. Inspect the `exp` field using the JWT Decode tool to confirm the exact expiry time in your local timezone.",
              "Signature invalid: The token was signed with a different key, or the token was tampered with in transit. This always requires server-side investigation — decoding alone cannot diagnose signature issues.",
              "Wrong audience: Your API rejected the token because the `aud` claim doesn't match your API's expected audience. Check the `aud` field in the decoded payload.",
              "Missing claims: Your authorization logic expects a `roles` field but it's not in the payload. The JWT Decode tool lets you immediately see all claims and identify what's missing."
            ]
          }
        ]
      },
    },
    {
      "id": 6,
      "slug": "css-to-tailwind-migration",
      "category": "css",
      "publishedAt": "2025-02-21",
      "readingMinutes": 7,
      "coverEmoji": "🎨",
      "relatedTools": ["css-to-tailwind", "css-to-scss", "css-minify", "css-beautify"],
      "content": {
        "title": "CSS to Tailwind: A Practical Migration Guide",
        "description": "Learn how to convert vanilla CSS to Tailwind utility classes efficiently, understand when migration makes sense, and handle CSS patterns that have no direct Tailwind equivalent.",
        "sections": [
          {
            "heading": "Why Migrate to Tailwind CSS?",
            "paragraphs": [
              "Tailwind CSS takes a utility-first approach: instead of writing `.button { background-color: blue; padding: 8px 16px; border-radius: 4px; }`, you compose classes directly in HTML: `<button class='bg-blue-500 px-4 py-2 rounded'>`. This eliminates the need to invent class names, prevents CSS files from growing indefinitely, and makes styles immediately visible in the component markup.",
              "Teams report significantly smaller CSS bundle sizes with Tailwind because Tailwind's build process purges unused classes — your production CSS only contains what you actually use. With vanilla CSS, every class you ever wrote ships to every user."
            ]
          },
          {
            "heading": "How to Convert CSS to Tailwind Classes",
            "paragraphs": [
              "The conversion process maps CSS property-value pairs to Tailwind's class naming convention. Most CSS properties have direct Tailwind equivalents: `margin-top: 16px` maps to `mt-4` (Tailwind uses a 4px base unit by default), `display: flex` maps to `flex`, `font-weight: 700` maps to `font-bold`.",
              "DevConvert's CSS to Tailwind converter handles the most common CSS declarations automatically. Paste your CSS rule, and the tool outputs the equivalent Tailwind classes. This is especially useful when you receive CSS from a designer (via Figma's CSS export, for example) and need to convert it to component classes.",
              "Some CSS patterns have no direct Tailwind equivalent, particularly complex selectors, pseudo-elements like `::before`, custom animations, and highly specific values (e.g., `margin: 13px`). For these, Tailwind offers escape hatches: arbitrary values like `mt-[13px]` and the `@apply` directive for extracting repeated patterns."
            ]
          },
          {
            "heading": "CSS to SCSS: Organizing Vanilla CSS",
            "paragraphs": [
              "If you're not ready to fully migrate to Tailwind, converting from CSS to SCSS is a meaningful intermediate step. SCSS adds variables, nesting, mixins, and imports to CSS without changing the output style.",
              "DevConvert's CSS to SCSS converter focuses on one specific conversion: CSS custom properties (CSS variables) to SCSS variables. `--color-primary: #3b82f6` becomes `$color-primary: #3b82f6`. This is useful when migrating a design system from CSS variables to a SCSS-based design token system.",
              "SCSS nesting lets you co-locate related styles: instead of writing `.card`, `.card:hover`, `.card .title` as separate rules, you nest them inside a single `.card {}` block. This mirrors component structure and makes stylesheets dramatically easier to navigate."
            ]
          },
          {
            "heading": "CSS Minification and Beautification",
            "paragraphs": [
              "CSS minification removes all whitespace, comments, and redundant semicolons to produce the smallest possible stylesheet. A typical CSS file can be reduced by 30–50% through minification. Always minify production CSS to reduce page load time.",
              "CSS beautification does the opposite: it takes minified or poorly formatted CSS and adds consistent indentation, line breaks, and spacing. This is essential when you receive third-party CSS or legacy stylesheets that need to be read, understood, and modified. You can't maintain what you can't read."
            ]
          }
        ]
      },
    },
    {
      "id": 7,
      "slug": "unix-timestamp-explained",
      "category": "utility",
      "publishedAt": "2025-03-07",
      "readingMinutes": 5,
      "coverEmoji": "🕐",
      "relatedTools": ["timestamp-to-date", "date-to-timestamp"],
      "content": {
        "title": "Unix Timestamps Explained: Dates Without Borders",
        "description": "Learn what Unix timestamps are, why they're the universal time format for software, how to convert them to human-readable dates, and the common timestamp pitfalls developers encounter.",
        "sections": [
          {
            "heading": "What Is a Unix Timestamp?",
            "paragraphs": [
              "A Unix timestamp (also called Unix time, POSIX time, or epoch time) is the number of seconds that have elapsed since January 1, 1970, at 00:00:00 UTC — a moment known as the Unix epoch. For example, the timestamp `1700000000` represents November 14, 2023, at 22:13:20 UTC.",
              "The Unix epoch was chosen somewhat arbitrarily when the Unix operating system was created in the early 1970s. What matters is that it established a single, consistent reference point that every system agrees on — regardless of timezone, locale, or calendar system."
            ]
          },
          {
            "heading": "Seconds vs Milliseconds: The Most Common Timestamp Bug",
            "paragraphs": [
              "The original Unix timestamp counts seconds. JavaScript's `Date.now()` returns milliseconds. This 1000x difference is the most common timestamp bug in web development. A timestamp of `1700000000` is a date in 2023. A timestamp of `1700000000000` is the same date in milliseconds. Pass the wrong one and your date calculation is off by 31 years.",
              "Always check your timestamps: if the number has 10 digits, it's seconds. If it has 13 digits, it's milliseconds. DevConvert's Timestamp to Date tool accepts both formats automatically and displays the correct date in your local timezone, UTC, and ISO 8601 format."
            ]
          },
          {
            "heading": "Why Timestamps Are Better Than Date Strings",
            "paragraphs": [
              "Date strings like `12/01/2024` are ambiguous. Is that December 1st or January 12th? American and European conventions differ. Date strings also carry implicit timezone assumptions — `2024-01-15 14:30:00` stored in a database might be local time, UTC, or the server's timezone, depending on who wrote the code.",
              "Timestamps are unambiguous. `1705328400` is one single moment in time, globally. Storing and comparing timestamps avoids timezone conversion bugs entirely. Display the date in the user's local timezone at render time — store it as a timestamp everywhere else.",
              "This pattern — store as timestamp, display as local time — is the gold standard for any application with users in multiple timezones, which is almost every application today."
            ]
          },
          {
            "heading": "The Year 2038 Problem",
            "paragraphs": [
              "32-bit systems store Unix timestamps as signed 32-bit integers. The maximum value of a signed 32-bit integer is 2,147,483,647 — which corresponds to January 19, 2038, at 03:14:07 UTC. After that moment, 32-bit timestamp counters will overflow and wrap back to negative values, causing dates to show as 1901.",
              "Modern 64-bit systems extended Unix time to 64-bit integers, which won't overflow for approximately 292 billion years. Most modern software already uses 64-bit timestamps, but embedded systems and legacy code may still use 32-bit integers. If you're maintaining old systems, this is worth auditing."
            ]
          }
        ]
      },
    },
    {
      "id": 8,
      "slug": "number-bases-binary-hex-decimal",
      "category": "utility",
      "publishedAt": "2025-03-14",
      "readingMinutes": 6,
      "coverEmoji": "🔢",
      "relatedTools": ["dec-to-bin", "bin-to-dec", "dec-to-hex", "hex-to-dec"],
      "content": {
        "title": "Binary, Hex, and Decimal: Number Systems Every Developer Should Know",
        "description": "Master the three number systems you'll use every day as a developer. Understand binary for bitwise operations, hexadecimal for colors and memory, and decimal conversions that power your code.",
        "sections": [
          {
            "heading": "Why Developers Need to Understand Number Bases",
            "paragraphs": [
              "Computers operate in binary (base-2) at the hardware level. Humans think in decimal (base-10). Hexadecimal (base-16) bridges the gap — it's compact enough for humans to read while mapping perfectly to binary. Every developer encounters all three when working with colors, memory addresses, bitwise operations, debugging, low-level code, and networking.",
              "You don't need to perform mental arithmetic in hex — that's what tools are for. But you do need to recognize what a number base represents and know when a value in your code or logs is hex, binary, or decimal."
            ]
          },
          {
            "heading": "Binary (Base-2): The Language of Computers",
            "paragraphs": [
              "Binary uses only two digits: 0 and 1. Each digit is a bit. Eight bits form a byte. A byte can represent values from 0 (00000000) to 255 (11111111). Modern computers process data in units of bytes, words (16-bit), double words (32-bit), and quad words (64-bit).",
              "Bitwise operators in programming (AND `&`, OR `|`, XOR `^`, NOT `~`, left shift `<<`, right shift `>>`) operate on the binary representation of integers. Understanding binary is essential for using these operators correctly — a common use case is setting, clearing, or checking individual flags in a bitmask."
            ]
          },
          {
            "heading": "Hexadecimal (Base-16): The Efficient Human-Readable Format",
            "paragraphs": [
              "Hexadecimal uses 16 symbols: 0–9 for values 0–9, and A–F for values 10–15. One hex digit represents exactly 4 bits (a nibble). Two hex digits represent exactly one byte. This perfect alignment with binary makes hex the preferred format for representing binary data to humans.",
              "You encounter hex everywhere as a developer: web colors (`#3b82f6` is blue), memory addresses in debuggers (`0x7fff5fbff8e8`), byte sequences in packet captures (`ff d8 ff e0` is the magic bytes of a JPEG), and UUID strings (`550e8400-e29b-41d4-a716-446655440000`).",
              "Converting hex to decimal: multiply each digit by its positional power of 16. `FF` = 15×16 + 15×1 = 255. Or use DevConvert's Hex to Decimal tool to convert instantly without mental arithmetic."
            ]
          },
          {
            "heading": "Practical Conversion Scenarios",
            "paragraphs": [
              "Reading web colors: CSS colors like `#1a2b3c` are three hex pairs — `1a` (red), `2b` (green), `3c` (blue). Converting each to decimal gives RGB(26, 43, 60). DevConvert's color tools handle all conversions between HEX, RGB, and HSL.",
              "Debugging memory: When a debugger shows a stack address as `0x7ffd4a2b8c10`, you might need to calculate offsets. Converting the hex address to decimal, adding the offset, and converting back is a routine low-level debugging task.",
              "Working with file formats: Binary file formats use magic bytes to identify file types. JPEG files start with `FF D8 FF`. PNG files start with `89 50 4E 47`. Recognizing these hex patterns helps when inspecting raw file contents."
            ]
          }
        ]
      },
    }, {
      "id": 9,
      "slug": "color-formats-hex-rgb-hsl",
      "category": "colors",
      "publishedAt": "2025-03-21",
      "readingMinutes": 5,
      "coverEmoji": "🎨",
      "relatedTools": ["hex-to-rgb", "rgb-to-hex", "hsl-to-hex"],
      "content": {
        "title": "HEX, RGB, and HSL: Understanding Web Color Formats",
        "description": "Learn the differences between HEX, RGB, and HSL color formats, when to use each in your CSS, and how to convert between them accurately for any design system.",
        "sections": [
          {
            "heading": "The Three Color Models Explained",
            "paragraphs": [
              "Web colors can be expressed in three primary formats. HEX (`#3b82f6`) is a shorthand for the RGB model, expressing red, green, and blue values as two-digit hexadecimal numbers. RGB (`rgb(59, 130, 246)`) expresses the same three channels as integers 0–255. HSL (`hsl(217, 91%, 60%)`) expresses color as Hue (0–360°), Saturation (0–100%), and Lightness (0–100%).",
              "All three describe the same color space — the same colors are achievable in all three formats. The choice between them is a matter of workflow and readability."
            ]
          },
          {
            "heading": "When to Use HEX",
            "paragraphs": [
              "HEX is the format you'll see most in design handoffs, brand guidelines, and existing codebases. Figma exports colors as HEX by default. If you're given a brand color as `#1d4ed8`, use it as-is in your CSS — there's no reason to convert unless your workflow requires it.",
              "HEX is compact and copy-pasteable, but it's not great for programmatic manipulation. If you need to create a lighter or darker variant of a color, doing arithmetic on hex values is awkward. That's where HSL shines."
            ]
          },
          {
            "heading": "When to Use HSL",
            "paragraphs": [
              "HSL is the most developer-friendly format for building design systems and theme variables. The hue, saturation, and lightness model maps directly to how humans perceive color: hue is the 'color', saturation is 'how vivid', and lightness is 'how bright'.",
              "Creating color scales is trivial in HSL. Want a 9-step gray scale? Fix the hue at 220°, fix the saturation at 10%, and vary lightness from 10% to 90%. Creating the same scale from HEX values requires manual Photoshop work or a color library.",
              "Modern CSS supports `oklch()` and `oklch` color spaces, which are even more perceptually uniform than HSL. But HSL remains the practical standard for most production systems today."
            ]
          },
          {
            "heading": "When to Use RGBA and HSLA",
            "paragraphs": [
              "Both RGB and HSL have alpha-channel variants: RGBA and HSLA. The alpha channel controls opacity — 0 is fully transparent, 1 is fully opaque. Use these when you need semi-transparent colors, such as overlays, shadows, or frosted glass effects.",
              "Modern CSS also accepts a fourth value in `rgb()` and `hsl()` without the 'A' suffix: `rgb(59 130 246 / 0.5)`. This is the modern syntax; the older `rgba()` syntax is still valid and widely supported."
            ]
          }
        ]
      },
    }, {
      "id": 10,
      "slug": "markdown-to-html-guide",
      "category": "markup",
      "publishedAt": "2025-03-28",
      "readingMinutes": 5,
      "coverEmoji": "📝",
      "relatedTools": ["md-to-html", "html-to-md", "html-beautify", "html-minify"],
      "content": {
        "title": "Markdown to HTML: Converting Documentation and Content for the Web",
        "description": "Learn the Markdown to HTML conversion process, GitHub Flavored Markdown features, when to convert vs render Markdown natively, and how to format HTML for production.",
        "sections": [
          {
            "heading": "Why Markdown Exists",
            "paragraphs": [
              "Markdown was created by John Gruber in 2004 as a way to write formatted text using a plain-text syntax that reads naturally even before rendering. The goal: a syntax so clean that you don't need to see it rendered to understand the document.",
              "Today, Markdown is the default writing format for technical documentation, README files, GitHub issues and pull requests, blog posts (via static site generators like Hugo and Jekyll), and developer-facing content management systems."
            ]
          },
          {
            "heading": "GitHub Flavored Markdown: The Extended Standard",
            "paragraphs": [
              "GitHub extended the original Markdown spec with GitHub Flavored Markdown (GFM), which is now the most widely used variant. GFM adds: fenced code blocks with syntax highlighting (triple backticks), tables (pipe-separated), task lists (`- [ ]` and `- [x]`), autolinks, and strikethrough (`~~text~~`).",
              "DevConvert's Markdown to HTML converter supports full GFM: your tables, code blocks, task lists, and strikethrough all convert correctly. The output is a complete styled HTML page, ready to paste into any web context."
            ]
          },
          {
            "heading": "HTML Formatting: Beautify and Minify",
            "paragraphs": [
              "HTML Beautify adds consistent indentation and line breaks to HTML code. This is essential when working with HTML generated by tools, exported from other systems, or minified for production. Readable HTML is maintainable HTML.",
              "HTML Minify removes whitespace, comments, and unnecessary characters from HTML. For production websites, minifying HTML reduces page size and improves Time to First Byte. The savings are typically 5–20% of the HTML file size, which adds up over millions of page views.",
              "Always beautify before editing, minify before deploying. These two operations are the HTML hygiene equivalent of formatting your code before committing to version control."
            ]
          },
          {
            "heading": "Converting HTML Back to Markdown",
            "paragraphs": [
              "The reverse conversion — HTML to Markdown — is useful when migrating web content to a Markdown-based system. Blog posts exported from WordPress, documentation from Confluence, or web pages you want to archive in a readable format all benefit from HTML to Markdown conversion.",
              "The HTML to Markdown converter handles the most common HTML elements: headings, paragraphs, bold, italic, links, images, lists, and tables. Complex HTML with heavy JavaScript or inline styles converts with partial fidelity — the structural content is preserved, but dynamic behavior is naturally lost in the conversion."
            ]
          }
        ]
      },
    },
    {
      "id": 11,
      "slug": "csv-json-data-conversion",
      "category": "data",
      "publishedAt": "2025-04-04",
      "readingMinutes": 5,
      "coverEmoji": "📊",
      "relatedTools": ["csv-to-json", "json-to-csv", "json-to-sql"],
      "content": {
        "title": "CSV to JSON: Converting Spreadsheet Data for APIs and Databases",
        "description": "Learn how to convert CSV files to JSON arrays, handle common CSV edge cases like quoted fields and special characters, and use the converted data in APIs, databases, and JavaScript applications.",
        "sections": [
          {
            "heading": "Why CSV and JSON Are Both Still Essential",
            "paragraphs": [
              "CSV (Comma-Separated Values) and JSON serve different ecosystems. CSV is the universal format for tabular data — every spreadsheet application, database export tool, and data analytics platform can read and write CSV. JSON is the universal format for APIs and JavaScript applications.",
              "Converting between them is a routine data engineering task. You receive data exports from business systems (accounting software, CRMs, databases) as CSV and need to import them into an API. You have JSON from an API and need to analyze it in Excel. The CSV↔JSON conversion is a daily workflow for data engineers, backend developers, and analysts."
            ]
          },
          {
            "heading": "How CSV to JSON Conversion Works",
            "paragraphs": [
              "A CSV file is a plain text file where each line is a row of data, and values within each row are separated by commas (or sometimes semicolons or tabs). The first line is typically the header row — the column names. The converter reads the header, then uses those names as JSON keys for each subsequent row.",
              "The resulting JSON is an array of objects: one object per row, with keys from the header. A CSV with columns `name,age,city` and a row `Alice,30,Bangkok` becomes `{\"name\": \"Alice\", \"age\": 30, \"city\": \"Bangkok\"}`. DevConvert's converter also infers data types — numbers stay as numbers, not strings."
            ]
          },
          {
            "heading": "Edge Cases: Quoted Fields and Special Characters",
            "paragraphs": [
              "CSV's simplicity hides some complexity. When a field value contains a comma (like `Smith, John`), it must be wrapped in double quotes. When a field contains double quotes (like `He said \"hello\"`), the quotes are escaped by doubling them. A proper CSV parser handles all these cases; naive string splitting on commas does not.",
              "Tab-separated values (TSV) are a common CSV variant used when the data itself contains commas. Semicolon-separated values are the European standard (because European locales use commas as decimal separators). DevConvert's CSV to JSON converter handles standard CSV with proper RFC 4180 compliance."
            ]
          },
          {
            "heading": "JSON to SQL: Scaffolding Database Schemas",
            "paragraphs": [
              "One step beyond CSV: DevConvert's JSON to SQL converter generates both `CREATE TABLE` and `INSERT INTO` statements from a JSON array. This lets you take a sample JSON API response and instantly scaffold the database schema to store that data.",
              "The converter infers SQL column types from the JSON values: strings become `VARCHAR(255)`, numbers become `INTEGER` or `FLOAT`, booleans become `BOOLEAN`. The generated SQL is a starting point — you'll likely need to adjust column sizes, add indexes, and add foreign keys based on your application's requirements."
            ]
          }
        ]
      },
    },
    {
      "id": 12,
      "slug": "typescript-vs-javascript-migration",
      "category": "typescript",
      "publishedAt": "2025-04-09",
      "readingMinutes": 6,
      "coverEmoji": "⚡",
      "relatedTools": ["ts-to-js", "js-to-ts", "json-to-ts"],
      "content": {
        "title": "TypeScript vs JavaScript: When and How to Convert Between Them",
        "description": "Understand the real differences between TypeScript and JavaScript, when to migrate, and how to use the TS↔JS converters to handle both directions of conversion in your projects.",
        "sections": [
          {
            "heading": "TypeScript Is JavaScript, Plus a Type Layer",
            "paragraphs": [
              "TypeScript is a superset of JavaScript. Every valid JavaScript file is also a valid TypeScript file. TypeScript adds a type system on top — interfaces, generics, enums, union types, intersection types, and type guards — that all get erased at compile time. The JavaScript that runs in browsers or Node.js is pure JavaScript; TypeScript is a development-time tool.",
              "This architecture has an important implication: migrating from JavaScript to TypeScript is additive, not destructive. You're adding types, not changing behavior. You can migrate one file at a time, one function at a time. You don't need a big-bang rewrite."
            ]
          },
          {
            "heading": "When TypeScript Is Worth the Investment",
            "paragraphs": [
              "TypeScript pays off in direct proportion to project size and team size. A solo weekend project in vanilla JavaScript is fine. A 6-person team working on a production API for 2 years without TypeScript is a maintenance nightmare — every function call is a guess about what the arguments should be, and refactoring is terrifying because there's no compiler to catch breakage.",
              "The break-even point is roughly: any project that will be modified by more than one person, will last longer than 3 months, or has more than ~20 files. Below that threshold, TypeScript's setup cost outweighs its benefits. Above it, TypeScript's benefits compound with project complexity.",
              "Specific signals that TypeScript is overdue: you're relying on runtime `console.log` debugging to discover the shape of objects; your team's pull requests frequently have bugs where wrong types were passed; you dread refactoring because you can never be sure what breaks."
            ]
          },
          {
            "heading": "TypeScript to JavaScript: Stripping Types",
            "paragraphs": [
              "The TypeScript to JavaScript converter strips all TypeScript-specific syntax: interface declarations, type annotations, generic type parameters, type assertion (`as` keyword), access modifiers (`public`, `private`, `protected`), and `enum` declarations are all removed or simplified.",
              "When do you need TS to JS conversion? When targeting environments that cannot run TypeScript — older Node.js versions without a transpiler, browser environments that require plain JavaScript, or when contributing to a JavaScript-only library. DevConvert's TS to JS tool handles the most common patterns without requiring a full TypeScript compiler toolchain.",
              "Note: the converter handles syntax, not semantics. Runtime behavior that depended on TypeScript-specific features (like `enum` values) needs manual review after conversion."
            ]
          },
          {
            "heading": "JavaScript to TypeScript: Adding Types Incrementally",
            "paragraphs": [
              "The JavaScript to TypeScript converter converts `require()` imports to ES module `import` syntax and adds initial type annotations. This is a starting point for TypeScript migration — the generated TypeScript will likely use `any` in many places, which you should progressively replace with accurate types.",
              "The migration strategy that works best: rename files from `.js` to `.ts`, add `// @ts-check` comments or enable strict mode gradually, and fix type errors file by file. Use the JSON to TypeScript tool to generate accurate interfaces for your API data shapes. Use the JS to TS tool for the mechanical conversion part."
            ]
          }
        ]
      },
    }



  ],
}

export type Translations = {
  [K in keyof typeof en]:
  (typeof en)[K] extends (...args: infer A) => string
  ? (...args: A) => string
  : (typeof en)[K] extends readonly (infer U)[]
  ? readonly U[]
  : string
}

export default en
