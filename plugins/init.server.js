import { useCategoriesStore } from '~/store/categoriesStore';
import { useI18nStore } from '~/store/i18nStore';

export default defineNuxtPlugin(async (nuxtApp) => {
  const categories = useCategoriesStore(nuxtApp.$pinia);
  const translations = useI18nStore(nuxtApp.$pinia);

  const promises = [
    new Promise((resolve, reject) => {
      resolve(categories.fetch());
    }),
    new Promise((resolve, reject) => {
      resolve(translations.fetch());
    }),
  ];

  const route = useRoute();

  if (route.prefetch) {
    const routePrefetchPromise = route.prefetch(nuxtApp, route);

    promises.push(...routePrefetchPromise);
  }

  await Promise.all(promises);
});
