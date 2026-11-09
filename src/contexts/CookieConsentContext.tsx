import { createContext, useContext, useState, type ReactNode } from "react";

const STORAGE_KEY = "devconvert-cookie-consent-v1";

export interface CookieConsent {
  necessary: true;
  advertising: boolean;
  updatedAt: string;
}

interface CookieConsentContextValue {
  consent: CookieConsent | null;
  preferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  saveConsent: (advertising: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function readConsent(): CookieConsent | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const value: unknown = JSON.parse(stored);
    if (
      typeof value === "object" &&
      value !== null &&
      "necessary" in value &&
      value.necessary === true &&
      "advertising" in value &&
      typeof value.advertising === "boolean" &&
      "updatedAt" in value &&
      typeof value.updatedAt === "string"
    ) {
      return value as CookieConsent;
    }

    return null;
  } catch (error) {
    console.error("Unable to read cookie consent preferences", error);
    return null;
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(readConsent);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const saveConsent = (advertising: boolean) => {
    const nextConsent: CookieConsent = {
      necessary: true,
      advertising,
      updatedAt: new Date().toISOString(),
    };

    setConsent(nextConsent);
    setPreferencesOpen(false);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextConsent));
    } catch (error) {
      console.error("Unable to save cookie consent preferences", error);
    }
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        preferencesOpen,
        openPreferences: () => setPreferencesOpen(true),
        closePreferences: () => setPreferencesOpen(false),
        saveConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
}
