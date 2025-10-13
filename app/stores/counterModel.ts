import { defineStore } from 'pinia';

export default defineStore('counterModel', {
  state: () => ({
    value: 0,
  }),
  actions: {
    addCounterValue() {
      this.value++;
      if (this.value > 10) {
        this.value = 10;
      }
    },
    substractCounterValue() {
      this.value--;
      if (this.value < 0) {
        this.value = 0;
      }
    },
  },
});
