<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const isFormValid = computed(() => {
  return schema.safeParse(state).success;
});

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' });
  state.email = '';
  state.password = '';
  console.log(event.data);
}
</script>

<template>
  <div class="flex flex-col items-center">
    <UForm :schema="schema" :state="state" class="space-y-4 mt-4" @submit="onSubmit">
      <UFormField label="Email" name="email" class="flex flex-col gap-1">
        <UInput :ui="{ trailing: 'pe-1' }" class="bg-neutral-700 rounded-md" placeholder="enter your email"
          v-model="state.email" />
      </UFormField>

      <UFormField label="Password" name="password" class="flex flex-col gap-1">
        <UInput class="bg-neutral-700 rounded-md" placeholder="enter your password" v-model="state.password"
          type="password" />
      </UFormField>

      <UButton :disabled="!isFormValid" type="submit" class="px-12 py-2 mt-2 " variant="outline" icon="i-lucide-rocket">
        Submit
      </UButton>
    </UForm>
  </div>
</template>