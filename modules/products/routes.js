import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'category',
  path: '/:categorySlug',
  file: path.resolve('./pages/index.vue'),
};
