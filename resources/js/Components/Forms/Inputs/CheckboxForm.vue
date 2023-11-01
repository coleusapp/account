<template>
  <div class="relative flex items-start">
    <div class="flex items-center h-5">
      <input
        :id="id"
        :name="name"
        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        type="checkbox"
        value="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
    </div>
    <div class="ml-3 text-sm">
      <label :for="id" class="font-medium text-gray-700">{{ label }}</label>
      <p v-if="help !== ''" id="comments-description" class="text-gray-500">{{ help }}</p>
    </div>
    <TransitionRoot
      :id="`${name}-error`"
      :show="hasError || !!form.errors[name]"
      as="p"
      class="mt-2 text-sm text-red-600"
      enter="transition-opacity duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-300"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      {{ hasError ? errorMessage : form.errors[name] }}
    </TransitionRoot>
  </div>
</template>

<script setup>
import { TransitionRoot } from "@headlessui/vue";

defineEmits(["update:modelValue"]);

defineProps({
  name: String,
  label: String,
  modelValue: Boolean,
  id: {
    type: String,
    default: (props) => props.name,
  },
  form: {
    type: Object,
    default() {
      return {errors: {}};
    },
  },
  hasError: {
    type: Boolean,
    default: true,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  help: {
    type: String,
    default: "",
  },
});
</script>
