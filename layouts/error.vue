<template>
  <main class="h-0 min-h-full flex flex-col justify-center items-center">
    <h1 class="font-bold text-3xl mb-3">
      <template v-if="error.statusCode === 404">Page not found</template>
      <template v-else>An error occured</template>
    </h1>

    <nuxt-link to="/" class="text-lg">Return to home</nuxt-link>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head() {
    return {
      title:
        this.error.statusCode === 404 ? 'Page not found' : 'An error occured'
    }
  }
})
</script>
