<script setup>
import AppHead from "@account/Components/AppHead.vue";
import Button from "@ui/Components/Forms/Buttons/ButtonForm.vue";
import Input from "@ui/Components/Forms/Inputs/InputForm.vue";
import InertiaLink from "@ui/Components/InertiaLink.vue";
import {useForm} from "@inertiajs/vue3";
import TheH2 from "@ui/Components/Typography/TheH2.vue";
import route from "ziggy-js";

defineProps({
  github: String,
  google: String,
});

let form = useForm({
  email: null,
  password: null,
  password_confirmation: null,
  name: null,
});
</script>
<template>
  <AppHead title="Register"/>
  <div
      class="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen bg-gray-50"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <TheH2 class="text-center">Register</TheH2>
    </div>

    <div class="sm:mx-auto mt-8 sm:w-full sm:max-w-md">
      <div class="py-8 px-4 sm:px-10 bg-white sm:rounded-lg shadow">
        <form
            action="#"
            class="space-y-6"
            @submit.prevent="form.post(route('postRegisterWithEmail'))"
        >
          <div>
            <Input v-model="form.name" :form="form" label="Name" name="name"/>
          </div>

          <div>
            <Input
                v-model="form.email"
                :form="form"
                label="Email"
                name="email"
                type="email"
            />
          </div>

          <div>
            <Input
                v-model="form.password"
                :form="form"
                label="Password"
                name="password"
                type="password"
            />
          </div>

          <div>
            <Input
                v-model="form.password_confirmation"
                :form="form"
                label="Password confirmation"
                name="password_confirmation"
                type="password"
            />
          </div>

          <div class="flex justify-center items-center">
            <div class="text-sm">
              <InertiaLink :href="route('getLoginForm')">
                Already have an account?
              </InertiaLink>
            </div>
          </div>

          <div>
            <Button
                :disabled="form.processing"
                :form="form"
                class="flex justify-center py-2 px-4 w-full"
                type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
