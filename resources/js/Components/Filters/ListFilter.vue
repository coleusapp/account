<template>
  <Menu v-model="filter.value" :filter="filter"/>
</template>

<script setup>
import Menu from "@/Components/Forms/Inputs/MenuForm.vue";

defineProps({
  filter: Object,
});
</script>
