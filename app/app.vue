<script setup lang="ts">
import useUserModel from '~/stores/userModel';

useHead({
  bodyAttrs: {
    class: 'bg-neutral-800 text-white'
  }
})

const userModel = useUserModel();

const { data: version, error: errorData } = await useFetch('/api/version');
const { data: user, error: errorUser } = await useFetch('/api/user', {
  query: { name: '0c0f15dc-31da-49f1-b496-d05e9cccaf5b' },
});

const dbVersion = computed(() => (version.value
  && typeof version.value === 'object'
  && 'version' in version.value)
  ? (version.value as { version: string }).version : 'No version');
const userEmail = computed(() => userModel.value ? userModel.value : 'No user');

</script>

<template>
  <UApp>
    <NuxtLayout>
      <!-- Database Version -->
      <div>
        <h1>Database Version</h1>
        <p v-if="version">{{ dbVersion }}</p>
        <p v-else-if="errorData">Error fetching version</p>
      </div>
      <!-- User -->
      <div>
        <h1>User</h1>
        <p v-if="user">{{ userEmail }}</p>
        <p v-else-if="errorUser">Error fetching user</p>
      </div>
      <!-- Pages -->
      <Alert />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>