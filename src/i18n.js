import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationsFR from "./lang/fr.json";
import translationsEN from "./lang/en.json";
import translationsAR from "./lang/ar.json";

const resources = {
  en: {
    translation: translationsEN,
  },
  fr: {
    translation: translationsFR,
  },
  ar: {
    translation: translationsAR,
  },
};

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    lng: "fr",
    interpolation: {
      espaceValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
