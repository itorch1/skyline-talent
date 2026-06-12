import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/translationEN.json';
import translationUKR from './locales/translationUKR.json';

const resources = {
  en: {
    translation: translationEN
  },
  ukr: {
    translation: translationUKR
  }
};

i18n
  .use(LanguageDetector) // Detects browser language setting
  .use(initReactI18next)  // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default to English if user language is unavailable
    interpolation: {
      escapeValue: false // React already protects from XSS attacks
    }
  });

export default i18n;