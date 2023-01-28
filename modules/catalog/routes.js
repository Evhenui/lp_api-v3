import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'catalog',
  path: '/catalog',
  file: path.resolve('./components/Catalog.vue'),
};
