import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'product',
  path: '/:categorySlug/:productSlug',
  file: path.resolve('./components/ProductCard.vue'),
};
