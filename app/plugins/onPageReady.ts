export default defineNuxtPlugin((nuxtApp) => { 
  nuxtApp.hook('page:finish', () => {
    console.log('Page is ready');
  });
});
