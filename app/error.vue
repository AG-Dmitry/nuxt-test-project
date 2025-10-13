<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: 'Page not found',
  description: 'The page you are looking for does not exist.'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <UApp>
    <UError :error="{
      statusCode: error.statusCode,
      statusMessage: error.statusCode === 404 ? 'Page not found' : error.statusMessage,
      message: error.statusCode === 404 ? 'The page you are looking for does not exist.' : error.message
    }" />
  </UApp>
</template>