import LegalPage, { LegalParagraph, LegalList, LegalLink, LegalHighlight } from '@/components/LegalPage'
import { APP_CONFIG } from '@/config/app.config'
import { useI18n } from '@/contexts/I18nContext'

const LAST_UPDATED = 'January 1, 2025'

export default function PrivacyPolicyPage() {
  const { t } = useI18n()

  const sections = [
    {
      title: t.privacyIntroTitle,
      content: <LegalParagraph>{t.privacyIntroText}</LegalParagraph>,
    },
    {
      title: t.privacyDataTitle,
      content: (
        <>
          <LegalHighlight>
            <strong>🔒 {t.privacyDataText}</strong>
          </LegalHighlight>
          <LegalParagraph>{t.privacyDataLocal}</LegalParagraph>
          <LegalList items={t.privacyDataLocalItems as unknown as string[]} />
          <LegalParagraph>{t.privacyDataAnalytics}</LegalParagraph>
        </>
      ),
    },
    {
      title: t.privacyAdsTitle,
      content: (
        <>
          <LegalParagraph>{t.privacyAdsText}</LegalParagraph>
          <LegalParagraph>
            {t.privacyAdsOptOut}{' '}
            <LegalLink href="https://www.google.com/settings/ads">
              google.com/settings/ads
            </LegalLink>
          </LegalParagraph>
          <LegalParagraph>
            {t.privacyAdsPolicy}{' '}
            <LegalLink href="https://policies.google.com/privacy">
              policies.google.com/privacy
            </LegalLink>
          </LegalParagraph>
        </>
      ),
    },
    {
      title: t.privacyCookiesTitle,
      content: (
        <>
          <LegalParagraph>{t.privacyCookiesText}</LegalParagraph>
          <LegalList items={t.privacyCookiesItems as unknown as string[]} />
          <LegalParagraph>{t.privacyCookiesControl}</LegalParagraph>
        </>
      ),
    },
    {
      title: t.privacyThirdPartyTitle,
      content: (
        <>
          <LegalParagraph>{t.privacyThirdPartyText}</LegalParagraph>
          <ul style={{ margin: '8px 0', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {(t.privacyThirdPartyItems as unknown as { name: string; url: string; desc: string }[]).map((item) => (
              <li key={item.name}>
                <LegalLink href={item.url}>{item.name}</LegalLink>
                {' — '}{item.desc}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t.privacyChildrenTitle,
      content: <LegalParagraph>{t.privacyChildrenText}</LegalParagraph>,
    },
    {
      title: t.privacyGdprTitle,
      content: (
        <>
          <LegalParagraph>{t.privacyGdprText}</LegalParagraph>
          <LegalList items={t.privacyGdprItems as unknown as string[]} />
        </>
      ),
    },
    {
      title: t.privacyChangesTitle,
      content: <LegalParagraph>{t.privacyChangesText}</LegalParagraph>,
    },
    {
      title: t.privacyContactTitle,
      content: (
        <>
          <LegalParagraph>{t.privacyContactText}</LegalParagraph>
          <LegalHighlight>
            <div>📧 <strong>Email:</strong> <LegalLink href={`mailto:${APP_CONFIG.contactEmail}`}>{APP_CONFIG.contactEmail}</LegalLink></div>
            {/* <div style={{ marginTop: 4 }}>🌐 <strong>Website:</strong> <LegalLink href={APP_CONFIG.url}>{APP_CONFIG.url}</LegalLink></div> */}
          </LegalHighlight>
        </>
      ),
    },
  ]

  return (
    <LegalPage
      title={t.privacyTitle}
      lastUpdated={LAST_UPDATED}
      lastUpdatedLabel={t.privacyLastUpdated}
      sections={sections}
      seoDescription={`${APP_CONFIG.name} Privacy Policy — how we handle your data, Google AdSense advertising, cookies, and your rights.`}
      canonicalPath="/privacy"
    />
  )
}
