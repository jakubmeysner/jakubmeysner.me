<template>
  <main class="flex flex-col justify-center items-center p-8 gap-3">
    <h1 class="text-4xl font-semibold">Jakub Meysner</h1>

    <p class="text-xl">Software Engineer</p>

    <div class="flex justify-center items-center mt-5">
      <ul class="flex justify-center items-center gap-6">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="hover:text-neutral-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="link.icon" class="text-4xl" />
          </a>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  head: {
    titleTemplate: undefined,
  },
})
export default class extends Vue {
  links: {
    href: string
    icon: string[]
  }[] = [
    {
      href: "https://github.com/jakubmeysner",
      icon: ["fab", "github"],
    },
    {
      href: "https://www.linkedin.com/in/jakubmeysner/",
      icon: ["fab", "linkedin"],
    },
  ]
}
</script>
