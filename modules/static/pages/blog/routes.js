import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'blog',
  path: '/',
  file: path.resolve('./pages/index.vue'),
};
