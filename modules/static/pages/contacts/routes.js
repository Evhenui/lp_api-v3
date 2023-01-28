import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'contacts',
  path: '/contacts',
  file: path.resolve('./index.vue'),
};
