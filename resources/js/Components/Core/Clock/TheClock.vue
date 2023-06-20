<script setup>
import {onUnmounted, ref} from "vue";

let interval = ref(null)
let time = ref(null)

interval.value = setInterval(() => {
  time.value = Intl.DateTimeFormat(navigator.language, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format()
}, 1000)

onUnmounted(() => {
  clearInterval(interval.value)
})
</script>
<template>
  <span>{{ time }}</span>
</template>
