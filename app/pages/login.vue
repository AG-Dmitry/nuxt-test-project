<script setup lang="ts">
  const { sayHello } = useUtils();

  /*
  definePageMeta({
    layout: 'default',
  })
  */

  sayHello();
</script>

<template>
  <div class="flex flex-row">
    <SvgoArrow class="m-8" />
    <SvgoArrow class="m-8 rotate-180" />
  </div>
  <div class="m-8 font-bold text-4xl">Login page</div>
  <img class="m-8 w-200" src="~assets/images/who.jpg"></img>
</template>