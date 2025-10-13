<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  //layout: 'default',
  middleware: 'auth',
})

const { signinUser } = useUtils();

const userSchema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
})

type UserSchema = z.output<typeof userSchema>

const state = reactive<Partial<UserSchema>>({
  email: undefined,
  password: undefined
})

const toast = useToast()
const isSubmitting = ref(false)

async function onSubmit(event: FormSubmitEvent<UserSchema>) {
  if (!state.email || !state.password) return;

  isSubmitting.value = true;

  try {
    await signinUser(state.email, state.password);
    toast.add({
      title: 'Success',
      description: 'You have been signed in successfully.',
      color: 'success'
    });
    state.email = undefined;
    state.password = undefined;
  } catch (error) {
    console.error('Sign in error:', error);
    toast.add({
      title: 'Error',
      description: error instanceof Error ? error.message : 'Sign in failed. Please try again.',
      color: 'error'
    });
  } finally {
    isSubmitting.value = false;
  }
}

const isFormValid = computed(() => {
  return userSchema.safeParse(state).success;
});
</script>

<template>
  <div class="flex flex-col items-center">
    <UForm :schema="userSchema" :state="state" class="space-y-4 mt-4" @submit="onSubmit">
      <UFormField label="Email" name="email" class="flex flex-col gap-1">
        <UInput :ui="{ trailing: 'pe-1' }" class="bg-neutral-700 rounded-md" placeholder="enter your email"
          v-model="state.email" />
      </UFormField>

      <UFormField label="Password" name="password" class="flex flex-col gap-1">
        <UInput class="bg-neutral-700 rounded-md" placeholder="enter your password" v-model="state.password"
          type="password" />
      </UFormField>

      <UButton :disabled="!isFormValid || isSubmitting" :loading="isSubmitting" type="submit" class="px-12 py-2 mt-2"
        variant="outline" icon="i-lucide-rocket">
        {{ isSubmitting ? 'Signing in...' : 'Submit' }}
      </UButton>
    </UForm>
  </div>
</template>