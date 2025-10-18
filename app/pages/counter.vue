<script setup lang="ts">
import useCounterModel from '~/stores/counterModel';

definePageMeta({
  //layout: 'default',
  middleware: 'auth',
})

const counterModel = useCounterModel();
const { getTestData } = useUtils();

//// Test Neon DB data fetch ////
let testData = ref<string>('Test');

const displayTestData = async () => {
  const useTestData = await getTestData();
  testData.value = (useTestData.data[0].content);
};
//// Test Neon DB data fetch ////
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <div class="m-8 text-3xl">Counter: {{ counterModel.value }}</div>
    <button @click="counterModel.addCounterValue"
      class="bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 px-12 min-w-40 py-2 rounded text-3xl cursor-pointer">+</button>
    <button @click="counterModel.substractCounterValue"
      class="bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 px-12 min-w-40 py-2 rounded text-3xl cursor-pointer">—</button>
    <button @click="displayTestData"
      class="bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 px-12 min-w-40 py-2 rounded text-3xl cursor-pointer">{{ testData }}</button>
  </div>
</template>
