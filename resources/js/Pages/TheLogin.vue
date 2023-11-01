<script setup>
import Button from "@account/Components/Forms/Buttons/ButtonForm.vue";
import Checkbox from "@account/Components/Forms/Inputs/CheckboxForm.vue";
import Input from "@account/Components/Forms/Inputs/InputForm.vue";
import {Link, useForm} from "@inertiajs/vue3";
import route from "ziggy-js";
import Alert from "@account/Components/Alert.vue";
import AppHead from "@account/Components/AppHead.vue";

let form = useForm({
  email: null,
  password: null,
  remember: false,
});
</script>
<template>
  <section>
    <AppHead title="Login"/>
    <div
        class="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen bg-gray-50"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Login
        </h2>
      </div>

      <div class="sm:mx-auto mt-8 sm:w-full sm:max-w-md">
        <div class="py-8 px-4 sm:px-10 bg-white sm:rounded-lg shadow">

          <form class="space-y-6" @submit.prevent="form.post(route('postLoginWithEmail'))">
            <Alert v-if="$page?.props?.flash?.message">{{ $page.props.flash.message }}</Alert>
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

            <div class="flex items-center justify-between space-x-3">
              <Checkbox
                  id="remember"
                  v-model="form.remember"
                  label="Remember me"
                  name="remember"
              />

              <div class="text-sm text-right">
                <Link
                    :href="route('getForgetPasswordForm')"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button
                  :disabled="form.processing"
                  :form="form"
                  class="flex justify-center py-2 px-4 w-full"
                  type="submit"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
