<template>
  <button
    :disabled="form.processing"
    :type="type"
    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <TransitionRoot
      id="button-spinner"
      :show="form.processing"
      enter="transition-opacity duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-300"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <Spinner class="w-4 h-4"/>
    </TransitionRoot>
    <slot/>
  </button>
</template>

<script setup>
import Spinner from "@/Components/Icons/SpinnerIcon.vue";
import { TransitionRoot } from "@headlessui/vue";

defineProps({
  type: {
    type: String,
    default: "button",
  },
  form: {
    type: Object,
    default() {
      return {processing: false};
    },
  },
});
</script>
