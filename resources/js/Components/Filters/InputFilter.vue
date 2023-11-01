<template>
  <label :for="filter.name" class="block text-sm font-medium text-gray-700">{{
    filter.label
    }}</label>
  <div class="relative rounded-md shadow-sm">
    <Input
      :id="filter.name"
      v-model="filter.value"
      :placeholder="filter.label"
      name="search"
      type="text"
    />
  </div>
</template>

<script setup>
import Input from "@/Components/Forms/Inputs/InputForm.vue";

defineProps({
  /**
   * @property {String} name
   * @property {String} label
   * @property {String} value
   */
  filter: Object,
});
</script>
