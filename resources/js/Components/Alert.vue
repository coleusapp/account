<template>
  <div
      v-if="show"
      class="rounded-md bg-green-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <CheckCircleIcon :class="`h-5 w-5 text-${type}-400`" aria-hidden="true"/>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-${type}-800">
          <slot/>
        </p>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button
              :class="`inline-flex bg-${type}-50 rounded-md p-1.5 text-${type}-500 hover:bg-${type}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${type}-50 focus:ring-${type}-600`"
              type="button"
              @click.prevent="show = false"
          >
            <span class="sr-only">Dismiss</span>
            <XIcon aria-hidden="true" class="h-5 w-5"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {CheckCircleIcon, XIcon} from '@heroicons/vue/24/solid';
import {ref} from "vue";

defineProps({
  type: {
    type: String,
    default: 'green',
  },
})

const show = ref(true);
</script>
