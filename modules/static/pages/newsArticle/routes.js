import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'newArticle',
  path: '/newArticle',
  file: path.resolve('./pages/index.vue'),
};
