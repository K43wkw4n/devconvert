import LegalPage, {
  LegalHighlight,
  LegalList,
  LegalLink,
  LegalParagraph,
} from "@/components/LegalPage";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { APP_CONFIG } from "@/config/app.config";
import { useI18n } from "@/contexts/I18nContext";
import { Button } from "antd";

const LAST_UPDATED = "November 9, 2026";

export default function CookiePolicyPage() {
  const { t } = useI18n();
  const { openPreferences } = useCookieConsent();

  const sections = [
    {
      title: t.cookieIntroTitle,
      content: <LegalParagraph>{t.cookieIntroText}</LegalParagraph>,
    },
    {
      title: t.cookieEssential,
      content: (
        <>
          <LegalParagraph>{t.cookieEssentialDescription}</LegalParagraph>
          <LegalList items={t.cookieEssentialItems as unknown as string[]} />
        </>
      ),
    },
    {
      title: t.cookieAdvertising,
      content: (
        <>
          <LegalParagraph>{t.cookieAdvertisingDescription}</LegalParagraph>
          <LegalParagraph>
            <LegalLink href="https://adsterra.com/privacy-policy/">
              Adsterra Privacy Policy
            </LegalLink>
          </LegalParagraph>
        </>
      ),
    },
    {
      title: t.cookieRetention,
      content: (
        <>
          <LegalParagraph>{t.cookieRetentionDescription}</LegalParagraph>
          <LegalHighlight>
            <Button onClick={openPreferences}>{t.manageCookies}</Button>
          </LegalHighlight>
        </>
      ),
    },
  ];

  return (
    <LegalPage
      title={t.cookieTitle}
      lastUpdated={LAST_UPDATED}
      lastUpdatedLabel={t.privacyLastUpdated}
      sections={sections}
      seoDescription={`${APP_CONFIG.name} Cookie Policy — what browser storage and advertising technologies are used and how to manage consent.`}
      canonicalPath="/cookies"
    />
  );
}
