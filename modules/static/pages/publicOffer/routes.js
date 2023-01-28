import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'public-offer',
  path: '/public-offer',
  file: path.resolve('./index.vue'),
};
