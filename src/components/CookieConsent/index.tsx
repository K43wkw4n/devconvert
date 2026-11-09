import { useEffect, useState } from "react";
import { Button, Checkbox, Modal } from "antd";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useI18n } from "@/contexts/I18nContext";
import { buildPath } from "@/routes";

export default function CookieConsentBanner() {
  const {
    consent,
    preferencesOpen,
    openPreferences,
    closePreferences,
    saveConsent,
  } = useCookieConsent();
  const { t } = useI18n();
  const [advertisingAllowed, setAdvertisingAllowed] = useState(false);

  useEffect(() => {
    if (preferencesOpen) {
      setAdvertisingAllowed(consent?.advertising ?? false);
    }
  }, [preferencesOpen, consent]);

  return (
    <>
      {!consent && (
        <aside
          aria-label={t.consentTitle}
          className="cookie-consent-banner"
          role="region"
        >
          <div className="cookie-consent-copy">
            <strong>{t.consentTitle}</strong>
            <p>
              {t.consentDescription}{" "}
              <a href={buildPath.privacy()}>{t.footerPrivacy}</a>
              {" · "}
              <a href={buildPath.cookies()}>{t.footerCookies}</a>
            </p>
          </div>
          <div className="cookie-consent-actions">
            <Button onClick={() => saveConsent(false)}>
              {t.consentRejectOptional}
            </Button>
            <Button onClick={openPreferences}>{t.consentCustomize}</Button>
            <Button type="primary" onClick={() => saveConsent(true)}>
              {t.consentAcceptAll}
            </Button>
          </div>
        </aside>
      )}

      <Modal
        title={t.consentTitle}
        open={preferencesOpen}
        onCancel={closePreferences}
        footer={[
          <Button key="reject" onClick={() => saveConsent(false)}>
            {t.consentRejectOptional}
          </Button>,
          <Button
            key="save"
            type="primary"
            onClick={() => saveConsent(advertisingAllowed)}
          >
            {t.consentSave}
          </Button>,
        ]}
      >
        <p>{t.consentDescription}</p>
        <div className="cookie-consent-option">
          <Checkbox checked disabled>
            <strong>{t.consentNecessary}</strong>
          </Checkbox>
          <p>{t.consentNecessaryDescription}</p>
        </div>
        <div className="cookie-consent-option">
          <Checkbox
            checked={advertisingAllowed}
            onChange={(event) => setAdvertisingAllowed(event.target.checked)}
          >
            <strong>{t.consentAdvertising}</strong>
          </Checkbox>
          <p>{t.consentAdvertisingDescription}</p>
        </div>
        <a href={buildPath.cookies()} onClick={closePreferences}>
          {t.footerCookies}
        </a>
      </Modal>
    </>
  );
}
