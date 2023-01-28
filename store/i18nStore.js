import axios from 'axios';
import { defineStore } from 'pinia';
import { useLanguageFilterStore } from './languageFilterStore';
import languages from '~/utils/languages';

export const useI18nStore = defineStore({
  id: 'i18nStore',
  state: () => {
    return { translations: {} };
  },
  actions: {
    async fetch() {
      try {
        const { data } = await axios.get(
          'https://dev.api.logicpower.ua/user/shared/export/translations',
        );

        console.log(
          `Translations fetched. Total item(s): ${Object.keys(data).length}`,
        );

        const result = {};

        languages.forEach((lang) => {
          result[lang.synonym] = {};

          if (lang.default) {
            useLanguageFilterStore().setTranslationLanguage(lang);
          }

          for (let key in data) {
            result[lang.synonym][key] = data[key][lang.name];
          }
        });

        this.translations = result;
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    getTranslationsByLang: (state) => {
      return (lang) => state.translations[lang];
    },
    getTranslationByLangAndKey: (state) => {
      const lang = useLanguageFilterStore().getTranslationLanguage;

      return (key) => {
        if (state.translations[lang][key] === undefined) return key;
        return state.translations[lang][key];
      };
    },
  },
});
