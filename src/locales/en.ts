const en = {
  // ── Nav ──────────────────────────────────────────────────────────────────
  allTools: 'All Tools',
  github: 'GitHub',

  // ── Home ─────────────────────────────────────────────────────────────────
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
    { name: 'Google AdSense',   url: 'https://policies.google.com/privacy', desc: 'Advertising' },
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
} as const

export type Translations = {
  [K in keyof typeof en]: (typeof en)[K] extends (...args: infer A) => string
    ? (...args: A) => string
    : (typeof en)[K] extends readonly { name: string; url: string; desc: string }[]
    ? { name: string; url: string; desc: string }[]
    : (typeof en)[K] extends readonly string[]
    ? string[]
    : string
}

export default en
