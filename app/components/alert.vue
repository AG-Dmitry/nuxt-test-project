<script setup lang="ts">
import useCounterModel from '~/stores/counterModel';
import useUserModel from '~/stores/userModel';

const counterModel = useCounterModel();
const userModel = useUserModel();

const alertColor = computed(() => userModel.value ? 'bg-green-700' : 'bg-red-700');
</script>

<template>
  <p class="bg-cyan-700 mb-2 px-2 py-1 rounded text-center">
    This is an alert component. Counter: {{ counterModel.value }}
  </p>
  <p class="mb-2 px-2 py-1 rounded text-center" :class=alertColor>
    {{ userModel.value ? 'Logged in' : 'Logged out' }}
  </p>
</template>