<template>
  <section>
    <AppHead title="Forgot Password"/>
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
          Forgot Password
        </h2>
      </div>

      <div class="sm:mx-auto mt-8 sm:w-full sm:max-w-md">
        <div class="py-8 px-4 sm:px-10 bg-white sm:rounded-lg shadow">

        <form class="space-y-6" @submit.prevent="form.post(route('password.request'))">
          <Alert v-if="$page?.props?.flash?.message">{{ $page.props.flash.message }}</Alert>
          <Input
              v-model="form.email"
              :form="form"
              label="Email address"
              name="email"
              placeholder="Email address"
              type="email"
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
import Alert from "@/Components/Alert.vue";

let form = useForm({
  email: null,
});
</script>
