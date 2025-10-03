<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

definePageMeta({
  layout: 'default',
})
</script>


<template>
  <div class="DefaultLayout">
    <h1 class="m-8 text-5xl">Default layout</h1>
    <SpeedInsights />
    <slot />
  </div>
</template>