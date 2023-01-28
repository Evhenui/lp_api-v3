import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'home',
  path: '/',
  file: path.resolve('./pages/index.vue'),
  isMain: true,
};
