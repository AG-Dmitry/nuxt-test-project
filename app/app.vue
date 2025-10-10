<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-neutral-800 text-white'
  }
})

const { data, error } = await useFetch('/api/version');

</script>

<template>
  <UApp>
    <NuxtLayout>
      <!-- Database Version -->
      <div>
        <h1>Database Version</h1>
        <p v-if="data">{{ data.version }}</p>
        <p v-else-if="error">Error fetching version</p>
      </div>
      <!-- Alert -->
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