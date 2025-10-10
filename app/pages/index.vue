<script setup lang="ts">
useHead({
  title: 'Home Page',
  meta: [{
    name: 'description', content: 'This is the home page',
  }],
})

const { fetch } = useUtils();

definePageMeta({
  //layout: 'default',
  middleware: 'auth',
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="m-8 font-bold text-4xl">Hello Nuxt 4!</div>
    <button @click="fetch"
      class="bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 px-12 py-2 rounded text-3xl cursor-pointer">Fetch</button>
    <img class="m-8 w-100" src="~assets/images/who.jpg"></img>
  </div>
</template>