import { defineStore } from 'pinia';
import type { UserSchema } from '#shared/types/validators';

export default defineStore('validators', {
  state: () => ({
    userFormState: reactive<Partial<UserSchema>>({
      email: undefined,
        password: undefined
      })
    }),
    actions: {
      setUserFormState(userFormState: Partial<UserSchema>) {
        this.userFormState = userFormState;
      }
    }
})