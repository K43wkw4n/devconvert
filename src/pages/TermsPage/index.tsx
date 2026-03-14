import LegalPage, { LegalParagraph, LegalList, LegalLink, LegalHighlight } from '@/components/LegalPage'
import { APP_CONFIG } from '@/config/app.config'
import { useI18n } from '@/contexts/I18nContext'

const LAST_UPDATED = 'January 1, 2025'

export default function TermsPage() {
  const { t } = useI18n()

  const sections = [
    {
      title: t.termsIntroTitle,
      content: <LegalParagraph>{t.termsIntroText}</LegalParagraph>,
    },
    {
      title: t.termsServiceTitle,
      content: (
        <>
          <LegalParagraph>{t.termsServiceText}</LegalParagraph>
          <LegalHighlight>
            🔒 All processing runs locally in your browser. DevConvert never receives, stores, or transmits your code or data.
          </LegalHighlight>
        </>
      ),
    },
    {
      title: t.termsUseTitle,
      content: (
        <>
          <LegalParagraph>{t.termsUseText}</LegalParagraph>
          <LegalList items={t.termsUseItems as unknown as string[]} />
        </>
      ),
    },
    {
      title: t.termsIpTitle,
      content: (
        <>
          <LegalParagraph>{t.termsIpText}</LegalParagraph>
          <LegalParagraph>{t.termsIpUser}</LegalParagraph>
        </>
      ),
    },
    {
      title: t.termsDisclaimerTitle,
      content: (
        <>
          <LegalParagraph>{t.termsDisclaimerText}</LegalParagraph>
          <LegalList items={t.termsDisclaimerItems as unknown as string[]} />
          <LegalHighlight>⚠️ {t.termsDisclaimerAdvice}</LegalHighlight>
        </>
      ),
    },
    {
      title: t.termsLiabilityTitle,
      content: (
        <>
          <LegalParagraph>{t.termsLiabilityText}</LegalParagraph>
          <LegalList items={t.termsLiabilityItems as unknown as string[]} />
        </>
      ),
    },
    {
      title: t.termsAdsTitle,
      content: <LegalParagraph>{t.termsAdsText}</LegalParagraph>,
    },
    {
      title: t.termsLinksTitle,
      content: <LegalParagraph>{t.termsLinksText}</LegalParagraph>,
    },
    {
      title: t.termsTerminationTitle,
      content: <LegalParagraph>{t.termsTerminationText}</LegalParagraph>,
    },
    {
      title: t.termsGoverningTitle,
      content: <LegalParagraph>{t.termsGoverningText}</LegalParagraph>,
    },
    {
      title: t.termsChangesTitle,
      content: <LegalParagraph>{t.termsChangesText}</LegalParagraph>,
    },
    {
      title: t.termsContactTitle,
      content: (
        <>
          <LegalParagraph>{t.termsContactText}</LegalParagraph>
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
      title={t.termsTitle}
      lastUpdated={LAST_UPDATED}
      lastUpdatedLabel={t.termsLastUpdated}
      sections={sections}
      seoDescription={`${APP_CONFIG.name} Terms of Service — acceptable use, disclaimer of warranties, limitation of liability, and advertising policy.`}
      canonicalPath="/terms"
    />
  )
}
