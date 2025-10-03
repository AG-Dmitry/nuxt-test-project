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
//sayHello();
</script>

<template>
  <div class="flex flex-row">
    <SvgoArrow class="m-8" />
    <SvgoArrow class="m-8 rotate-180" />
  </div>
  <div class="m-8 font-bold text-4xl">Hello Nuxt 4!</div>
  <button @click="fetch"
    class="bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 ml-8 px-12 py-2 rounded text-3xl cursor-pointer">Fetch</button>
  <img class="m-8 w-200" src="~assets/images/who.jpg"></img>
</template>