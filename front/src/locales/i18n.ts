import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import pl from './pl.json';
import en from './en.json';

i18next.use(initReactI18next).init({
    fallbackLng: localStorage.getItem('lang') || 'pl',
    resources: {
        pl: {
            translation: pl,
        },
        en: {
            translation: en,
        },
    },
});
