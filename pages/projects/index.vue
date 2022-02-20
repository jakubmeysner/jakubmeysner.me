<template>
  <main class="p-4 py-16 md:px-12 lg:px-20 xl:px-28 flex flex-col items-center">
    <h1 class="font-bold text-4xl text-center mb-16">Projects</h1>

    <projects-list :projects="projects" />

    <a
      href="https://github.com/jakubmeysner"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-lg px-4 py-2 shadow mt-16"
    >
      View GitHub
    </a>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Project } from "~/common/project"

@Component({
  head: {
    title: "Projects",
  },
  async asyncData({ $content }) {
    const projects = await $content("projects").sortBy("order").limit(3).fetch()

    return {
      projects,
    }
  },
})
export default class extends Vue {
  projects!: Project[]
}
</script>
