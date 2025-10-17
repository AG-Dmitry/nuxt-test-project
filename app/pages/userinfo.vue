<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { userSchema } from '#shared/utils/validators';
import type { UserSchema } from '#shared/types/validators';
import useValidators from '~/stores/validators';

definePageMeta({
  //layout: 'default',
  middleware: 'auth',
})

const { loginUser } = useUtils();
const toast = useToast()
const isSubmitting = ref(false)
const validators = useValidators();

async function onSubmit(e: FormSubmitEvent<UserSchema>) {
  if (!validators.userFormState.email || !validators.userFormState.password) return;

  isSubmitting.value = true;

  try {
    await loginUser(validators.userFormState.email, validators.userFormState.password);
    toast.add({
      title: 'Success',
      description: 'You have been signed in successfully.',
      color: 'success'
    });
    validators.setUserFormState({ email: undefined, password: undefined });
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
  return userSchema.safeParse(validators.userFormState).success;
});
</script>

<template>
  <div class="flex flex-col items-center">
    <UForm :schema="userSchema" :state="validators.userFormState" class="space-y-4 mt-4" @submit="onSubmit">
      <UFormField label="Email" name="email" class="flex flex-col gap-1">
        <UInput :ui="{ trailing: 'pe-1' }" class="bg-neutral-700 rounded-md" placeholder="enter your email"
          v-model="validators.userFormState.email" />
      </UFormField>

      <UFormField label="Password" name="password" class="flex flex-col gap-1">
        <UInput class="bg-neutral-700 rounded-md" placeholder="enter your password"
          v-model="validators.userFormState.password" type="password" />
      </UFormField>

      <UButton :disabled="!isFormValid || isSubmitting" :loading="isSubmitting" type="submit" class="px-12 py-2 mt-2"
        variant="outline" icon="i-lucide-rocket">
        {{ isSubmitting ? 'Signing in...' : 'Submit' }}
      </UButton>
    </UForm>
  </div>
</template>