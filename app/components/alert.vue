<script setup lang="ts">
import { useCounterModel } from '~/stores/stateStore';
const counterModel = useCounterModel();
</script>

<template>
  <div class="bg-green-700 mb-2 px-2 py-1 rounded text-center">
    This is an alert component. Counter: {{ counterModel.value }}
  </div>
</template>