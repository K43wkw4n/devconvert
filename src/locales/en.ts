const en = {
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
