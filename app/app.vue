<script setup lang="ts">
import useUserModel from '~/stores/userModel';

useHead({
  bodyAttrs: {
    class: 'bg-neutral-800 text-white'
  }
})

const userModel = useUserModel();

const { data: version, error: errorData } = await useFetch('/api/version');
const { data: user, error: errorUser } = await useFetch('/api/user');

//////// Temporary interfaces ////////
interface Version extends Object {
  version: string;
}

interface User extends Object {
  user: {
    primaryEmail: string;
  };
}
//////// Temporary interfaces ////////

const dbVersion = computed(() => (version.value as Version | undefined)?.version);
const userEmail = computed(() => (user.value as User | undefined)?.user?.primaryEmail);

</script>

<template>
  <UApp>
    <NuxtLayout>
      <!-- Database Version -->
      <div>
        <h1>Database Version</h1>
        <p v-if="version">{{ dbVersion || 'No version' }}</p>
        <p v-else-if="errorData">Error fetching version</p>
      </div>
      <!-- User -->
      <div>
        <h1>User</h1>
        <p v-if="user">{{ userEmail || userModel.value || 'No user' }}</p>
        <p v-else-if="errorUser">Error fetching user</p>
      </div>
      <!-- Pages -->
      <Alert />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>