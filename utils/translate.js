import { useI18nStore } from '~/store/i18nStore';

export const _T = (keyText) => {
  try {
    const result = useI18nStore().getTranslationByLangAndKey(keyText);
    return result;
  } catch {
    return keyText;
  }
};
