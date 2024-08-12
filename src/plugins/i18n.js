import { createI18n } from "vue-i18n";

const messages = {
  ru: {
    hello: "Привет!",
  },
  uz: {
    hello: "Salom",
  },
  en: {
    hello: "Hello",
  },
};

const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "uz",
  messages,
});

export default i18n;
