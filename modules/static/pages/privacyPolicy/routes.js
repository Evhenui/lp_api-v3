import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'privacy-policy',
  path: '/privacy-policy',
  file: path.resolve('./index.vue'),
};
