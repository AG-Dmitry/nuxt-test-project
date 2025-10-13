import type { CurrentServerUser } from '@stackframe/js';
import { defineStore } from 'pinia';

interface UserState {
  value: string | null;
}

export default defineStore('userModel', {
  state: (): UserState => ({
    value: null,
  }),
  actions: {
    loginUser(userEmail: string | null) {
      userEmail ? this.value = userEmail : this.value = null;
    },
    logoutUser() {
      this.value = null;
    },
  },
});
