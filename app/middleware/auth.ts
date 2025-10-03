export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = true;

  console.log(`To: ${String(to.name)}`);
  console.log(`From: ${String(from.name)}`);

  if (!isLoggedIn) {
    //return navigateTo(to.fullPath);
    return navigateTo('/login');
  }
})