<template>
  <section
    class="p-4 shadow-md flex justify-center items-center flex-col h-[35rem] bg-gradient-to-r from-indigo-600 to-blue-900"
  >
    <h1 class="font-bold text-4xl mb-4">Jakub Meysner</h1>
    <p class="text-2xl mb-8">Software Developer</p>

    <div class="flex gap-6">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-indigo-400"
      >
        <font-awesome-icon :icon="link.icon" size="2x" />
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class extends Vue {
  links = [
    {
      href: "https://github.com/jakubmeysner",
      icon: ["fab", "github"],
    },
    {
      href: "https://www.linkedin.com/in/jakubmeysner/",
      icon: ["fab", "linkedin"],
    },
    {
      href: "https://twitter.com/jakubmeysner",
      icon: ["fab", "twitter"],
    },
  ]
}
</script>
