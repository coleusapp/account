<template>
  <Head
      :title="title ? `${title} - ${$page.props.app.name}` : $page.props.app.name"
  >
    <slot/>
  </Head>
</template>

<script>
import {Head} from "@inertiajs/vue3";

export default {
  components: {
    Head,
  },
  props: {
    title: String,
  },
};
</script>
