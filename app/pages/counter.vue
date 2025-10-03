<script setup lang="ts">
  import { useCounterModel } from '~/stores/stateStore';

  definePageMeta({
    //layout: 'default',
    middleware: 'auth',
  })

  const counterModel = useCounterModel();
  const blap = ref(0);
  const { sayHello } = useUtils();

  //sayHello();
</script>

<template>
  <div class="m-8 text-3xl">Blap: {{ blap }}</div>
  <div class="m-8 text-3xl">Counter: {{ counterModel.value }}</div>
  <button @click="counterModel.addCounterValue"
    class="bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 ml-8 px-12 py-2 rounded text-3xl cursor-pointer">+</button>
  <button @click="counterModel.substractCounterValue"
    class="bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 ml-8 px-12 py-2 rounded text-3xl cursor-pointer">—</button>
</template>