<script setup lang="ts">

useHead({
  bodyAttrs: {
    class: 'bg-neutral-800 text-white'
  }
})

</script>

<template>
  <UApp>
    <NuxtLayout>
      <header class="">
        <ul class="flex justify-center gap-12 mx-8 mb-8">
          <li class="flex items-center">
            <SvgoArrow />
          </li>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/counter">Counter</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/userinfo">User info</NuxtLink>
          </li>
          <li class="flex items-center">
            <SvgoArrow class="rotate-180" />
          </li>
        </ul>
      </header>
      <Alert />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>