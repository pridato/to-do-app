import i18next from 'i18next';
import Encommon from './public/locales/en/common.json';
import Escommon from './public/locales/es/common.json';

export const defaultNS = 'common';
export const fallbackNS = 'fallback';

i18next
.init({
  debug: true,
  detection: {
    order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  },
  fallbackLng: 'es',
  defaultNS,
  fallbackNS,
  resources: {
    es: {
      common: Escommon,
    },
    en: {
      common: Encommon,
    },
  },
}
);

export default i18next;