import languages from '~/utils/languages';

export const useLanguageFilterStore = defineStore({
  id: 'languageFilterStore',
  state: () => {
    return {
      languageFilter: languages.map((el) => el.synonym),
      languageDisplayNames: languages.map((el) => el.display),
      translationLanguage: undefined,
      userLanguage: undefined,
    };
  },
  actions: {
    setTranslationLanguage(lang) {
      this.translationLanguage = lang.synonym;
    },
    setUserLanguage(lang) {
      this.userLanguage = lang.synonym;
    },
  },
  getters: {
    getFiltersList: (state) => state.languageFilter,
    getLanguageDisplayNames: (state) => state.languageDisplayNames,
    getUserLanguage: (state) => state.userLanguage,
    getTranslationLanguage: (state) => state.translationLanguage,
  },
});
