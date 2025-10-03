<script setup lang="ts">

useHead({
  bodyAttrs: {
    class: 'bg-neutral-800 text-white'
  }
})

</script>

<template>
  <NuxtLayout>
    <header>
      <ul class="flex flex-col gap-4 m-8">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/counter">Counter</NuxtLink>
        </li>
      </ul>
    </header>
    <Alert />
    <NuxtPage />
  </NuxtLayout>
</template>
