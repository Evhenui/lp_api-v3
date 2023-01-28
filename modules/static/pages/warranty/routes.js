import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'warranty',
  path: '/warranty',
  file: path.resolve('./index.vue'),
};
