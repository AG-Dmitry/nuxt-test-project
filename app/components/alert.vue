<script setup lang="ts">
import { useCounterModel } from '~/stores/stateStore';
const counterModel = useCounterModel();
</script>

<template>
  <div class="bg-green-700 mb-2 px-2 py-1 rounded">
    This is an alert component {{ counterModel.value }}
  </div>
</template>