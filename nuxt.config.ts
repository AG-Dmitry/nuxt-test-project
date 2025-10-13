import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-10-12',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      title: 'Nuxt Test Project',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: 'This is a test project for Nuxt 4' },
        { name: 'keywords', content: 'Nuxt, Vue, Tailwind' },
        { name: 'robots', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'generator', content: 'Nuxt 4' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  optimization: {
    treeShake: {
      composables: {
        client: { vue: ['onMounted'] },
        server: { vue: ['onServerPrefetch'] },
      },
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@pinia/nuxt',
    'nuxt-svgo',
    '@vueuse/nuxt',
    '@nuxt/ui',
  ],
  css: ['./../app/assets/css/main.css'],
  svgo: {
    autoImportPath: './../app/assets/icons/',
  },
  hooks: {
    ready: () => {
      console.log('Nuxt is ready');
    },
  },
});
