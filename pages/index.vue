<template>
  <main class="h-0 min-h-full flex flex-col justify-center items-center">
    <p class="font-bold text-4xl mb-2">Jakub Meysner</p>
    <p class="text-xl mb-4">Web developer</p>

    <ul class="flex space-x-6 text-3xl">
      <li v-for="link in socialLinks" :key="link.href">
        <a :href="link.href">
          <font-awesome-icon :icon="link.icon" :title="link.title" />
        </a>
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      socialLinks: [
        {
          href: 'https://github.com/jakubmeysner',
          icon: ['fab', 'github'],
          title: 'GitHub'
        },
        {
          href: 'https://twitter.com/jakubmeysner',
          icon: ['fab', 'twitter'],
          title: 'Twitter'
        },
        {
          href: 'https://www.linkedin.com/in/jakubmeysner',
          icon: ['fab', 'linkedin-in'],
          title: 'LinkedIn'
        },
        {
          href: 'mailto:hello@jakubmeysner.me',
          icon: ['fas', 'envelope'],
          title: 'Mail'
        }
      ]
    }
  }
})
</script>
