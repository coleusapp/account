<template>
  <section>
    <AppHead title="Reset Password"/>
    <div
        class="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen bg-gray-50"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
            alt="Workflow"
            class="mx-auto w-auto h-12"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        />
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Reset Password
        </h2>
      </div>

      <div class="sm:mx-auto mt-8 sm:w-full sm:max-w-md">
        <div class="py-8 px-4 sm:px-10 bg-white sm:rounded-lg shadow">
        <form class="space-y-6" @submit.prevent="form.post(route('password.update'))">
          <Input
              v-model="form.email"
              :form="form"
              label="Email address"
              name="email"
              placeholder="Email address"
              type="email"
          />

          <Input
              v-model="form.password"
              :form="form"
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
          />

          <Input
              v-model="form.password_confirmation"
              :form="form"
              label="Password confirmation"
              name="password_confirmation"
              placeholder="Password confirmation"
              type="password"
          />

          <Input
              v-model="form.token"
              type="hidden"
          />

          <div>
            <Button
                :disabled="form.processing"
                :form="form"
                type="submit"
            >
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
import AppHead from "@/Components/AppHead.vue";
import Button from "@/Components/Forms/Buttons/ButtonForm.vue";
import Input from "@/Components/Forms/Inputs/InputForm.vue";
import {useForm} from "@inertiajs/vue3";
import route from "ziggy-js";

const props = defineProps({
  token: {
    type: String,
    required: true,
  },
})

let form = useForm({
  email: null,
  password: null,
  password_confirmation: null,
  token: props.token,
});
</script>
