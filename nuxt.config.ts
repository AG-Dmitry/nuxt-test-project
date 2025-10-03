import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
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
  },
  vite: {
    plugins: [tailwindcss()],
  },
  svgo: {
    autoImportPath: './../app/assets/icons/',
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@pinia/nuxt',
    'nuxt-svgo',
    '@vueuse/nuxt',
  ],
  css: ['./../app/assets/css/main.css'],
  hooks: {
    ready: () => {
      console.log('Nuxt is ready');
    },
  },
});
