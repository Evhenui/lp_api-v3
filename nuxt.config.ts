import route from './routes';

export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/index.scss" as *;',
        },
      },
    },
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push(...route);
    },
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiRoot: 'https://dev.api.logicpower.ua/user',
    },
  },
});
