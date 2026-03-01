import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CookiePreferences {
  necessary: boolean; // Always true
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentState {
  hasConsented: boolean;
  preferences: CookiePreferences;
  showBanner: boolean;
  acceptAll: () => void;
  denyAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  resetConsent: () => void;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false
};

export const useCookieStore = create<CookieConsentState>()(
  persist(
    (set) => ({
      hasConsented: false,
      preferences: defaultPreferences,
      showBanner: true,

      acceptAll: () => {
        set({
          hasConsented: true,
          showBanner: false,
          preferences: {
            necessary: true,
            functional: true,
            analytics: true,
            marketing: true
          }
        });
      },

      denyAll: () => {
        set({
          hasConsented: true,
          showBanner: false,
          preferences: {
            necessary: true,
            functional: false,
            analytics: false,
            marketing: false
          }
        });
      },

      savePreferences: (prefs) => {
        set({
          hasConsented: true,
          showBanner: false,
          preferences: { ...prefs, necessary: true }
        });
      },

      resetConsent: () => {
        set({
          hasConsented: false,
          showBanner: true,
          preferences: defaultPreferences
        });
      }
    }),
    {
      name: 'vizage-cookie-consent'
    }
  )
);
