import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import Translationen from './locales/Translationen.json';
import Translationfr from './locales/Translationfr.json';

i18n
  .use(Backend) // Ajoutez le backend si vous utilisez i18next-http-backend
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: Translationen },
      fr: { translation: Translationfr },
    },
    
    lng: 'fr', 
    fallbackLng: 'fr', 
    interpolation: {
      escapeValue: false, 
    },
  }
);

export default i18n;
