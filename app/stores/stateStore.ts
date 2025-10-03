import { defineStore } from 'pinia';

export const useCounterModel = defineStore('counterModel', {
  state: () => ({
    value: 0,
  }),
  actions: {
    addCounterValue() {
      this.value++;
    },
    substractCounterValue() {
      this.value--;
    },
  },
});
