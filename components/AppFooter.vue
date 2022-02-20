<template>
  <footer
    class="bg-zinc-700 shadow-inner p-4 md:px-12 md:py-6 lg:px-20 xl:px-28"
  >
    <div class="flex justify-end gap-6">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-indigo-400"
      >
        <font-awesome-icon :icon="link.icon" size="lg" />
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      links: [
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
      ],
    }
  },
})
</script>
