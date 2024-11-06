import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json';
import translationAM from './am.json';
import translationOR from './or.json';
// Define resources
const resources = {
  en: { translation: translationEN },
  or: { translation: translationOR },
  am: { translation: translationAM },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en', // Set default language
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
