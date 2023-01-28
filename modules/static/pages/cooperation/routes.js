import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'cooperation',
  path: '/cooperation',
  file: path.resolve('./index.vue'),
};
